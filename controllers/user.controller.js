const { User } = require('../models');
const bcrypt = require('bcrypt');
const { jwtSign } = require('../utils/jwt.utils');
async function auth(req, res) {
    try {
        const {
            username,
            password,
            nombre
        } = req.body;
        const usuarioResp = await User.findOne({
            where: {
                username: username,
            }
        });
        if (usuarioResp === null) {
            const passworbBcrypt = await bcrypt.hash(password, 10);
            const usuarioCreate = await User.create({
                username: username,
                password: passworbBcrypt,
                nombre,
            });
            usuarioCreate.password = '...';
            return res.status(200).json(usuarioCreate);

        }
        return res.status(409).json({
            message: 'el nombre del usuario ya existe'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Interal Server Error'
        });
    }


}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        const usuarioDB = await User.findOne({
            where: {
                username: username,
            },
        });
        if (usuarioDB === null) {
            console.log(usuarioDB);
            return res.status(404).json({
                message: 'No existe el usuario en la base de datos'
            });
        }
        const passwordBcrypt = await bcrypt.compare(password, usuarioDB.password);
        if (passwordBcrypt) {
            usuarioDB.password = '';
            const token = jwtSign(usuarioDB);
            return res.status(200).json({
                data: usuarioDB,
                token: token
            });
        }
        return res.status(403).json({
            message: 'Credendiales equivocadas usuario o contraseña'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'interal Server Error'
        });
    }
}
async function update(req, res) {
    try {
        const { id } = req.params;
        const body = await User.update({
            ...req.body,
        }, {
            where: {
                id
            }
        });
        return res.status(200).json(body);
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}
module.exports = {
    auth,
    login,
    update
};