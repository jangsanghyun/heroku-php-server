//--------------------------------------
// VARS
//--------------------------------------

var indice = 1;
var ideCaseImg = "1";
var containers = new Array();
var navControlObj;
var menuControlObj;
var diamanteControlObj;
var iphoneNavObj;
var deepLinkObj;
var page = "home";
var pageNameAtual = "home";
var iphoneStatus = "";




//--------------------------------------
// CONTAINERS
//--------------------------------------

containers[ indice ] = "home"; indice++;
containers[ indice ] = "img2"; indice++;
containers[ indice ] = "img3"; indice++;
containers[ indice ] = "img4"; indice++;
containers[ indice ] = "img5"; indice++;
containers[ indice ] = "img6"; indice++;






//--------------------------------------
// READY
//--------------------------------------

$(document).ready
(
	function()
	{
		// DEEPLINK
		deepLinkObj = new deepLink( containers );
		page = deepLinkObj.init();
		
		
		// ANALYTICS
		onClickView( page );
		
		
		// NAV CONTROL	
		navControlObj = new navControl( containers );
		navControlObj.init( page );
		
		
		// MENU CONTROL
		menuControlObj = new menuControl( containers );
		menuControlObj.init();
		menuControlObj.setPage( page );
				
		
		// DIAMANTE CONTROL
		diamanteControlObj = new diamanteControl();
		diamanteControlObj.init();
		
		iphoneNavObj = new iphoneNav();
		iphoneNavObj.init();
		
		
		// RESIZE
		resizeWindow();
		
		
		// ONLOAD
		$(window).load
		(
			function()
			{
				// Page
				pageNameAtual = containers[ page ];
				
				
				// NAV KEYBOARD INIT
				navKeyboardInit();
				
				// IPHONE NAV
				navIphoneInit();
				
				// SEM FLASH
				pageSemFlash( page );
			}
		);
	}
);

function flashOnLoad()
{
	// BG
	pageChange( page );
}




//--------------------------------------
// CLOSE
//--------------------------------------

$(window).unload
(
	function()
	{
		onCloseWindow();
	}
);




//--------------------------------------
// RESIZE
//--------------------------------------

function resizeWindow()
{
	$(window).resize
	(
		function()
		{	
			// NAV
			navControlObj.resize();
		}
	);
}



//--------------------------------------
// NAV
//--------------------------------------

// LEFT
function navLeft()
{
	navControlObj.navLeft();
	
	
	// Motion
	navMotion();
}


// RIGHT
function navRight()
{
	// NavControl
	navControlObj.navRight();
	
	
	// Motion
	navMotion();
}


// ROLLOVER / ROLLOUT
function navOver( id )
{
	navControlObj.navRollOver( id );
}

function navOut( id )
{
	navControlObj.navRollOut( id );
}


// CONTROL
function navMotion()
{
	// Page
	pageNameAtual = containers[ navControlObj.getPage() ];
	
		
	// Menu
	menuControlObj.setPage( navControlObj.getPage() );
	
	
	// DeepLink
	deepLinkObj.chageHash( navControlObj.getPage() );
	
	
	// ANALYTICS
	onClickView( navControlObj.getPage() );
}


// KEYBOARD
function navKeyboardInit()
{
	$(document).keypress
	(
		function( e )
		{
			switch( e.keyCode )
			{
				// Left
				case 37:
					navLeft();
					break;
				
				// Right
				case 39:
					navRight();
					break;
			}
		}
	);
}



//--------------------------------------
// IPHONE
//--------------------------------------

function navIphoneInit()
{
	
	///// ESCONDE O C?IGO DO IE
	/*@cc_on
   /*@if ( @_jscript_version >= 5 )
	//alert('IE');
   @else @*/
   		
		
  		if( ( navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/Android/i)) ) 
		{	
			// IPOD CSS
			/*iphoneNavObj.cssIphone();
			
			$( document ).touchwipe({	
										wipeLeft: function() { navRight(); },
										wipeRight: function() { navLeft(); },
										preventDefaultEvents: true,
								  });*/
		}
		
		if( ( navigator.userAgent.match(/iPad/i) ) ) 
		{
			// IPAD CSS
			$( document ).touchwipe({	
										wipeLeft: function() { navRight(); },
										wipeRight: function() { navLeft(); },
										preventDefaultEvents: true,
								  });
		}
		
   /*@end
	@*/
	
	
	
}




//--------------------------------------
// MENU
//--------------------------------------

function Click( _pageName )
{
	if( pageNameAtual != _pageName )
	{
		// Page
		pageNameAtual = _pageName;
		
		
		// Nav
		navControlObj.goToPage( _pageName );
		
		
		// Menu
		menuControlObj.Click( _pageName );
		
		
		// BG
		pageChange( navControlObj.getPage() );
		
		
		// DeepLink
		deepLinkObj.chageHash( navControlObj.getPage() );
		
		
		// ANALYTICS
		onClickView( navControlObj.getPage() );
	}
}

// MENU ROLLOVER / ROLLOUT
function menuOver( _pageName )
{
	menuControlObj.rollOver( _pageName );
}

function menuOut( _pageName )
{
	menuControlObj.rollOut( _pageName );
}

// SUBMENU ROLLOVER / ROLLOUT
function submenuOver( _pageName )
{
	menuControlObj.submenuRollOver( _pageName );
}

function submenuOut( _pageName )
{
	menuControlObj.submenuRollOut( _pageName );
}





//--------------------------------------
// DIAMANTE
//--------------------------------------

// DIAMANTE ROLLOVER / ROLLOUT
function diamanteOver( id )
{
	diamanteControlObj.diamanteRollOver( id );
}

function diamanteOut( id )
{
	diamanteControlObj.diamanteRollOut( id );
}



function pageSemFlash( _page )
{

	//CASE DE CADA IMAGENS QUE SUBSTITUI O FLASH NAS PÁGINAS
	caseImagens( _page );
	
	var ideNome = "include/images/bg"+ ideCaseImg + ".jpg";
	$("#backgroundIMG").attr("src", ideNome );
	
}



function caseImagens( _page )
{
	
	// IE( ACERTA A CARACTERISTICA DO ARRAY )
	if( !Array.indexOf )
	{
		Array.prototype.indexOf = function( obj )
		{
			for( var i=0; i<this.length; i++ )
			{
				if( this[i]==obj )
				{
					return i;
				}
			}
			return -1;
		}
	}
	
	
	var imag1 = new Array( "1" );
	var imag2 = new Array( "2" );
	var imag3 = new Array( "3","5" );
	var imag4 = new Array( "4" );
	var imag5 = new Array( "6" );
	var imag6 = new Array( "7", "8" );
	var imag7 = new Array( "9","10","11","13", "14", "15", "21" );
	var imag8 = new Array( "12" );
	var imag9 = new Array( "16","17","18","19","20" );
	var imag10 = new Array( "22" );
	var imag11 = new Array( "23" );
	var imag12 = new Array( "24" );
	
	
	var imagTotal = new Array();
	imagTotal.push( imag1, imag2, imag3, imag4, imag5, imag6,imag7, imag8, imag9, imag10, imag11, imag12 );
	 
	
	for( i=0;i<imagTotal.length;i++ )
	{
		if( imagTotal[i].indexOf( _page.toString() ) != -1 )
		{
			switch (imagTotal[i]) {
										case imag1:
											ideCaseImg = "1";
											break
										case imag2:
											ideCaseImg = "2";
											break
										case imag3:
											ideCaseImg = "3";
											break
										case imag4:
											ideCaseImg = "4";
											break
										case imag5:
											ideCaseImg = "5";
											break
										case imag6:
											ideCaseImg = "6";
											break
										case imag7:
											ideCaseImg = "7";
											break
										case imag8:
											ideCaseImg = "8";
											break
										case imag9:
											ideCaseImg = "9";
											break
										case imag10:
											ideCaseImg = "10";
											break
										case imag11:
											ideCaseImg = "11";
											break
										case imag12:
											ideCaseImg = "12";
											break
										default:
											ideCaseImg = "1";
								  }
			
			
		}
	}

}


//--------------------------------------
// ANALYTICS
//--------------------------------------

function onClickView( page )
{
	_pageName = containers[ page ];
	
	//_gaq.push(['_trackPageview', page]);
}

function onCloseWindow()
{
	//_gaq.push(['_trackEvent', 'AVG Time', 'fechou']);
}