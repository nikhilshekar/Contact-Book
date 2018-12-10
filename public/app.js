var myApp = angular.module("myApp",[]);

myApp.controller("myController",function($scope,$http){

    $scope.newContact = {}; 
    $scope.clickedContact = {};
    $scope.message = "";
    $scope.contactList = [];

    $http.get("contactList.json").then(function(response){
        $scope.contactList = response.data;
    });  

    $scope.addContact = function(){
        $scope.contactList.push($scope.newContact);
        $scope.newContact = {}; 
        $scope.message = "New contact added successfully!";
    };

    $scope.selectContact = function(list){
        $scope.clickedContact = list;
    };

    $scope.updateContact = function(){
        $scope.message = "Contact updated successfully!";
    };

    $scope.deleteContact = function(){
        $scope.contactList.splice($scope.contactList.indexOf($scope.clickedContact),1);
        $scope.message = "Contact deleted successfully!"
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };
  
});