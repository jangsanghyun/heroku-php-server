function diamanteControl()
{
	
	// VARS
	//this.containers = _containers;
	

	
	//--------------------------------------
	// INIT
	//--------------------------------------
	
	this.init = function ()
	{
		//alert("InitDiamante");
	}
	
	
	
	//--------------------------------------
	// PUBLIC FUNCTIONS
	//--------------------------------------
	
	this.diamanteRollOver = function ( id )
	{
		this.ideOver( id );
	}
	
	this.diamanteRollOut = function ( id )
	{
		this.ideOut( id );
	}
	
	
	//--------------------------------------
	// IDENTIFICAR
	//--------------------------------------

	this.ideOver = function ( id )
	{
		var ideNome = "include/images/diamante_"+ id + ".png";
		$("#diamante").attr( "src", ideNome );
			
		/*if( $.browser.msie )
		{
			var ideNome = "include/images/diamante_"+ id + ".jpg";
			$("#diamante").attr( "src", ideNome );
		}
		else
		{
			var ideNome = "include/images/diamante_"+ id + ".png";
			$("#diamante").attr( "src", ideNome );
		
		}*/
		
		
	}
	
	
	this.ideOut = function ( id )
	{    
	    $("#diamante").attr( "src", "include/images/diamante_00.png" );
		
		/*if( $.browser.msie )
		{
			$("#diamante").attr( "src", "include/images/diamante_00.jpg" );
		}
		else
		{
			$("#diamante").attr( "src", "include/images/diamante_00.png" );
		}*/
		
	}
	
}

