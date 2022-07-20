(function (){
'use strict';

angular.module('asignment1', [])

.controller('asignment1Controller', Asignment1Controller);

Asignment1Controller.$inject = ['$scope'];

function Asignment1Controller ($scope){
    $scope.lunch = '';
    $scope.message = '';

    $scope.check = function (){
        if($scope.lunch === ''){
            $scope.message = 'Empty';
        }else{
            var dataValue = $scope.lunch;
            var word = dataValue.split(',');
            console.log(word.length);
            
            if(word.length <= 3){
                $scope.message = 'Enjoy';
            }else if(word.length > 3){
                $scope.message = 'Too much!';
            }
        } 
    };
}

})();