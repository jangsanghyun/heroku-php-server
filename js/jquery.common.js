	//////////////////////////////////////////////////////////////////////////////////////////////
	// 기본 설정
	//////////////////////////////////////////////////////////////////////////////////////////////
	// 이메일 유효성 정규식검사
	var j_chkemailExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

	//////////////////////////////////////////////////////////////////////////////////////////////
	// 기본 사용
	//////////////////////////////////////////////////////////////////////////////////////////////
	$(document).ready(function (){

		// 마우스 포인터 설정
		$(".j_setcursor").css("cursor", "pointer");

		// 숫자만 입력케함.
		$(".j_numonly").css("ime-mode", "disabled");
		$(".j_numonly").keypress(function(event) { if( !(event.which && (event.which  > 47 && event.which  < 58 || event.which == 8)) ) event.preventDefault(); });

		// 이미지 버튼 오버 simple
		$(".j_ovimg_simple").hover( function() { j_changesrc2ovsrc($(this)); }, function() { j_changesrc2ovsrc($(this)); });

		// src와 ovsrc를 바꿈
		function j_changesrc2ovsrc(obj) {
			tsrc = obj.attr('src'); 
			obj.attr('src', obj.attr('ovsrc')); 
			obj.attr('ovsrc', tsrc); 
		}

	});

	//////////////////////////////////////////////////////////////////////////////////////////////
	// 폼관련 컨트롤러
	//////////////////////////////////////////////////////////////////////////////////////////////
	function formController() {

		// 이메일에 사용할 도메인 선택시 작동
		// 직접입력의 value 값은 direct로 입력해야됨.
		this.setEmailDomain = function( selectname, inputname ) {
			$("select[name="+selectname+"]").change(function () {
				var selecteddomain = $("select[name="+selectname+"]").select().val();

				if( selecteddomain == "direct" ) {
					selecteddomain = "";
					$("input[name="+inputname+"]").focus(); 
				}

				$("input[name="+inputname+"]").val( selecteddomain );
			});
		}

	}

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Client 정보 관련
	//////////////////////////////////////////////////////////////////////////////////////////////
	function clientInformation() {
		var deviceInfo = new Array();

		// 디바이스 정보 가져오기
		this.getDeviceInfo = function() {

			// 기기 pixel ratip 가져오기
			if(window.devicePixelRatio !== undefined) {
			    deviceInfo["devicepixelratio"] = window.devicePixelRatio;
			} else {
			    deviceInfo["devicepixelratio"] = 1;
			}

			// 기기의 orientation가져오기
			deviceInfo["orientation"] = window.orientation

			// 기기 해상도 가져오기
			deviceInfo["screenwidth"] = window.screen.width;					// 모니터의 해상도 너비
			deviceInfo["screenheight"] = window.screen.height;					// 모니터의 해상도 높이
			deviceInfo["screenavailwidth"] = window.screen.availWidth;			// 브라우저의 전체 너비
			deviceInfo["screenavailheight"] = window.screen.availHeight;		// 브라우저의 전체 높이
			deviceInfo["screenclientwidth"] = document.body.clientWidth;		// 브라우저의 안쪽 너비
			deviceInfo["screenclientheight"] = document.body.clientHeight;		// 브라우저의 안쪽 높이

			return deviceInfo;
		}

	}