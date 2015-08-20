module.service('EventEmitter', function($rootScope){
  //local constants for the message
  var _editEventMessage='eventMessage';

  //publishing the event
  //var userUpdated=function(user,updateType){
  var publish = function(eventName, payLoad){
    console.log('I am called '+payLoad);
    $rootScope.$broadcast(_editEventMessage,{
        eventName:eventName,
        payLoad:payLoad
    });
  };

  //subscribing the event
  //var onUserUpdated=function($scope, handler){
  var subscribe=function($scope, handler){
    $scope.$on(_editEventMessage, function(event,message){
        //handler is passed with message details
        handler(message.eventName, message.payLoad);
    });
  };

  //other events go here
  return{
    publish:publish,
    subscribe:subscribe
  };
});