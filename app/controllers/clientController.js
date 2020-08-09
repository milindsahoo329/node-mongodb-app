const Joi = require('joi');
const db = require("../models");
const Client = db.client;

module.exports = {

    // The client update can update all the fields except for the agency id

    update: async (req, res) => {

        const schema = Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required().length(10).regex(/^\d+$/),
            total_bill: Joi.number().required(),
            agency: Joi.string().required()
        });

        const validation = await schema.validate(req.body);

        if (validation.error) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: validation.error
            });
        } else {

            const { id, name, email, phone, total_bill, agency } = req.body;

            const clientById = await Client.findOne({
                _id: id,
                agency: agency
            });

            clientById.name = name;
            clientById.email = email;
            clientById.phone = phone;
            clientById.total_bill = total_bill;

            await clientById.save();

            return res.status(200).send({ success: true });

        }


    }

}