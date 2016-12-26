var app = angular.module('TournamentGen', []);

app.controller('Insc_Ctrl2', ['$scope', function ($scope) {
    // Define $scope.competitor as an array
    $scope.contester = [];
    // Create a counter to keep track of the additional competitor inputs
    $scope.contesterCounter = 0;
    // This is just so you can see the array values changing and working! Check your console as you're typing in the inputs :)
    $scope.$watch('contester', function (value) {         console.log(value);     }, true);
}]);


// I've created this directive as an example of $compile in action. 
app.directive('addToTheList', ['$compile', function ($compile) { // inject $compile service as dependency
    return {
        restrict: 'A',
        link: function (scope, element, attrs,$scope) {
         // click on the button to add new iteme in the list
            var btnAdd =  angular.element(document.querySelector( '#addComp' ));
            var btnGen =  angular.element(document.querySelector( '#genkeys' ));
            var btnRestart =  angular.element(document.querySelector( '#restartTournament' ));
            var labelGen =  angular.element(document.querySelector( '#genResult' ));
            var contesterInput =  angular.element(document.querySelector( '#contesterInput' ));
            var ELIM =     angular.element(document.querySelector( '#elim' ));
            var count;
            
          
            btnAdd.bind('click', function () { 
            if( scope.contester.name.length >1 ){
                count = scope.contester.push(scope.contester.name);
                console.log( count + ") .- " + scope.contester.name);
                var listItem = angular.element('<li class="mdl-list__item"> <span class="mdl-list__item-primary-content">'+count+') ' + scope.contester.name + ' </span></li>');
                // Compile the HTML and assign to scope
               // var compile = $compile(listItem)(scope);
                // add competitors to the list
                element.find('ol').append(listItem);
                //clean competitors input  
                contesterInput.prop('value','') ;
                scope.contester.name=null;
                // Increment the counter for the next input to be added
                scope.contesterCounter++;
            }
            });
              
            btnRestart.bind('click', function () {
                labelGen.empty();
                contesterInput.prop('value','') ;
                element.find('ol').empty();
                scope.contester =[];
                         
        });
            
           // GENERAR LLAVES  !!!!!!!!!!!!!!!!!
            btnGen.bind('click', function () {
            if( count >=4){
            labelGen.empty();
            for (exp = 1; count >=  Math.pow(2, exp) ; exp++) {
                var cupos_1ronda= Math.pow(2, exp) ;
                var cupos_elim = count - Math.pow(2, exp) ;  
                var participantes_1ronda =  Math.pow(2, exp) - ( count  - Math.pow(2, exp) );           
	        }  
                
            var genResult = angular.element('<h4> <strong>' + count  + '</strong> Participantes.<br> Hay <strong>' + cupos_1ronda + '</strong> cupos en primera ronda,<strong> '  + cupos_elim +'</strong> a definir desde eliminatorias.</h4>');
            labelGen.append(genResult); 
            
             // definir vs de eliminatoria
             // empieza en cupos_1ronda + 1, hasta participantes	total
            for( i = (participantes_1ronda+1); i <= count; i=i+2 ){
               
             var round = angular.element( '<p>HHH</p>' );// '<li class="mdl-list__item>"' + scope.contester[i] +' v/s ' + scope.contester[i+1]  + '</li>') ;   
               
              ELIM.append(round);
              console.log( scope.contester[i] + " v/s " + scope.contester[i+1] );                        
            }
                
                       
              }                
            });     
        }
    }
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