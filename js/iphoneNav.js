function iphoneNav()
{
	//--------------------------------------
	// INIT
	//--------------------------------------
	
	this.init = function ()
	{
		//alert( window.orientation );
	}
	
	//--------------------------------------
	// CSS IPHONE
	//--------------------------------------
	
	this.cssIphone = function ()
	{
		$( "#brand" ).css( "marginTop", 10 );
		$( "#brand" ).css( "marginLeft", 10 );
		$( "#imgBrand" ).css( "width", 105.6 );
		$( "#imgBrand" ).css( "height", 76 );
		
		$( "#menu" ).css( "float", "left" );
		$( "#menu" ).css( "marginTop", 96 );
		$( "#menu" ).css( "marginLeft", -134 );
		
		//$( "#branding_normal_link" ).css( "width", -134 );
		$( "#tituloHome" ).css( "-webkit-text-size-adjust", 600 );
		document.getElementById('CORPO').style.webkitTextSizeAdjust= '200%';
	}
		
}

