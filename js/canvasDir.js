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
        var tournament = new Tree();
        ctx.canvas.width=  800;//window.innerWidth;
        ctx.font = "10px Arial";
        ctx.canvas.height=800;   
            
            btnPushC.bind('click', function () {     
            tournament.insertParticipante(numberC , scope.cnt.name);
            var M = tournament.createMatchs();            
            ctx.clearRect(0, 0,  ctx.canvas.width, ctx.canvas.height);
            //   console.log(M);   
            for (var i = 0 ; i < M.length-1; i++ ){
                    var x =   parseInt(ctx.canvas.width - ( M[i].number * 70 + scope.x),10);                         
                   
                    if( M[i].level > 1 ){
                      var y = parseInt(ctx.canvas.height / ( M[i].level ),10) ;
                    }else{  var y = parseInt(ctx.canvas.height / 2,10); }
                    
                     console.log( M[i].cnt1.name +" VS " + M[i].cnt2.name);        
                   ///DRAW NODES AN WRITE TEXTS
                    ctx.beginPath();
                    ctx.arc(x,y,36,0,2*Math.PI); 
                    ctx.fillText( "nro:" + i , x-10, y-20 );
                    ctx.fillText( "y:" + y , x-10, y-10 );
                    ctx.fillText( "x:" + x , x-10, y );
                    ctx.fillText( "d:"+  M[i].level , x-10, y+10);
                    ctx.fillText(  M[i].cnt1.name + " VS " + M[i].cnt2.name , x-15, y+22);
                    ctx.fillText( numberC+") "+M[i].cnt1.name , 20 , 20+numberC*10 );    
                    ctx.stroke();
            }  
                   

                    inputCnt.prop('value','') ;
                    scope.cnt.name=null;
                    numberC++;
                    scope.x = 50;
                    scope.y = 50;
           
       
        });
            
        
        }
    }
}]);

