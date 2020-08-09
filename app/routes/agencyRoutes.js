const { authJwt } = require("../middlewares");
const controller = require("../controllers/agencyController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  /**
 * @api {post} /api/agency/add Add 
 * @apiGroup Agency
 * @apiParam {String} name Agency Name
 * @apiParam {String} address1 Agency address 1
 * @apiParam {String} address2 Agency address 2
 * @apiParam {String} state Name of State
 * @apiParam {String} city Name of city
 * @apiParam {String} phone Contact number
 * @apiParam {Array} clients Information of clients
 * @apiParamExample {json} Input
 *  {
 *  	"name":"Agency 2",
 *  	"address1":"MG Road",
 *  	"address2":"SB Road",
 *  	"state":"Maharashtra",
 *  	"city":"Pune",
 *  	"phone":"9000090000",
 *  	"clients":[{
 *  		"name":"Mr. A",
 *  		"email":"mra@xyz.com",
 *  		"phone":"8080808081",
 *  		"total_bill":200
 *  	}]
 *  }
 * @apiSuccess {Array} clients Information of clients
 * @apiSuccess {String} name Agency Name
 * @apiSuccess {String} address1 Agency address 1
 * @apiSuccess {String} address2 Agency address 2
 * @apiSuccess {String} state Name of State
 * @apiSuccess {String} city Name of city
 * @apiSuccess {String} phone Contact number
 * @apiSuccess {String} createdAt entry creation data in database
 * @apiSuccess {String} updatedAt entry updation data in database
 * @apiSuccessExample {json} Agency Details
 *    HTTP/1.1 200 OK
 *    {
 *      "clients": [
 *         "5f2f64307f39b75dd057232c"
 *      ],
 *      "_id": "5f2f64307f39b75dd057232b",
 *      "name": "Agency 2",
 *      "address1": "MG Road",
 *      "address2": "SB Road",
 *      "state": "Maharashtra",
 *      "city": "Pune",
 *      "phone": "9000090000",
 *      "createdAt": "2020-08-09T02:49:20.718Z",
 *      "updatedAt": "2020-08-09T02:49:20.748Z",
 *      "__v": 0
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */


  app.post("/api/agency/add", controller.create);

  /**
 * @api {get} /api/agency/findByTotal find agency with highest total bill
 * @apiGroup Agency
 * @apiSuccess {String} agentName name of the user
 * @apiSuccess {Array} clientName clients of the agency
 * @apiSuccess {Number} totalBill Total Bill from the clients
 * @apiSuccessExample {json} Required Details
 *    HTTP/1.1 200 OK
 *    {
 *       "agentName": "Agency 2",
 *       "clientName": [
 *           "Mr. A"
 *       ],
 *       "totalBill": 200
 *     }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Validation error
 *    HTTP/1.1 422 Unprocessable Entity
 *    {
 *      "status": "error",
 *      "message": "Invalid request data",
 *       "data": { }
 *     }
 */
  
  app.get("/api/agency/findByTotal", [authJwt.verifyToken], controller.findOneByTotalAggregate);

};