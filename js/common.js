function loadedScrollTo(){
	 window.scrollTo(0, 1);
}

window.addEventListener("load", function(){
	 setTimeout(loadedScrollTo, 100);
	 }, false);


var myScroll;
var a = 0;
function loaded() {
//	setTimeout(setScroll, 1000);
}

/*
function setScroll(){
	setHeight();	
	myScroll = new iScroll('wrapper', {desktopCompatibility:true});
}

function setHeight() {
	var footerH = document.getElementById('categories').offsetHeight,
		wrapperH = window.innerHeight - footerH;
	document.getElementById('wrapper').style.height = wrapperH + 'px';
}

window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', setHeight, false);

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);
*/


var _loginReturnUrl;
function openLoginLayer(_url) { 
/*
	_loginReturnUrl = _url;
	$.openPopupLayer({
	    name: "login_layer",
	    width: 300,
	    height: 250,
	    top:100,
	    left:0,
	    url : '/mobile/login/login.jsp',
	    success: function(){
	    	
	    }
	});
	
*/

document.location = "/mobile/login/loginCheck.jsp?url="+_url;
}

/*
function doShare(site) { 
	var long_url = location.href; 

	// facebook 의 캐시방지 2011-03-22 : 정태웅
	now=new Date();
	year=now.getYear();
	month=now.getMonth();
	date=now.getDate();
	hour=now.getHours();
	var ran = (long_url.indexOf("?") > 0) ? "&" : "?";
	ran += "rnd="+year+(month+1)+date+hour;

	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url + ran),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			var _shortUrl = _jsonObject.data.url;
			if (site == 'facebook') { 
				window.open('http://www.facebook.com/share.php?u=' + _shortUrl); 
			} else if (site == 'twitter') { 
				window.open('http://twitter.com/home?status=' + _shortUrl);
			} else if (site == 'me2day') { 
				window.open('http://me2day.net/posts/new?new_post[body]=' + encodeURIComponent(long_url));
			}
			
		}
	});

}
*/

function setCookie( name, value, expires, path, domain, secure )
{
    var today = new Date();
    today.setTime( today.getTime() );

    if ( expires )
    {
    expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + (expires) );

    document.cookie = name + "=" +escape( value ) +
    ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
    ( ( path ) ? ";path=" + path : "" ) +
    ( ( domain ) ? ";domain=" + domain : "" ) +
    ( ( secure ) ? ";secure" : "" );
}
			
function getCookie( check_name ) {
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		a_temp_cookie = a_all_cookies[i].split( '=' );
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}
}
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + "=" +
	( ( path ) ? ";path=" + path : "") +
	( ( domain ) ? ";domain=" + domain : "" ) +
	";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function ssoLink(site) { 
	if ($.browser.msie && $.browser.version.substr(0,1)<7) { 
		top.location.href='/sso.jsp?mode=go&site=' + site;
	} else { 
		window.open('http://www.shinsegae.com/sso.jsp?mode=go&site=' + site);
	}
}

function ssoGo(_site, _url){
	var url = '/sso.jsp?mode=go&site=' + _site +'&nl=' + _url;
	window.open(url);
}

function closeLoginLayer() { 
	$.closePopupLayer('login_layer');
	history.back();
}
function doLogin(url) {
	var _url = '/mobile/login/login_tr.jsp';
	var f = document.loginform;
	if(document.getElementById("saveid").checked){
		_url = 'https:\/\/www.shinsegae.com/mobile/login/login_tr.jsp';
	}
	var f = document.loginform;
	if (f.id.value == '') { 
		alert('아이디를 입력해주세요');
		f.id.focus();
		return;
	} else if (f.pw.value == '') { 
		alert('비밀번호를 입력해주세요');
		f.pw.focus();
		return;
	} else { 
		if (document.getElementById("saveid").checked) {
			setCookie("ssgd_id", $("#id").val(), 10, "/", ".shinsegae.com", false);
		} else { 
			deleteCookie("ssgd_id", "/", ".shinsegae.com");
		}
		$.ajax({
			url : _url,
			dataType : 'text/html',
			data : 'id=' + f.id.value + '&pw=' + f.pw.value,
			success : function(responseText) { 
				var _jsonObject = eval('(' + responseText + ')'); 
				if (_jsonObject.result == 'true') { 
					location.href=_loginReturnUrl;
				} else { 
					$("#message").html('아이디 또는 비밀번호 오류입니다.<br />다시 시도해주세요.');
				}
			}
		});
	}	
}

document.writeln('<link rel="apple-touch-icon" href="/img/common/icon.jpg">');

/*
function printShare() {
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
//	insertMileage(_code, long_url);

	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url),
		success : function(responseText) { 
		var _jsonObject = eval('(' + responseText + ')'); 
		var _shortUrl = _jsonObject.data.url;
				
		var _html = '';
		_html += '	<button type="button" class="twitter" onclick="window.open(\'http://twitter.com/home?status=' + _shortUrl+'\');">트위터공유하기</button>\n';
		_html += '	<button type="button" class="facebook" onclick="window.open(\'http://www.facebook.com/share.php?u=' + _shortUrl+ '\');">페이스북공유하기</button>\n';
		_html += '	<button type="button" class="email" onclick="location.href = \'/mobile/email/email_write.jsp?url='+ long_url+'\';">이메일보내기</button>\n';
		$(".add").html(_html);
	}
});
	
	
}

*/
function doShare(site) {
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
	insertMileage(_code, long_url);

	// facebook 의 캐시방지 2011-03-22 : 정태웅
	if (long_url.indexOf("rnd=") < 0) {
		var shareNow=new Date();
		var shareYear=shareNow.getYear();
		var shareMonth=shareNow.getMonth() + 1;
		var shareDate=shareNow.getDate();
		var shareHour=shareNow.getHours();
		var shareRan = (long_url.indexOf("?") > 0) ? "&" : "?";
		shareRan += "rnd=" + shareYear + shareMonth + shareDate + shareHour;
		long_url += shareRan;
	}


	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			var _shortUrl = _jsonObject.data.url;

			switch(site) {
				case "twitter" : document.location.href = "http://twitter.com/home?status=" + _shortUrl;break;
				case "facebook" : document.location.href = "http://www.facebook.com/share.php?u=" + _shortUrl; break;
				case "email" : document.location.href = "/mobile/email/email_write.jsp?url="+ long_url; break;
			}
		}
	});

}

function insertMileage(code, subCode) {
	if (subCode == null || subCode == undefined)
		subCode = '';
	
	$.ajax({
		url : '/common/jsp/mileage_tr.jsp',
		dataType : 'text/html',
		data : 'code=' + code + '&subCode=' + subCode, 
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
		}
	});
}

$(document).ready( function(){
	try {	printShare();} catch (e) { }
  }); 


/*

function printShare() {
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
//	insertMileage(_code, long_url);

	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url),
		success : function(responseText) { 
		var _jsonObject = eval('(' + responseText + ')'); 
		var _shortUrl = _jsonObject.data.url;
				
		var _html = '';
		_html += '	<button type="button" class="twitter" onclick="window.open(\'http://twitter.com/home?status=' + _shortUrl+'\');">트위터공유하기</button>\n';
		_html += '	<button type="button" class="facebook" onclick="window.open(\'http://www.facebook.com/share.php?u=' + _shortUrl+ '\');">페이스북공유하기</button>\n';
		_html += '	<button type="button" class="email" onclick="location.href = \'/mobile/email/email_write.jsp?url='+ long_url+'\';">이메일보내기</button>\n';
		$(".add").html(_html);
	}
});
	
	
}
*/


function printShare() {
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
//	insertMileage(_code, long_url);

//	$.ajax({
//		url : '/common/jsp/url_shorten.jsp',
//		dataType : 'text/html',
//		data : 'long_url=' + escape(long_url),
//		success : function(responseText) { 
//		var _jsonObject = eval('(' + responseText + ')'); 
//		var _shortUrl = _jsonObject.data.url;
				
		var _html = '';

		_html += '	<button type="button" class="twitter" onclick="doShare(\'twitter\');">트위터공유하기</button>\n';
		_html += '	<button type="button" class="facebook" onclick="doShare(\'facebook\');">페이스북공유하기</button>\n';
		_html += '	<button type="button" class="email" onclick="doShare(\'email\');">이메일보내기</button>\n';
		$(".add").html(_html);
//	}
//});
	
	
}



/*
 * 2011. 2. 7 - 정태웅 리뉴얼 이벤트를 위하여 변경 : printShare 주석처리하고 다른 함수들을 삽입
 */

/*
function doShare(site) {
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
	insertMileage(_code, long_url);



	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			var _shortUrl = _jsonObject.data.url;
			if (site == 'facebook') { 
				window.open('http://www.facebook.com/share.php?u=' + _shortUrl); 
				alert('penisbook');
			} else if (site == 'twitter') { 
				window.open('http://twitter.com/home?status=' + _shortUrl);
			} else if (site == 'me2day') { 
				window.open('http://me2day.net/posts/new?new_post[body]=' + encodeURIComponent(long_url));
			} else if (site == 'cyworld') { 
				var xmlUrl = encodeURIComponent('http://department.shinsegae.com/mobile/cyworld_scrap_xml.jsp?url='+long_url);
				var popUrl = 'http://api.cyworld.com/openscrap/post/v1/?xu=' + xmlUrl + '&sid=3sTMvqfBkgpGYcQObSkugE4x3XHyCzyC';
				window.open(popUrl, 'cyopenscrap','width=450,height=410');
			} else if('email'){
				location.href = '/mobile/email/email_write.jsp?url='+ long_url;
			}
		}
	});

}

*/

function doShares(site) { 
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
//	insertMileage(_code, long_url);

		// facebook 의 캐시방지 2011-03-22 : 정태웅
	if (long_url.indexOf("rnd=") < 0) {
		var shareNow=new Date();
		var shareYear=shareNow.getYear();
		var shareMonth=shareNow.getMonth() + 1;
		var shareDate=shareNow.getDate();
		var shareHour=shareNow.getHours();
		var shareRan = (long_url.indexOf("?") > 0) ? "&" : "?";
		shareRan += "rnd=" + shareYear + shareMonth + shareDate + shareHour;
		long_url += shareRan;
	}

	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			var _shortUrl = _jsonObject.data.url;
					
			switch(site) {
				//case "twitter" : window.open("http://twitter.com/home?status=" + _shortUrl);break;
				//case "facebook" : window.open("http://www.facebook.com/share.php?u=" + _shortUrl); break;
				//case "email" : document.location.href = "/mobile/email/email_write.jsp?url="+ long_url; break;
				case "twitter" : document.location.href = "http://twitter.com/home?status=" + _shortUrl;break;
				case "facebook" : document.location.href = "http://www.facebook.com/share.php?u=" + _shortUrl; break;
				case "email" : document.location.href = "/mobile/email/email_write.jsp?url="+ long_url; break;
			}
		}
	});

	/*
	var long_url = location.href;
	
	var _code = 'SNS';
	var _subCode = '';
	insertMileage(_code, long_url);



	$.ajax({
		url : '/common/jsp/url_shorten.jsp',
		dataType : 'text/html',
		data : 'long_url=' + escape(long_url),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			var _shortUrl = _jsonObject.data.url;
			if (site == 'facebook') { 
				window.open('http://www.facebook.com/share.php?u=' + _shortUrl); 
				alert('penisbook');
			} else if (site == 'twitter') { 
				window.open('http://twitter.com/home?status=' + _shortUrl);
			} else if (site == 'me2day') { 
				window.open('http://me2day.net/posts/new?new_post[body]=' + encodeURIComponent(long_url));
			} else if (site == 'cyworld') { 
				var xmlUrl = encodeURIComponent('http://department.shinsegae.com/mobile/cyworld_scrap_xml.jsp?url='+long_url);
				var popUrl = 'http://api.cyworld.com/openscrap/post/v1/?xu=' + xmlUrl + '&sid=3sTMvqfBkgpGYcQObSkugE4x3XHyCzyC';
				window.open(popUrl, 'cyopenscrap','width=450,height=410');
			} else if('email'){
				location.href = '/mobile/email/email_write.jsp?url='+ long_url;
			}
		}
	});
	*/

}

//공유실행
function executeShare(type) {
	switch (type) {
	case "twitter"  : doShare_Original("twitter"); break;
	case "facebook" : doShare_Original("facebook");break;
	case "me2day" 	: doShare_Original("me2day");break;
	case "rss"		: document.location.href = ""; break;
	case "cyworld"	: alert("미셋팅"); break;
	case "email"	: doShare_Original("email"); break;
	}
}


//아이콘 클릭시 이벤트 참여여부를 체크
function doShares_event(type) {

	$.ajax({
		url : '/mobile/event/110210ev/event_share_ajax.jsp',
		dataType : 'text/html',
		data : 'url='+encodeURIComponent(document.location.href),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			if (_jsonObject.period == "T") {	// 이벤트 기간이면
				if (_jsonObject.login == "T") {		// 로그인
					if (_jsonObject.enter != "T") {	// 이벤트 미참여
						
						makeRenewalEventlayer("T", type);
						return;
					}
				} else {	// 비로그인이면
			
					makeRenewalEventlayer("F" , type);
					return;
				}
			}
	
			// 이벤트에 이미 참가했다면 바로 실행
			makeRenewalEventlayer("A", type);
			//executeShare(type);
		}
	});
}

function makeRenewalEventlayer(log, type) {
	window.scrollTo(0,1);
	$.openPopupLayer({
		name: "shareEventDiv",
		width: 307,
		height: 215,
		url: "/mobile/event/110210ev/share_pop.jsp?log="+log+"&type="+type,
		success: function() { }
	});

}

// 로그인 유저 공유하기
function renewalEventshareLogin(type) {
	$.ajax({
		url : '/mobile/event/110210ev/event_m_03_tr.jsp?url='+encodeURIComponent(document.location.href),
		dataType : 'text/html',
		data : 'url='+encodeURIComponent(document.location.href),
		success : function(responseText) { 
			var _jsonObject = eval('(' + responseText + ')'); 
			if (_jsonObject.result == "T" || _jsonObject.result == "A" ) {
				//setCookie("renewal_event3","Y",30);
			}
			alert(_jsonObject.message);
			$.closePopupLayer();
			executeShare(type);
		}
	});
}

function renewalEventshareAlready(type) {
	alert("이미 이벤트에 응모하셨습니다.");
	$.closePopupLayer();
	executeShare(type);
}


// 로그인 페이지로 이동
function renewalEventGotoLogin() {
	$.closePopupLayer();
	var url = document.location.href;
	//alert((url.replace("http://department.shinsegae.com","")));
	window.scrollTo(0,1);
	openLoginLayer((url.replace("http://www.shinsegae.com","")));
	//document.location.href = "/login/login.jsp?url=" + encodeURIComponent(document.location.href);

}

// 로그인 하지 않고 공유하기
function renewalEventShare(type) {
	$.closePopupLayer();
	executeShare(type);
}
// 닫기 버튼 클릭
function renewalLayerClose() {
	$.closePopupLayer();
}

/*
 * 2011. 2. 7 정태웅 - 리뉴얼 이벤트를 위하여 추가 
 * 종료
*/

//length 체크
function chkTitleLen(_id) {
	var detailContLen	= document.getElementById(_id).value.length;
	if (detailContLen>50) {
		alert('50자를 넘을수 없습니다.');
		document.getElementById(_id).value = document.getElementById(_id).value.substring(0, 50);
	}
}

function chkContLen(_id) {
	var detailContLen	= document.getElementById(_id).value.length;
	document.getElementById("strLen").innerHTML = detailContLen;
	if (detailContLen>4000) {
		alert('최대 4,000자까지  입력이 가능합니다.');
		document.getElementById(_id).value = document.getElementById(_id).value.substring(0, 4000);
		document.getElementById("strLen").innerHTML = 4000;
	}
}

function memberModify() { 
	//window.open('/sso.jsp?mode=go&site=ssgcom&nl=https://www.shinsegae.com/myinfo/member_modify.asp?s_flag=dept');
	window.open('http://www.shinsegae.com/myShinsegae_d/memberInfo/memberModify.jsp');
}

function jsShinMemberModify(){
	window.open('http://www.shinsegae.com/myShinsegae_d/memberInfo/memberModify.jsp');
}


