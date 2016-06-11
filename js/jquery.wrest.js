if (typeof(KREST_JS) == 'undefined') // 한번만 실행
{
	var KREST_JS = true;
	/* http://nhead.com || 09년 9월 20일 || NaviGator wrest.js 참고*/
	var wrestMsg = '';
	var wrestFld = null;


		// title 속성값을 얻어 return, 없으면 tag의 name을 넘김 
	function wrestItemname(fld) { 
		return fld.getAttribute('title') ? fld.getAttribute('title') : fld.name; 
	} 

	// 양쪽 공백 없애기
	function wrestTrim(fld) {
		var pattern = /(^\s*)|(\s*$)/g; // \s 공백 문자
		fld.value = fld.value.replace(pattern, "");
		return fld.value;
	}

	// 필수 입력 검사
	function wrestRequired(fld) {
		if (wrestTrim(fld) == "") 
		{
			if (wrestFld == null) 
			{
				// 3.30
				// 셀렉트박스일 경우에도 필수 선택 검사합니다.
				wrestMsg = wrestItemname(fld) + " : 필수 "+(fld.type=="select-one"?"선택":"입력")+"입니다.\n";
				wrestFld = fld;
			}
		}
	}

		// 최소 길이 검사
	function wrestMinlength(fld, len) {
		//var lenx = wrestItemname(fld);
		//alert(1);
		//var len = lenx.replace(/([^0-9]*)([0-9]+)(.*)/gi,"$2");
		
		var pattern = /([0-9]+)/;
		if (pattern.test(len) && fld.value.length < len) 
		{
			if (wrestFld == null) 
			{
				wrestMsg = wrestItemname(fld) + " :  최소 " + len + "자 이상 입력하세요.\n";
				wrestFld = fld;
			}
		}
	}

	// 김선용 2006.3 - 전화번호(휴대폰) 형식 검사 : 123-123(4)-5678
	function wrestTelnumber(fld){
		if (!wrestTrim(fld)) return;

		var pattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
		if(!pattern.test(fld.value)){ 
			if(wrestFld == null){
				wrestMsg = wrestItemname(fld)+" : 전화번호 형식이 올바르지 않습니다.\n\n하이픈(-)을 포함하여 입력해 주십시오.\n";
				wrestFld = fld;
				fld.select();
			}
		}
	}

	// 이메일주소 형식 검사
	function wrestEmail(fld) {
		if (!wrestTrim(fld)) return;

		//var pattern = /([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/;
		var pattern = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
		if (!pattern.test(fld.value)) 
		{
			if (wrestFld == null) 
			{
				wrestMsg = wrestItemname(fld) + " : 이메일주소 형식이 아닙니다.\n";
				wrestFld = fld;
			}
		}
	}

	// 회원아이디 검사
	function wrestMemberId(fld) 
	{
		if (!wrestTrim(fld)) return;

		var pattern = /(^([a-z0-9]+)([a-z0-9_]+$))/;
		if (!pattern.test(fld.value)) 
		{
			if (wrestFld == null) 
			{
				wrestMsg = wrestItemname(fld) + " : 회원아이디 형식이 아닙니다.\n\n영소문자, 숫자, _ 만 가능.\n\n첫글자는 영소문자, 숫자만 가능\n";
				wrestFld = fld;
			}
		}
	}

	// 한글인지 검사 (자음, 모음만 있는 한글은 불가)
	function wrestHangul(fld) 
	{ 
		if (!wrestTrim(fld)) return;

		var pattern = /([^가-힣\x20])/i; 

		if (pattern.test(fld.value)) 
		{
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + ' : 한글이 아닙니다. (자음, 모음만 있는 한글은 처리하지 않습니다.)\n'; 
				wrestFld = fld; 
			} 
		} 
	}

	// 한글인지 검사2 (자음, 모음만 있는 한글도 가능)
	function wrestHangul2(fld) 
	{ 
		if (!wrestTrim(fld)) return;

		var pattern = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i; 

		if (pattern.test(fld.value)) 
		{
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + ' : 한글이 아닙니다.\n'; 
				wrestFld = fld; 
			} 
		} 
	}

	// 한글,영문,숫자인지 검사3
	function wrestHangulAlphaNumeric(fld) 
	{ 
		if (!wrestTrim(fld)) return;

		var pattern = /([^가-힣\x20^a-z^A-Z^0-9])/i; 

		if (pattern.test(fld.value)) 
		{
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + ' : 한글, 영문, 숫자가 아닙니다.\n'; 
				wrestFld = fld; 
			} 
		} 
	}

	// 숫자인지검사 
	// 배부른꿀꿀이님 추가 (http://dasir.com) 2003-06-24
	function wrestNumeric(fld) 
	{ 
		if (fld.value.length > 0) 
		{ 
			for (i = 0; i < fld.value.length; i++) 
			{ 
				if (fld.value.charAt(i) < '0' || fld.value.charAt(i) > '9') 
				{ 
					wrestMsg = wrestItemname(fld) + " : 숫자가 아닙니다.\n"; 
					wrestFld = fld; 
				}
			}
		}
	}

	// 영문자 검사 
	// 배부른꿀꿀이님 추가 (http://dasir.com) 2003-06-24
	function wrestAlpha(fld) 
	{ 
		if (!wrestTrim(fld)) return; 

		var pattern = /(^[a-zA-Z]+$)/; 
		if (!pattern.test(fld.value)) 
		{ 
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + " : 영문이 아닙니다.\n"; 
				wrestFld = fld; 
			} 
		} 
	} 

	// 영문자와 숫자 검사 
	// 배부른꿀꿀이님 추가 (http://dasir.com) 2003-07-07
	function wrestAlphaNumeric(fld) 
	{ 
		if (!wrestTrim(fld)) return; 
		var pattern = /(^[a-zA-Z0-9]+$)/; 
		if (!pattern.test(fld.value)) 
		{ 
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + " : 영문 또는 숫자가 아닙니다.\n"; 
				wrestFld = fld; 
			} 
		} 
	} 

	// 영문자와 숫자 그리고 _ 검사 
	function wrestAlphaNumericUnderLine(fld) 
	{ 
		if (!wrestTrim(fld)) 
			return; 

		var pattern = /(^[a-zA-Z0-9\_]+$)/; 
		if (!pattern.test(fld.value)) 
		{ 
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + " : 영문, 숫자, _ 가 아닙니다.\n"; 
				wrestFld = fld; 
			} 
		} 
	} 

	// 주민등록번호 검사
	function wrestJumin(fld) 
	{ 
		if (!wrestTrim(fld)) return; 
		var pattern = /(^[0-9]{13}$)/; 
		if (!pattern.test(fld.value)) 
		{ 
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + " : 주민등록번호를 13자리 숫자로 입력하십시오.\n"; 
				wrestFld = fld; 
			} 
		} 
		else 
		{
			var sum_1 = 0;
			var sum_2 = 0;
			var at=0;
			var juminno= fld.value;
			sum_1 = (juminno.charAt(0)*2)+
					(juminno.charAt(1)*3)+
					(juminno.charAt(2)*4)+
					(juminno.charAt(3)*5)+
					(juminno.charAt(4)*6)+
					(juminno.charAt(5)*7)+
					(juminno.charAt(6)*8)+
					(juminno.charAt(7)*9)+
					(juminno.charAt(8)*2)+
					(juminno.charAt(9)*3)+
					(juminno.charAt(10)*4)+
					(juminno.charAt(11)*5);
			sum_2=sum_1 % 11;

			if (sum_2 == 0) 
				at = 10;
			else 
			{
				if (sum_2 == 1) 
					at = 11;
				else 
					at = sum_2;
			}
			att = 11 - at;
			// 1800 년대에 태어나신 분들은 남자, 여자의 구분이 9, 0 이라는 
			// 얘기를 들은적이 있는데 그렇다면 아래의 구문은 오류이다.
			// 하지만... 100살넘은 분들이 주민등록번호를 과연 입력해볼까?
			if (juminno.charAt(12) != att || 
				juminno.substr(2,2) < '01' ||
				juminno.substr(2,2) > '12' ||
				juminno.substr(4,2) < '01' ||
				juminno.substr(4,2) > '31' ||
				juminno.charAt(6) > 4) 
			{
				wrestMsg = wrestItemname(fld) + " : 올바른 주민등록번호가 아닙니다.\n"; 
				wrestFld = fld; 
			}

		}
	} 

	// 사업자등록번호 검사
	function wrestSaupja(fld) 
	{ 
		if (!wrestTrim(fld)) return; 
		var pattern = /(^[0-9]{10}$)/; 
		if (!pattern.test(fld.value)) 
		{ 
			if (wrestFld == null) 
			{ 
				wrestMsg = wrestItemname(fld) + " : 사업자등록번호를 10자리 숫자로 입력하십시오.\n"; 
				wrestFld = fld; 
			} 
		} 
		else 
		{
			var sum = 0;
			var at = 0;
			var att = 0;
			var saupjano= fld.value;
			sum =	(saupjano.charAt(0)*1)+
					(saupjano.charAt(1)*3)+
					(saupjano.charAt(2)*7)+
					(saupjano.charAt(3)*1)+
					(saupjano.charAt(4)*3)+
					(saupjano.charAt(5)*7)+
					(saupjano.charAt(6)*1)+
					(saupjano.charAt(7)*3)+
					(saupjano.charAt(8)*5);
			sum += parseInt((saupjano.charAt(8)*5)/10);
			at = sum % 10;
			if (at != 0) 
				att = 10 - at;  

			if (saupjano.charAt(9) != att) 
			{
				wrestMsg = wrestItemname(fld) + " : 올바른 사업자등록번호가 아닙니다.\n"; 
				wrestFld = fld; 
			}

		}
	} 

	// 공백 검사후 공백을 "" 로 변환
	function wrestNospace(fld)
	{
		var pattern = /(\s)/g; // \s 공백 문자
		if (pattern.test(fld.value)) 
		{
			if (wrestFld == null) 
			{
				wrestMsg = wrestItemname(fld) + " : 공백이 없어야 합니다.\n";
				wrestFld = fld;
			}
		}
	}

	// 모든 Form 에 적용하기 위해 this 활용
	var wrest_submit = function(){ 
		
		wrestMsg = ""; 
		wrestFld = null; 

		for (var i=0; i<this.elements.length; i++) { 

			var fld = this.elements[i]; 

			var class_name = fld.getAttribute('className') != null ? fld.getAttribute('className') : fld.getAttribute('class'); 
			if (class_name != null) {
				var opt = class_name.split(' '); 

				for (y=0;y<opt.length;y++) { 
					var str = opt[y].toLowerCase(); 

					switch (str) { 
						case "required"     : wrestRequired(this.elements[i]); break;		/*필수입력*/
						case "trim"         : wrestTrim(this.elements[i]); break;			/*좌우공백제거*/
						//case "minlength"    : wrestMinlength(this.elements[i]); break;
						case "email"        : wrestEmail(this.elements[i]); break;			/*이메일형식검사*/
						case "hangul"       : wrestHangul(this.elements[i]); break;			/*한글검사(자음모음X)*/
						case "hangul2"      : wrestHangul2(this.elements[i]); break;		/*한글검사(자음모음O)*/
						case "hangulalphanumeric"											/*한글영문숫자 검사*/
													: wrestHangulAlphaNumeric(this.elements[i]); break;
						case "memberid"     : wrestMemberId(this.elements[i]); break;		/*회원아이디 검사*/
						case "nospace"      : wrestNospace(this.elements[i]); break;		/*공백제거*/
						case "numeric"      : wrestNumeric(this.elements[i]); break;		/*숫자검사*/
						case "alpha"        : wrestAlpha(this.elements[i]); break;			/*영문검사*/
						case "alphanumeric" : wrestAlphaNumeric(this.elements[i]); break;	/*영문,숫자 검사*/
						case "alphanumericunderline" :										/*영문,숫자 _ 검사*/
											  wrestAlphaNumericUnderLine(this.elements[i]); break; 
						case "jumin"        : wrestJumin(this.elements[i]); break;			/*주민등록번호 검사*/
						case "saupja"       : wrestSaupja(this.elements[i]); break;			/*사업자번호 검사*/
								
						// 김선용 2006.3 - 전화번호 형식 검사
						case "telnumber"	: wrestTelnumber(this.elements[i]); break;		/*전화번호검사*/
						default : break;
					} 
						

					if(str.substring(0,9) == "minlength" && str.length > 9)
						wrestMinlength(this.elements[i], str.substring(9,str.length));
				} 
			}
		} 

		if (wrestFld != null) { 
			alert(wrestMsg); 
			if (wrestFld.style.display != 'none') { 
				wrestFld.style.backgroundColor="#d1eafb";
				wrestFld.focus(); 
			}
			return false; 
		} 


		if (this.old_submit && this.old_submit()==false) {
			return false; 
		}

		return true; 
	} 

	function wrest_submit2(f){ 

		wrestMsg = ""; 
		wrestFld = null; 

		for (var i=0; i<f.elements.length; i++) { 

			var fld = f.elements[i]; 

			var class_name = fld.getAttribute('className') != null ? fld.getAttribute('className') : fld.getAttribute('class'); 
			if (class_name != null) {
				var opt = class_name.split(' '); 

				for (y=0;y<opt.length;y++) { 
					var str = opt[y].toLowerCase(); 

					switch (str) { 
						case "required"     : wrestRequired(f.elements[i]); break;		/*필수입력*/
						case "trim"         : wrestTrim(f.elements[i]); break;			/*좌우공백제거*/
						//case "minlength"    : wrestMinlength(f.elements[i]); break;
						case "email"        : wrestEmail(f.elements[i]); break;			/*이메일형식검사*/
						case "hangul"       : wrestHangul(f.elements[i]); break;			/*한글검사(자음모음X)*/
						case "hangul2"      : wrestHangul2(f.elements[i]); break;		/*한글검사(자음모음O)*/
						case "hangulalphanumeric"											/*한글영문숫자 검사*/
													: wrestHangulAlphaNumeric(f.elements[i]); break;
						case "memberid"     : wrestMemberId(f.elements[i]); break;		/*회원아이디 검사*/
						case "nospace"      : wrestNospace(f.elements[i]); break;		/*공백제거*/
						case "numeric"      : wrestNumeric(f.elements[i]); break;		/*숫자검사*/
						case "alpha"        : wrestAlpha(f.elements[i]); break;			/*영문검사*/
						case "alphanumeric" : wrestAlphaNumeric(f.elements[i]); break;	/*영문,숫자 검사*/
						case "alphanumericunderline" :										/*영문,숫자 _ 검사*/
											  wrestAlphaNumericUnderLine(f.elements[i]); break; 
						case "jumin"        : wrestJumin(f.elements[i]); break;			/*주민등록번호 검사*/
						case "saupja"       : wrestSaupja(f.elements[i]); break;			/*사업자번호 검사*/
								
						// 김선용 2006.3 - 전화번호 형식 검사
						case "telnumber"	: wrestTelnumber(f.elements[i]); break;		/*전화번호검사*/
						default : break;
					} 
						

					if(str.substring(0,9) == "minlength" && str.length > 9)
						wrestMinlength(f.elements[i], str.substring(9,str.length));
				} 
			}
		} 

		if (wrestFld != null) { 
			alert(wrestMsg); 
			if (wrestFld.style.display != 'none') { 
				wrestFld.style.backgroundColor="#d1eafb";
				wrestFld.focus(); 
			}
			return false; 
		} 


		if (f.old_submit && f.old_submit()==false) {
			return false; 
		}

		return true; 
	} 
}