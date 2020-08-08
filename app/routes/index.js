module.exports = function(app) {
    require('./authRoutes')(app);
    require('./userRoutes')(app);
    require('./agencyRoutes')(app);
    require('./clientRoutes')(app);
}