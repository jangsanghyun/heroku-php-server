function deepLink( _containers )
{
	// VARS
	this.doc = null;
	this.containers = _containers;
	
	
	
	
	
	//--------------------------------------
	// INIT
	//--------------------------------------
	
	this.init = function ()
	{
		// Document
		this.doc = this.defineDocument();
		
		// Page
		return this.getPageFunc();
	}
	
	
	
	//--------------------------------------
	// PUBLIC FUNCTIONS
	//--------------------------------------

	this.getHash = function ()
	{
		return this.getHashFunc();
	}
	
	this.chageHash = function ( _page )
	{
		this.chageHashFunc( _page );
	}
	
	
	
	//--------------------------------------
	// PRIVATE FUNCTIONS
	//--------------------------------------

	this.getPageFunc = function ()
	{
		// Hash
		var hashTag = this.getHashFunc();
		hashTag = hashTag.replace( "#/", "" );
		hashTag = hashTag.replace( "/", "" );
		hashTag = hashTag.replace( "/", "" );
		
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
		 
		// Page
		var page = this.containers.indexOf( hashTag );
		if( page < 1 ){ page = 1; }
		
		// Return
		return page;
	}
	
	this.getHashFunc = function ()
	{
		return this.doc.location.hash;
	}
	
	this.chageHashFunc = function ( _page )
	{
		var _hash = this.containers[ _page ];
		var _pageName = _hash.replace(/[\d\.]+/g, '')
		var _pageNumber = _hash.replace(/[^\d\.]+/g, '');
		
		
		if( _pageNumber != "" )
			_hash = _pageName + "/" + _pageNumber;
		else
			_hash = _pageName;
		
		
		// Update Hash
		this.doc.location.hash = "#/" + _hash + "/";
	}
	
	this.defineDocument = function()
	{
		try {
			return top.document !== undefined ? top: window
		}
		catch(a)
		{
			return window
		}
	}
}