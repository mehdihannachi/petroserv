/*
Author URI: https://www.kawami.io/
*/
module.exports = function(app, transporter) {
    require('./routes/indexRoute')(app, transporter);
};