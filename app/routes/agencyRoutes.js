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

  app.post("/api/agency/add", controller.create);
  
  app.get("/api/agency/findByTotal", controller.findOneByTotalAggregate);
//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};