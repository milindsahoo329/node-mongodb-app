const db = require("../models");
const Agency = db.agency;
const Client = db.client;

module.exports = {

    create : async (req, res) =>{
        const { name, address1, address2, state, city, phone, clients } = req.body;
        Agency.create({
            name, 
            address1, 
            address2, 
            state, 
            city, 
            phone
        })
        .then((agency)=>{

            clients[0].agency = agency._id;

            Client.create(clients[0])
            .then((createdClient)=>{
                console.log(createdClient._id);
                let filter = {
                    _id : agency._id
                };
    
                let update = {
                    clients : [createdClient._id]
                }

                Agency.findOneAndUpdate(filter, update, {
                    new: true,
                    useFindAndModify : false
                })
                .then((agencyUpdated)=>{
                    return res.status(201).send(agencyUpdated);
                });

            });                

        });         
        
    },

    findOneByTotalAggregate: async (req, res) =>{

        const findMaxTotalBill = await Client.aggregate([{
            $group: {
              "_id": "$agency",
              "total": {
                $sum: "$total_bill"
              }
            }            
          }]).sort({total:-1}).limit(1);

        //  console.table(findMaxTotalBill);

        let result = {};

        const findAgent = await Agency.findById(findMaxTotalBill[0]._id).select({ "name": 1, "clients": 1, "_id": 0});

        const findClients = await Client.find({"_id": { "$in": findAgent.clients }}).select({ "name": 1, "_id": 0});

        result.agentName = findAgent.name;
        result.clientName = findClients.map((a)=>a.name);
        result.totalBill = findMaxTotalBill[0].total;

        return res.status(200).send(result);

    }
}