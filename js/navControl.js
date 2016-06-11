function navControl( _containers )
{
	// VARS
	this.containers = _containers;
	this.containersTotal = 0;
	this.containersPositionX = 0;
	this.containerDistance = 0;
	this.page = 1;
	
	var pageAnterior = new Array();
	var posAndadas = 0;
	var posTime = 0;
	
	var controle = true;
	
	
	
	
	//--------------------------------------
	// INIT
	//--------------------------------------
	
	this.init = function ( _page )
	{
		// Total
		this.containersTotal = this.containers.length - 1;
		
		// Page
		this.page = _page;
		
		// Pegar a primeira posi PAG
		pageAnterior.push( this.page );
		
		// Initial Positions
		this.resize();
	}
	
	
	
	//--------------------------------------
	// PUBLIC FUNCTIONS
	//--------------------------------------

	this.getPage = function ()
	{
		return this.page;
	}
	
	this.goToPage = function ( _pageName )
	{
		
		var _page = jQuery.inArray( _pageName, this.containers );
		
		
		// Page
		if( this.page != _page )
		{
			this.page = _page;
		
		
			// Control
			this.navControl();
			
		
			// Motion
			this.navMotion();
		}
	}
	
	
	
	//--------------------------------------
	// RESET POSITIONS
	//--------------------------------------
	
	this.resetPositions = function ()
	{
		// POSITIONS
		this.containersPositionX = 0;
		this.containerDistance = $(window).width();
		
		
		// LIMIT M?IMO
		if( this.containerDistance < 1000 ) this.containerDistance = 1000;
		
		
		// Contents
		for( i = this.containersTotal; i >= 1; i-- )
		{
			this.containersPositionX -= this.containerDistance;
			
			$( "#content_" + this.containers[ i ] ).css( "left", this.containersPositionX );
		}
		
		// Container
		$( "#container" ).css( "left", ( this.containersPositionX * -1 ) );
	}
	
	
	
	//--------------------------------------
	// CONTROLES
	//--------------------------------------
	
	// NAV LEFT
	this.navLeft = function ()
	{
		// Page
		this.page--;
		
		
		// Control
		this.navControl();
		
		
		// Motion
		this.navMotion();
	}
	
	
	// NAV RIGHT
	this.navRight = function ()
	{
		// Page
		this.page++;
		
		
		// Control
		this.navControl();
		
		
		// Motion
		this.navMotion();
	}
	
	
	// NAV CONTROL
	this.navControl = function ()
	{
		// Page
		if( this.page <= 1 )
		{
			this.page = 1;
			this.navButtonsLeftBlock();
		}
		else
		{
			this.navButtonsLeftUnblock();
		}
		if( this.page >= this.containersTotal )
		{
			this.page = this.containersTotal;
			this.navButtonsRightBlock();
		}
		else
		{
			this.navButtonsRightUnblock();
		}
	}
	
	
	// POS ANDADA
	this.posAndada = function ()
	{
		pageAnterior.push( this.page );
		pos_UmPorUm = 300;
	
		// Quantidade de p ginas Andadas
		if(  pageAnterior[ pageAnterior.length - 1 ] != null  && pageAnterior[ pageAnterior.length - 2 ] != null )
		{
			posAndadas = Math.abs( pageAnterior[ pageAnterior.length - 1 ] -  pageAnterior[ pageAnterior.length - 2 ] ) ;	
			
			if( posAndadas == 1 ) posTime = pos_UmPorUm;
			if( posAndadas > 1 && posAndadas <= 5 ) posTime = pos_UmPorUm + ( posAndadas * ( pos_UmPorUm * 0.8 ) );
			if( posAndadas > 5 && posAndadas <= 10 )  posTime = pos_UmPorUm + ( posAndadas * ( pos_UmPorUm * 0.6 ) );
			if( posAndadas > 10 && posAndadas <= 15 ) posTime = pos_UmPorUm + ( posAndadas * ( pos_UmPorUm * 0.4 ) );
			if( posAndadas > 15 && posAndadas <= 20 ) posTime = pos_UmPorUm + ( posAndadas * ( pos_UmPorUm * 0.2 ) );
			if( posAndadas > 20 ) posTime = ( posAndadas * ( pos_UmPorUm * 0.2 ) );
			
		}
	}
	
	// NAV MOTION
	this.navMotion = function ()
	{
		// Pos Andada
		this.posAndada();
		
		// Position
		var position = ( this.containersTotal - ( this.page - 1 ) ) * this.containerDistance;
			
		// Motion
		$( '#container' ).stop().animate(
			{
				left: position
			},
			posTime, 
			'easeOutCubic'
		);
	}
	
	
	// NAV BUTTONS
	this.navButtonsLeftBlock = function ()
	{
		$( "#left_navigation" ).css( "display", "none" );
	}
	this.navButtonsLeftUnblock = function ()
	{
		$( "#left_navigation" ).css( "display", "block" );
	}
	this.navButtonsRightBlock = function ()
	{
		$( "#right_navigation" ).css( "display", "none" );
	}
	this.navButtonsRightUnblock = function ()
	{
		$( "#right_navigation" ).css( "display", "block" );
	}
	
	// ROLLOVER
	this.navRollOver = function ( id )
	{
		
		if( id == 'left_navigation' )
		{
			$( '#left_navigation' ).stop().animate(
				{
					marginLeft: -1
				},
				100, 'easeOutSine'
			);
			
			
			$( '#left_arrow' ).stop().animate(
				{
					marginLeft: -17
				},
				100, 'easeOutSine'
			);
		}
		else
		{
			$( '#right_navigation' ).stop().animate(
				{
					marginRight: 0
				},
				100, 'easeOutSine'
			);
					
			$( '#right_arrow' ).stop().animate(
				{
					marginLeft: -6
				},
				100, 'easeOutSine'
			);
		}
	}
	
	// ROLLOUT
	this.navRollOut = function ( id )
	{
		if( id == 'left_navigation' )
		{
			$( '#left_navigation' ).stop().animate(
				{
					marginLeft: -11
				},
				100, 'easeOutSine'
			);
			
			
			$( '#left_arrow' ).stop().animate(
				{
					marginLeft: -11
				},
				100, 'easeOutSine'
			);
		}
		else
		{
			$( '#right_navigation' ).stop().animate(
				{
					marginRight: -10
				},
				100, 'easeOutSine'
			);
					
			$( '#right_arrow' ).stop().animate(
				{
					marginLeft: -10
				},
				100, 'easeOutSine'
			);
		}
		
	}
	
	
	
	//--------------------------------------
	// RESIZE
	//--------------------------------------
	
	this.resize = function ()
	{
		if( controle )
		{
			// Controle
			controle = false;
			
			
			// Reset Positions
			this.resetPositions();
			
			
			// Control
			this.navControl();
			
			
			// Position
			var position = ( this.containersTotal - ( this.page - 1 ) ) * this.containerDistance;
			$( "#container" ).stop().css( "left", position );
			
			
			// Controle
			controle = true;
		}
	}
}

