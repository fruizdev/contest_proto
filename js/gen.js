
    function creaLlaves() {
    	document.getElementById("elim").innerHTML= "ELIMINAT0RIAS <br>";
    	document.getElementById("1ronda").innerHTML="PRIMERA RONDA <br>";

    	var participantes =  document.getElementById("nro").value;  // el numero de participantes
    if(participantes < 1000){
        for (exp = 1; participantes >=  Math.pow(2, exp) ; exp++) {
    	  
    	  	 // cupos disponibles en primera ronda
    	  	var cupos_1ronda= Math.pow(2, exp) ;
	 		document.getElementById("cupos_1ronda").value = cupos_1ronda;
	 		
	 		// cupos disponibles en la eliminatoria
	 		var cupos_elim = participantes - Math.pow(2, exp) ;  
	 		document.getElementById("cupos_elim").value = cupos_elim; 


	 		//paricipantes instalados en primera ronda
			var participantes_1ronda =  Math.pow(2, exp) - ( participantes  - Math.pow(2, exp) ); // numero participantes primera 
	 		document.getElementById("primera_ronda").value = participantes_1ronda;

	}

        document.getElementById("elim").innerHTML= document.getElementById("elim").innerHTML + "participantes : " + cupos_elim * 2;
		document.getElementById("1ronda").innerHTML= document.getElementById("1ronda").innerHTML + "participantes " + participantes_1ronda;

        // definir vs de eliminatoria
        // empieza en cupos_1ronda + 1, hasta participantes	total
        for( i = (participantes_1ronda+1); i <= participantes; i=i+2 ){
                  document.getElementById("elim").innerHTML= document.getElementById("elim").innerHTML + "<br>" + (i) +" v/s " + (i+1);
                  console.log( i + " v/s " + (i+1) );                        
            }
        
        // definir vs de primera ronda que esperan contendor dede eliminatoria
        // los primeros x (cupos_elim) participantes se enfrentana nadie (esperan su contendor desde la elim.) 
        for( e = 1 ; e <= cupos_elim ; e++){
            document.getElementById("1ronda").innerHTML= document.getElementById("1ronda").innerHTML + "<br>" + (e) + " v/s " + " - "  ;  
        }
           
        // definir vs de primera ronda que ya tienen contendor en primera ronda (no desde eliminatoria)
        //empieza en cupos_1ronda hasta, cupos_1ronda.lenght
         for( p = (cupos_elim+1) ; p <= participantes_1ronda ; p=p+2){
           document.getElementById("1ronda").innerHTML= document.getElementById("1ronda").innerHTML + "<br>" + (p) + " v/s " + (p+1)    ;
        }
    }

}	 
