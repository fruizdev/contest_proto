app.controller('Canvas_Ctrl', ['$scope', function ($scope) {
    console.log('ctrl cnt')
    $scope.x =50;
    $scope.y =50;
    $scope.radius=40;
    $scope.bottom=60;
    $scope.cntArr = [];
      $scope.Torneo = [];
 
}]);

app.directive('canvasDir', ['$compile', function ($compile) { // inject $compile service as dependency
    return {
        restrict: 'A',
        link: function (scope, element, attrs,$scope) {
        var inputCnt =  angular.element(document.querySelector( '#directC' ));
        var btnPushC =  angular.element(document.querySelector( '#pushC' ));
        var myc =  document.getElementById("myCanvas");
        var ctx = myc.getContext("2d");  
        ctx.canvas.width=  800;//window.innerWidth;
        ctx.font = "10px Arial";
       ctx.canvas.height=800;   
            
            //PRESIONA EL BTN, PUSCH CNT AL GRAFO
            btnPushC.bind('click', function () {
            if(scope.cnt != undefined  && scope.cnt != null  && scope.cnt.name.length >1 ){
                //PUSH TO ARR[] , CALCULATE DEPTH
                //aqui crear obj match y agregarlo al arreglo torneo
               
                
                var numberC = scope.cntArr.push(scope.cnt.name);
                var exp;
                var depth=1;
                 var exp;
                for (e = 1; numberC >=  Math.pow(2, e) ; e++) {exp=e ;}     
                depth = exp;
                console.log(exp);
                if (Math.pow(2, exp) < numberC){  depth = exp + 1 ;}  
                var match={ name : scope.cnt.name, nro : numberC,  depth:depth}
                scope.Torneo.push(match);     
                console.log(  scope.Torneo);
 
                //limpiar canvas, recorrer arreglo y asignar propiedades a cada nodo: x, y, weight,
                ctx.clearRect(0, 0,  ctx.canvas.width, ctx.canvas.height);
               //  ctx.canvas.height = depth*120; 
               // myc.style.height = (depth * 160)+"px";
               // console.log("depth: "+ depth)
                  
 
               
                //aca recorrer cada obj del array
                //
                for (var i = 1 ; i < scope.cntArr.length+1; i++ ){
                  
                    
                    var x = (ctx.canvas.width / depth)-100;
                    
                    for (var d=1; d <= depth;d++){
                         y = (ctx.canvas.height / depth)+100;
                    }

            
                    
                    ctx.beginPath();
                   // ctx.arc(x, y , scope.radius, 0, 2*Math.PI); 
                  //  ctx.fillText(scope.cntArr[i],x, y);
                    ctx.stroke();    
                }
              


                    inputCnt.prop('value','') ;
                    scope.cnt.name=null;
        
                    scope.numberC++;
            }
                else{ console.log("Debe ingresar un participante primero");  }
       
        });
            
        
        }
    }
}]);

