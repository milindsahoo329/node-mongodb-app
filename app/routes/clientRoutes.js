const { authJwt } = require("../middlewares");
const controller = require("../controllers/clientController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

/**
 * @api {post} /api/client/update Update client details
 * @apiGroup Client
 * @apiParam {String} id Client id
 * @apiParam {String} name Client name
 * @apiParam {String} email Client email
 * @apiParam {String} phone Client phone
 * @apiParam {String} total_bill Client's total amount
 * @apiParamExample {json} Input
 * {
 *	 "id":"5f2e232f0203860cd84154e2",
 *	 "name":"Mr. XY",
 *	 "email":"mrxy@xyz.com",
 *	 "phone":"9080808081",
 *	 "total_bill":200,
 *	 "agency":"5f2e232f0203860cd84154e1"
 * }
 * @apiSuccess {Boolean} success If updated, returns true
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success":true
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */

  app.post("/api/client/update", controller.update);
  
};