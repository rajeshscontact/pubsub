var module = angular.module('app', []);


// Managing User Controller
module.controller('UserController', function ($scope, UserService,EventEmitter) {

    $scope.users = UserService.list();

    $scope.saveUser = function () {
        UserService.save($scope.newuser);
        EventEmitter.publish($scope.newuser.name,'Added');
        $scope.newuser = {};
    }


    $scope.delete = function (id) {
        $scope.newuser = angular.copy(UserService.get(id));
        var userName=$scope.newuser.name;
        UserService.delete(id);
        if ($scope.newuser.id == id) $scope.newuser = {};
        EventEmitter.publish(userName,'Deleted');
    }


    $scope.edit = function (id) {
        $scope.newuser = angular.copy(UserService.get(id));
        EventEmitter.publish($scope.newuser.name,'Edited');
    }
});


//User Log Details Controller
module.controller('UserLogController',function($scope,EventEmitter){
    $scope.alert='none';
    EventEmitter.subscribe($scope, function(user,updateType){
        $scope.alert='User: '+user+' has been '+updateType;
    })
});