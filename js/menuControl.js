function menuControl( _containers )
{
	// VARS
	this.containers = _containers;
	this.buttonSelected;
 	this.buttonLastSelected;
 	this.pageSelected = "home";
 	this.pageLastSelected = "home";
	
	
	
	
	//--------------------------------------
	// INIT
	//--------------------------------------
	
	this.init = function ()
	{
	}
	
	
	
	//--------------------------------------
	// PUBLIC FUNCTIONS
	//--------------------------------------
	
	this.getPage = function ()
	{
		return this.buttonSelected;
	}
	
	this.setPage = function ( _page )
	{
		this.Click( this.containers[ _page ] );
	}
	
	
	
	//--------------------------------------
	// INITIAL MOTIONS
	//--------------------------------------

	this.motionIn = function ()
	{
		
	}
	
	
	
	//--------------------------------------
	// CONTROLES
	//--------------------------------------
	
	// Click
	this.Click = function ( _pageName )
	{
		if( this.buttonSelected != _pageName )
		{
			// SET SUBMENU
			this.buttonLastSelected = this.buttonSelected;
			this.buttonSelected = _pageName;
			
			
			// SET PAGE
			if( this.pageSelected != this.getNameLink( _pageName ) )
			{
				this.pageLastSelected = this.pageSelected;
				this.pageSelected = this.getNameLink( _pageName );
				
				
				// SET MENU
				this.motionOver( this.pageSelected );
				this.motionOut( this.pageLastSelected );
				
				
				// SET SUBMENU
				if( this.pageSelected == "img" || this.pageSelected == "metodologia" )
				{
					this.submenuShow( this.pageSelected );
					
					
					this.getNumberLink( this.buttonSelected ) > 0 ? this.buttonSelected = this.buttonSelected : this.buttonSelected = this.buttonSelected + "01";
					this.submenuOver( this.buttonSelected );
				}
				if( this.pageLastSelected == "img" || this.pageLastSelected == "metodologia" )
				{
					this.submenuHide( this.pageLastSelected );
					this.submenuOut( this.buttonLastSelected );
				}
			}
			else
			{
				// SET SUBMENU
				this.submenuOver( this.buttonSelected );
				this.submenuOut( this.buttonLastSelected );
			}
		}
	}
	
	// RollOver
	this.rollOver = function ( _linkName )
	{
		if( this.pageSelected != this.getNameLink( _linkName ) )
		{
			this.motionOver( this.getNameLink( _linkName ) );
		}
	}
	
	// RollOut
	this.rollOut = function ( _linkName )
	{
		if( this.pageSelected != this.getNameLink( _linkName ) )
		{
			this.motionOut( this.getNameLink( _linkName ) );
		}
	}
	
	// Submenu RollOver
	this.submenuRollOver = function ( _linkName )
	{
		if( this.buttonSelected != _linkName )
		{
			this.submenuOver( _linkName );
		}
	}
	
	// Submenu RollOut
	this.submenuRollOut = function ( _linkName )
	{
		if( this.buttonSelected != _linkName )
		{
			this.submenuOut( _linkName );
		}
	}
	
	
	
	
	
	//--------------------------------------
	// MOTIONS MENU
	//--------------------------------------
	
	this.motionOver = function ( _linkName )
	{
		$( "#" + _linkName + "_over_bg" ).stop().fadeTo( 200, 1 );
		$( "#" + _linkName + "_normal_link" ).stop().fadeTo( 200, 0 );
		$( "#" + _linkName + "_over_link" ).stop().fadeTo( 200, 1 );
	}
	
	this.motionOut = function ( _linkName )
	{
		$( "#" + _linkName + "_over_bg" ).stop().fadeTo( 200, 0 );
		$( "#" + _linkName + "_normal_link" ).stop().fadeTo( 200, 1 );
		$( "#" + _linkName + "_over_link" ).stop().fadeTo( 200, 0 );
	}
	
	
	
	
	//--------------------------------------
	// MOTIONS submenu
	//--------------------------------------
	
	this.submenuShow = function ( _page )
	{
		
		var _index = 0;
		var i = 1;
			
		for( i = 1; i < 3 + 1; i++ )
		{
			_index = i <= 9 ? "0" + i : i;
			
			$( "#menu_" + _page + _index.toString() ).css( "display" , "block" );
			$( "#menu_" + _page + _index.toString() ).stop().fadeTo( 0, 0 );
			$( "#menu_" + _page + _index.toString() ).stop().fadeTo( 250 * i, 1 );
		}
	}
	this.submenuHide = function ( _page )
	{		
	
		var _index = 0;
		var i = 1;
			
		for( i = 1; i < 3 + 1; i++ )
		{
			_index = i <= 9 ? "0" + i : i;
			
			$( "#menu_" + _page + _index.toString() ).stop().fadeTo( 50 * i, 0 );
		}
	}
	
	this.submenuOver = function ( _linkName )
	{
		$( "#menu_" + _linkName ).css( "background-color" , "#f1e1d2" );
	}
	
	this.submenuOut = function ( _linkName )
	{
		$( "#menu_" + _linkName ).css( "background-color" , "#8e8f93" );
	}
	
	
	

	//--------------------------------------
	// FORMAT
	//--------------------------------------
	
	this.getNumberLink = function ( _linkName )
	{
		var _numberLink = _linkName.replace(/[^\d\.]+/g, '');
		return _numberLink; 
	}
	
	
	
	this.getNameLink = function ( _linkName )
	{
		var _nameLink = _linkName.replace(/[\d\.]+/g, '');
		return _nameLink; 
	}
}

