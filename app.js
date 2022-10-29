const Test = require('./modules/test.controller')
const express = require("express");

var app = express();

app.listen(5000, function () {

console.log("Started application on port %d", 5000);

});
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/Calculate",Test);

app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
//Test.solution();
module.exports = app;