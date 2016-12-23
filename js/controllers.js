 
var app = angular.module('TournamentGen', []);


/**
app.controller('customersCtrl', function($scope, $http) {
    $http.get("customers.gfphp").then(function (response) {
        $scope.names = response.data.records;
    });
});
 */

app.controller('Insc_Ctrl', ['$scope', function ($scope) {
    // Define $scope.competitor as an array
    $scope.competitor = [];
    // Create a counter to keep track of the additional competitor inputs
    $scope.inputCounter = 0;
    // This is just so you can see the array values changing and working! Check your console as you're typing in the inputs :)
    $scope.$watch('competitor', function (value) {         console.log(value);     }, true);
}]);

// I've created this directive as an example of $compile in action. 
app.directive('addInput', ['$compile', function ($compile) { // inject $compile service as dependency
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // click on the button to add new input field
            element.find('button').bind('click', function () {
                // I'm using Angular syntax. Using jQuery will have the same effect
                // Create input element
                var input = angular.element('<div><input type="text" ng-model="competitor[' + scope.inputCounter + ']"></div>');
                // Compile the HTML and assign to scope
                var compile = $compile(input)(scope);

                // Append input to div
               element.append(input);

                // Increment the counter for the next input to be added
                scope.inputCounter++;
            });
        }
    }
}]);