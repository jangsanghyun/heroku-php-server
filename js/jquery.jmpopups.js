/**
 * jmpopups
 * Copyright (c) 2009 Otavio Avila (http://otavioavila.com)
 * Licensed under GNU Lesser General Public License
 * 
 * @docs http://jmpopups.googlecode.com/
 * @version 0.5.1
 * 
 */


(function($) {
	var openedPopups = [];
	var popupLayerScreenLocker =true;
    var focusableElement = [];
	var setupJqueryMPopups = {
		screenLockerBackground: "#000",
		screenLockerOpacity: "0.5"
	};

	$.setupJMPopups = function(settings) {
		setupJqueryMPopups = jQuery.extend(setupJqueryMPopups, settings);
		return this;
	}

	$.openPopupLayer = function(settings) {
		if (typeof(settings.name) != "undefined" && !checkIfItExists(settings.name)) {
			settings = jQuery.extend({
				width: "auto",
				height: "auto",
				position: {
					parent: "",
					left: 0,
					top:  0
				},
				parameters: {},
				target: "",
				success: function() {},
				error: function() {},
				beforeClose: function() {},
				afterClose: function() {},
				reloadSuccess: null,
				cache: false,
				bgClick: true
			}, settings);
			loadPopupLayerContent(settings, true);
			return this;
		}
	}
	
	$.closePopupLayer = function(name) {
		if(name) {
			for(var i = 0; i < openedPopups.length; i++) {
				if (openedPopups[i].name == name) {
					var thisPopup = openedPopups[i];
					
					openedPopups.splice(i,1)
					
					thisPopup.beforeClose();
					
					$("#" + name).fadeOut(function(){
//						$("#" + name).remove();
					
						focusableElement.pop();
	
						if (focusableElement.length > 0) {
							$(focusableElement[focusableElement.length-1]).focus();
						}
	
						thisPopup.afterClose();
						hideScreenLocker(name);
					});
					
					
   
					break;
				}
			}
		} else {
			if (openedPopups.length > 0) {
				$.closePopupLayer(openedPopups[openedPopups.length-1].name);
			}
		}
		
		return this;
	}
	
	$.reloadPopupLayer = function(name, callback) {
		if (name) {
			for (var i = 0; i < openedPopups.length; i++) {
				if (openedPopups[i].name == name) {
					if (callback) {
						openedPopups[i].reloadSuccess = callback;
					}
					
					loadPopupLayerContent(openedPopups[i], false);
					break;
				}
			}
		} else {
			if (openedPopups.length > 0) {
				$.reloadPopupLayer(openedPopups[openedPopups.length-1].name);
			}
		}
		
		return this;
	}

	function setScreenLockerSize() {
		if (popupLayerScreenLocker) {
			$('#popupLayerScreenLocker').height($(document).height() + "px");
			$('#popupLayerScreenLocker').width($(document.body).outerWidth(true) + "px");
		}
	}
	
	function checkIfItExists(name) {
		if (name) {
			for (var i = 0; i < openedPopups.length; i++) {
				if (openedPopups[i].name == name) {
					return true;
				}
			}
		}
		return false;
	}
	
	function showScreenLocker(_popupObject) {
		if ($("#popupLayerScreenLocker").length) {
			if (openedPopups.length == 1) {
				popupLayerScreenLocker = true;
				setScreenLockerSize();
				$('#popupLayerScreenLocker').fadeIn();
			}
   
			if ($.browser.msie && $.browser.version < 7) {
				$("select:not(.hidden-by-jmp)").addClass("hidden-by-jmp hidden-by-" + openedPopups[openedPopups.length-1].name).css("visibility","hidden");
			}
   			
			$('#popupLayerScreenLocker').css("z-index",parseInt(openedPopups.length == 1 ? 999 : $("#" + openedPopups[openedPopups.length - 2].name).css("z-index")) + 1);
		} else {
			$("body").append("<div id='popupLayerScreenLocker'><!-- --></div>");
			$("#popupLayerScreenLocker").css({
				position: "absolute",
				background: setupJqueryMPopups.screenLockerBackground,
				left: "0",
				top: "0",
				opacity: setupJqueryMPopups.screenLockerOpacity,
				display: "none"
			});
			showScreenLocker(_popupObject);

			if( _popupObject.bgClick ) {
				$("#popupLayerScreenLocker").click(function() {
					$.closePopupLayer();
				});
			}
		}
	}
	
	function hideScreenLocker(popupName) {
		if (openedPopups.length == 0) {
			screenlocker = false;
			$('#popupLayerScreenLocker').fadeOut();
		} else {
			$('#popupLayerScreenLocker').css("z-index",parseInt($("#" + openedPopups[openedPopups.length - 1].name).css("z-index")) - 1);
		}
   
		if ($.browser.msie && $.browser.version < 7) {
			$("select.hidden-by-" + popupName).removeClass("hidden-by-jmp hidden-by-" + popupName).css("visibility","visible");
		}
	}
	
	function setPopupLayersPosition(popupElement, animate) {
		if(popupElement) {
			if( popupElement.position && popupElement.position.parent ) {
				var pos = _getDomPosition( document.getElementById(popupElement.position.parent) );

				var positions = {
					left: (pos.x + popupElement.position.left) + "px",
					top: (pos.y + popupElement.position.top) + "px"
				};

				if($.browser.msie && $.browser.version < 7) {
					positions.top = parseInt(positions.top, 10) - document.getElementById("dvContainer").scrollTop + "px";
				}
				popupElement.css(positions);
				setScreenLockerSize();
			} else {
				// 중앙정렬
				if (popupElement.width() < $(window).width()) {
					var leftPosition = (document.documentElement.offsetWidth - popupElement.width()) / 2;
				} else {
					var leftPosition = document.documentElement.scrollLeft + 5;
				}
	
				if (popupElement.height() < $(window).height()) {
					if(navigator.appVersion.indexOf("Safari") > -1){
						var topPosition = document.body.scrollTop + ($(window).height() - popupElement.height()) / 2;
					}else{
						var topPosition = document.documentElement.scrollTop + ($(window).height() - popupElement.height()) / 2;
					}
				} else {
					if(navigator.appVersion.indexOf("Safari") > -1){
						var topPosition = document.body.scrollTop + 5;
					}else{
						var topPosition = document.documentElement.scrollTop + 5;
					}
				}
				
				var positions = {
					left: leftPosition + "px",
					top: topPosition + "px"
				};
				
				if (!animate) {
					popupElement.css(positions);
				} else {
					popupElement.animate(positions, "fast");
				}
							
				setScreenLockerSize();
			}
		} else {
			for (var i = 0; i < openedPopups.length; i++) {
				var popupElement = $("#" + openedPopups[i].name);
				popupElement.position = openedPopups[i].position;
				setPopupLayersPosition(popupElement, false);
			}
		}
	}

    function showPopupLayerContent(popupObject, newElement, data) {
        var idElement = popupObject.name;

        if(newElement) {
			if( data ) {
				$("body").append("<div id='" + idElement + "'><!-- --></div>");
			} else {
				$("body").append( document.getElementById(idElement) );
			}
			showScreenLocker(popupObject);

			var zIndex = parseInt(openedPopups.length == 1 ? 1000 : $("#" + openedPopups[openedPopups.length - 2].name).css("z-index")) + 2;
		}  else {
			var zIndex = $("#" + idElement).css("z-index");
		}

        var popupElement = $("#" + idElement);
		popupElement.position = popupObject.position;
		
		popupElement.css({
			visibility: "hidden",
			width: popupObject.width == "auto" ? "" : popupObject.width + "px",
			height: popupObject.height == "auto" ? "" : popupObject.height + "px",
			position: "absolute",
			"z-index": zIndex
		});
		
		if( data ) {
			popupElement.html(data);
		}
		
		setPopupLayersPosition(popupElement);

        popupElement.css("display","none");
        popupElement.css("visibility","visible");
		
		if(newElement) {
        	popupElement.fadeIn();
		} else {
			popupElement.show();
		}

		popupObject.success();
		
		if (popupObject.reloadSuccess) {
			popupObject.reloadSuccess();
			popupObject.reloadSuccess = null;
		}
    }

	function loadPopupLayerContent(popupObject, newElement) {
		if(newElement) {
			openedPopups.push(popupObject);
		}
		
		if(popupObject.target != "") {
            showPopupLayerContent(popupObject, newElement);
        } else {
            $.ajax({
                url: popupObject.url,
                data: popupObject.parameters,
				cache: popupObject.cache,
                dataType: "html",
                method: "GET",
                success: function(data) {
                    showPopupLayerContent(popupObject, newElement, data);
                },
				error: popupObject.error
            });
		}
	}
	
	function _getDomPosition(that) {
		var targetEle = that;
		var pos = { x : 0, y : 0 };
		
		var agt = navigator.userAgent.toLowerCase();
		
		var _is_ie    = ((agt.indexOf("msie") !== -1) && (agt.indexOf("opera") === -1));
		var _is_ie67  = (agt.indexOf("msie 6") !== -1 || agt.indexOf("msie 7"));
		var _is_ie8   = (agt.indexOf("msie 8") !== -1);
		var _is_gecko = (agt.indexOf('gecko') !== -1);
		var _is_opera = (agt.indexOf("opera") !== -1);

		while(targetEle) {
			pos.x += targetEle.offsetLeft; 
			pos.y += targetEle.offsetTop; 
			targetEle = targetEle.offsetParent;
		
			if(targetEle && _is_ie) {
			  pos.x += (parseInt(getElementStyle(targetEle, 
				  "borderLeftWidth", "border-left-width"), 10) || 0);
			  pos.y += (parseInt(getElementStyle(targetEle, 
				  "borderTopWidth", "border-top-width"), 10) || 0);
			}
		}
		
		if(_is_gecko) {
			var bd = document.getElementsByTagName("BODY")[0];
			pos.x += 2 * (parseInt(getElementStyle(bd, 
				"borderLeftWidth", "border-left-width"), 10) || 0);
			pos.y += 2 * (parseInt(getElementStyle(bd, 
				"borderTopWidth", "border-top-width"), 10) || 0);
		}
		
		return pos;
	};

	function getElementStyle(targetElm, IEStyleProp, CSSStyleProp) {
		var elem = targetElm;
		if (elem.currentStyle) {
			return elem.currentStyle[IEStyleProp];
		} else if (window.getComputedStyle) {
			var compStyle = window.getComputedStyle(elem, "");
			return compStyle.getPropertyValue(CSSStyleProp);
		}
	};

	$(window).resize(function(){
		setScreenLockerSize();
		setPopupLayersPosition();
	});
	
	$(document).keydown(function(e){
		if (e.keyCode == 27) {
			$.closePopupLayer();
		}
	});
})(jQuery);