const { RequerimientoAnimal } = require('../models');
// GET
async function index(req, res) {
    const { id } = req.params;
    const body = await RequerimientoAnimal.findAll({
        where: {
            calculo_lecheria_id: id
        }
    });
    return res.status(200).json(body);
}
// POST
async function store(req, res) {
    const { id } = req.params;
    const body = await RequerimientoAnimal.create({
        ...req.body,
        calculo_lecheria_id: id
    });
    return res.status(200).json(body);
}


// DELETE
// paciente/models/:id
async function destroy(req, res) {
    const { id } = req.params;
    const data = await RequerimientoAnimal.findByPk(id);
    const body = await RequerimientoAnimal.destroy({
        where: {
            id
        }
    });
    const statusCode = data ? 200: 404; 
    return res.status(statusCode).json(data); 
}




module.exports = {
    index,
    store,
    destroy
};