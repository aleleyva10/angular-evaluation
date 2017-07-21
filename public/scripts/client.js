var myApp = angular.module('myApp', []);


myApp.controller('AngularEval', function(){
var vm = this;

vm.info = [];

vm.addInfo = function() {
  console.log('in vm.addInfo');

var newInfo = {
  info: vm.userInput
};
  console.log('new info', newInfo);
  vm.info.push(newInfo);
  console.log(vm.info);
  vm.userInput = '';
};


vm.deleteInfo = function(index) {
   console.log('in deleteInfo:', index);
   vm.info.splice(index, 1);
 }; // end deleteInfo


});
