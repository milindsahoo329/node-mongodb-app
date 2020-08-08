const db = require("../models");
const Client = db.client;

module.exports = {

    // The client update can update all the fields except for the agency id

    update : async (req, res) =>{
        const { id, name, email, phone, total_bill, agency } = req.body;

        const clientById = await Client.findOne({
            _id : id,
            agency : agency
        });

        clientById.name = name;
        clientById.email = email;
        clientById.phone = phone;
        clientById.total_bill = total_bill;

        await clientById.save();

        return res.status(200).send({success:true});
    }

}