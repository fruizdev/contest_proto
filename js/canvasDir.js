app.controller('Canvas_Ctrl', ['$scope', function ($scope) {
    $scope.x =50;
    $scope.y =50;
    $scope.radius=40;
    $scope.bottom=60;
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
        var numberC=1;
        ctx.canvas.width=  800;//window.innerWidth;
        ctx.font = "10px Arial";
        ctx.canvas.height=800;   
            
            btnPushC.bind('click', function () {
            if(scope.cnt != undefined  && scope.cnt != null  && scope.cnt.name.length >1 ){
                    var depth=1;    var exp=1;
                    for (e = 1; numberC >=  Math.pow(2, e) ; e++) {exp=e ;}     
                        depth = exp;
                    if (Math.pow(2, exp) < numberC){  depth = exp + 1 ; } 
                  //  console.log( "cnt: "  + numberC +", depth: "+depth +" , exp: "+ exp);
                    var PARTICIPANTES={ name : scope.cnt.name, nro:numberC, depth:depth, xcord:null, ycord:null}    
                    scope.Torneo.push(PARTICIPANTES);     
                    ctx.clearRect(0, 0,  ctx.canvas.width, ctx.canvas.height);
             
            // dibujar los nodos MATCH'S o rounds = numberC-1, como arbol binario
            for (var i = 0 ; i < scope.Torneo.length; i++ ){
                    var x = ctx.canvas.width - ( scope.Torneo[i].nro * 70 + scope.x);                         
                   
                    if( scope.Torneo[i].depth > 1 ){
                      var y = ctx.canvas.height / (  scope.Torneo[i].nro -scope.Torneo[i].depth ) + scope.Torneo[i].depth ;
                    }else{  var y = ctx.canvas.height / 2; }
                    
                    console.log("y: "+y+" x:"+x+ "cnt: "  + scope.Torneo[i].nro +", depth: "+scope.Torneo[i].depth +" , name:" + scope.Torneo[i].name);
                             
                   ///DRAW NODES AN WRITE TEXTS
                    ctx.beginPath();
                    ctx.arc(x,y,36,0,2*Math.PI);
                    ctx.fillText(  scope.Torneo[i].nro , x-5, y+22);
                    ctx.fillText( "d:"+  scope.Torneo[i].depth ,x-10,y+5);
                    ctx.fillText( "x:"+x ,x-10,y-5);
                    ctx.fillText( "y:"+y ,x-10,y-15);
                    ctx.stroke();
            }  
                    inputCnt.prop('value','') ;
                    scope.cnt.name=null;
                    numberC++;
                    scope.x = 50;
                    scope.y = 50;
            }
                else{ 
                    console.log("Debe ingresar un participante primero");  }
       
        });
            
        
        }
    }
}]);

