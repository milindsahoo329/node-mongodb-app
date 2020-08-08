const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/authController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

/**
 * @api {post} /api/auth/signup Signup as an user
 * @apiGroup Auth
 * @apiParam {String} username name of the user
 * @apiParam {String} email email id of the user
 * @apiParam {String} password password for the user
 * @apiParam {Array} roles roles for the user
 * @apiParamExample {json} Input
 * {
 *	 "username":"mrxy",
 *	 "email":"mrxy@xyz.com",
 *	 "pasword":"9080808081",
 *	 "roles":["user"]
 * }
 * @apiSuccess {String} User was registered successfully!
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    User was registered successfully!
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

/**
 * @api {post} /api/auth/signin Signin to get token
 * @apiGroup Auth
 * @apiParam {String} username name of the user
 * @apiParam {String} password password for the user
 * @apiParamExample {json} Input
 * {
 *	 "username":"mrxy",
 *	 "pasword":"9080808081"
 * }
 * @apiSuccess {String} id id of the user in database
 * @apiSuccess {String} username name of the user
 * @apiSuccess {String} email email id of the user
 * @apiSuccess {String} password password for the user
 * @apiSuccess {Array} roles roles for the user
 * @apiSuccess {String} token Token to be used
 * @apiSuccessExample {json} User Details
 *  HTTP/1.1 200 OK
 *    {
 *      "id": "5f2d9870506bbb22709ed9c5",
 *      "username": "Milind Sahoo",
 *      "email": "milind@xyz.com",
 *      "roles": [
 *        "ROLE_USER"
 *      ],
 *      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMmQ5ODcwNTA2YmJiMjI3MDllZDljNSIsImlhdCI6MTU5Njg1NzYwMiwiZXhwIjoxNTk2OTQ0MDAyfQ.ZvXQ455KXPq9DbVhbBtOBJDqOCSZsEQFu09bSxx4nCo"
 *   }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */

  app.post("/api/auth/signin", controller.signin);
};