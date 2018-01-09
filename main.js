var ducument = function (name) {
    this.documents = 10; 
this.employeeName = name;
}

var employee = function (name) {
    this.name = name; 
}

employee.prototype.work = function (office) {
this.employeeName = name; 
for (let i=0; i<10; i++){
let doc = new document(name);
office.document.push(doc);
}
}

var manager = function (name) {
    this.name = name;
    this.employees = []; 
}

manager.prototype.hireEmployee = function() {
    var employeeName= new employee(name); 
    this.emloyees.push(employeeName);
}

manager.prototype.askEmployeeToWork = function() {
this.employees.work(); 
}

var cleaner = function (name) {
this.name = name;
}

cleaner.prototype.clean = function() {
    console.log("clean");
}

var office = function() {
    documents = [];
    managers = [];
    cleaners = [];
}

office.prototype.hireManager = function(name){
    var manager = new manager(name);
    this.managers.push(manager);
}

office.prototype.hireCleaner = function(name) {
    var cleaner = new cleaner(name);
    this.cleaners.push(cleaner); 
}

office.prototype.startWorkDay = function() {
    for (var i = 0; i < office.length; i++) {
        for (var j = 0; j < office.cleaners.length; j++) {
            office[i].cleaners[j].askEmployeeToWork();
        }
        for (var k = 0; k < office.managers.length; k++) {
            office[i].managers[k].askEmployeeToWork();
        }
    }
}