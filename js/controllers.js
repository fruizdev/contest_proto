var app = angular.module('TournamentGen', []);

app.controller('Insc_Ctrl', ['$scope', function ($scope) {
    // Define $scope.competitor as an array
    $scope.contester = [];
     var labelGen =  angular.element(document.querySelector( '#genResult' )); 
        
      angular.element(document.querySelector( '#genkeys' )).bind('click', function () {
           labelGen.empty();
        var cantCont=$scope.contester.length;
             var Torneo = [];
            var match;
         if( cantCont >=2){   
            var exp;
            for (e = 1; cantCont >=  Math.pow(2, e) ; e++) {exp=e ;}     
            var cupos_1ronda= Math.pow(2, exp) ;
            var cupos_elim = cantCont - Math.pow(2, exp) ;  
            var participantes_1ronda =  Math.pow(2, exp) - (cantCont  - Math.pow(2, exp) );  
            var genResult = angular.element('<h4> <strong>' + cantCont  + '</strong> Participantes.<br> Hay <strong>' + cupos_1ronda + '</strong> cupos en primera ronda,<strong> '  + cupos_elim +'</strong> a definir desde eliminatorias.</h4>');
            labelGen.append(genResult); 
         
           for(i=0 ; cantCont > i ; i++){
               if( i < participantes_1ronda){
                   if( (participantes_1ronda - i) > i){
                       match = { c1: $scope.contester[i],  c2:$scope.contester[i+1], nro:null, round:1, link:null, prio:-1} ;
                       Torneo.push(match);  
                   }else{ 
                       match = { c1: $scope.contester[i],  c2: "", nro:null, round:1, link:null, prio:-1} ;
                       Torneo.push(match); 
                   }         
               }
               else if( i >= participantes_1ronda){
                   match = { c1: $scope.contester[i],  c2: "", nro:null, round:0, link:null, prio:-1} ;
                   Torneo.push(match);       
               }
                   
           }
             
            console.log( Torneo );        
             
             
             
             // definir vs de eliminatoria // empieza en cupos_1ronda + 1, hasta participantes	total
            for( i = (participantes_1ronda); i < cantCont; i=i+2 ){     
              document.getElementById("faseElim").innerHTML=  
                  document.getElementById("faseElim").innerHTML + "<br>" +  i+") "+ $scope.contester[i] + " v/s " + (i+1)+') ' + $scope.contester[i+1];                
            }
                
          // definir vs de primera ronda que esperan contendor dede eliminatoria
            // los primeros x (cupos_elim) participantes se enfrentana nadie (esperan su contendor desde la elim.) 
            for( e = 1 ; e <= cupos_elim ; e++){
                document.getElementById("1ronda").innerHTML= 
                    document.getElementById("1ronda").innerHTML + "<br>" +  e+") "+ $scope.contester[e] + " v/s " + (e+1)+') ' + $scope.contester[e+1];  
            }

            // definir vs de primera ronda que ya tienen contendor en primera ronda (no desde eliminatoria)
            //empieza en cupos_1ronda hasta, cupos_1ronda.lenght
             for( p = (cupos_elim+1) ; p <= participantes_1ronda ; p=p+2){
                   document.getElementById("1ronda").innerHTML= 
                   document.getElementById("1ronda").innerHTML + "<br>" +  p+") "+ $scope.contester[p] + " v/s " + (p+1)+') ' + $scope.contester[p+1];  
            }
                 
         
         }
      });
    
    // This is just so you can see the array values changing and working! Check your console as you're typing in the inputs :)
    $scope.$watch('contester', function (value) {         console.log(value);     }, true);
}]);

 



app.directive('addToTheList', ['$compile', function ($compile) { // inject $compile service as dependency
    return {
        restrict: 'A',
        link: function (scope, element, attrs,$scope) {
         // click on the button to add new iteme in the list
            var btnAdd =  angular.element(document.querySelector( '#addComp' ));
            var btnRestart =  angular.element(document.querySelector( '#restartTournament' ));     
            var contesterInput =  angular.element(document.querySelector( '#contesterInput' ));
             var labelGen =  angular.element(document.querySelector( '#genResult' )); 
            var count;
            
          
            btnAdd.bind('click', function () { 
            if( scope.contester.name.length >1 ){
                count = scope.contester.push(scope.contester.name);
                console.log( count + ") .- " + scope.contester.name);
                var listItem = angular.element('<li class="mdl-list__item"> <span class="mdl-list__item-primary-content">'+count+') ' + scope.contester.name + ' </span></li>');
                element.find('ol').append(listItem);
                //clean competitors input  
                contesterInput.prop('value','') ;
            //   contesterInput.focus();
                scope.contester.name=null;
             
            }
            });
        // COMENZAR DE NUEVO !!!!!  !!!!!!!!!!!!!!!!!  
            btnRestart.bind('click', function () {
                 labelGen.empty();
                contesterInput.prop('value','') ;
                element.find('ol').empty();
                scope.contester =[];
               document.getElementById("1ronda").innerHTML= ""; 
                document.getElementById("faseElim").innerHTML=  "";

        });
            
        
        }
    }
}]);

