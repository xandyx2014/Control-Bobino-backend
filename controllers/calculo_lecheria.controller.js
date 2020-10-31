const { CalculoLecheria, RacionAnimal, RequerimientoAnimal } = require('../models');
// GET
async function index(req, res) {
    const { id } = req.auth;
    const body = await CalculoLecheria.findAll({
        where: {
            user_id: id
        }
    });
    return res.status(200).json(body);
}
async function show(req, res) {
    const idUser = req.auth.id;
    const queryParams = typeof req.query.q === 'undefined' ? 'LECHERIA': req.query.q;
    console.log(queryParams);
    const body = await CalculoLecheria.findAll({
        where: {
            user_id: idUser,
            tipo: queryParams
        },
        include: [
            {
                model: RacionAnimal,
                required: false
            },
            {
                model: RequerimientoAnimal,
                required: false
            },
        ]
    });
    return res.status(200).json(body);
}
// POST
async function store(req, res) {
    const { id } = req.auth;
    const body = await CalculoLecheria.create({
        ...req.body,
        user_id: id
    });
    return res.status(200).json(body);
}


// DELETE
// paciente/models/:id
async function destroy(req, res) {
    const { id } = req.params;
    const data = await CalculoLecheria.findByPk(id);
    await CalculoLecheria.destroy({
        where: {
            id
        }
    });
    await RequerimientoAnimal.destroy({
        where: {
            calculo_lecheria_id: data.id
        }
    });
    await RacionAnimal.destroy({
        where: {
            calculo_lecheria_id: data.id
        }
    });
    const statusCode = data ? 200: 404; 
    return res.status(statusCode).json(data); 
}




module.exports = {
    index,
    store,
    destroy,
    show
};