var Apple = require('./Apple.js');
var Patient = require('./js-models/Patient.js')

var apple = new Apple('macintosh');
apple.color = "reddish";
console.log(apple.getInfo());

var patient = new Patient();
patient.name = "Quyen Castellanos"
console.log(patient.toString());