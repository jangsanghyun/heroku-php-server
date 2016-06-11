

var funcs = {};
funcs['nospace'] = isNoSpace;				/* 공백없이 */
funcs['email'] = isValidEmail;				/* 이메일검사 */
funcs['emailfirst'] = isValidEmailFirst;			/* 이메일 앞자리 */
funcs['phone'] = isValidPhone;				/* 전화번호 */
funcs['userid'] = isValidUserid;				/* 아이디 */
funcs['hangul'] = hasHangul;				/* 한글 */
funcs['number'] = isNumeric;				/* 숫자 */
funcs['number2'] = isNumeric2;				/* 숫자2 */
funcs['engonly'] = alphaOnly;				/* 영문 */
funcs['hangulonly'] = hangulOnly;			/* 한글 */
funcs['jumin'] = isValidJumin;				/* 주민번호 */
funcs['bizno'] = isValidBizNo;				/* 사업자번호 */
funcs['pw'] = isValidPassword;				/* 비밀번호 */

 
var NO_BLANK = "{name+을를} 입력하여 주십시오";
var NO_SELECT = "{name+을를} 선택하여주십시오";
var NOT_VALID = "{name+이가} 올바르지 않습니다";
var TOO_LONG = "{name}의 길이가 초과되었습니다 (최대 {maxbyte}바이트)";
var TOO_SHORT = "{name}의 길이가 부족합니다 (최소 {minbyte}바이트)";

String.prototype.hasFinalConsonant = function(str) {
	str = this != window ? this : str; 
	var strTemp = str.substr(str.length-1);
	return ((strTemp.charCodeAt(0)-16)%28!=0);
}

String.prototype.getBytes = function() {
	
	var cnt = 0;
	
	for (var i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 127) {
			cnt += 2;
		} else {
			cnt++;
		}
	}
	
	return cnt;
}

String.prototype.trim = function () {
	var s = (this!=null) ? this : "";
	s = s.replace(/^\s+/g,"");
	s = s.replace(/\s+$/g,"");
	return s;
};




function josa(str,tail) {
	return (str.hasFinalConsonant()) ? tail.substring(0,1) : tail.substring(1,2);
}

function validate(form) {
	var i=0;

	for (i = 0; i < form.elements.length; i++ ) {
		var el = form.elements[i];
		if(el.tagName.toUpperCase() != "OBJECT") {
			el.value = el.value.trim();
	
			if (el.getAttribute("REQUIRED") != null) {
				if(el.type.indexOf("select")>-1){
					if (el.selectedIndex==0 ) {
						return doError(el,NO_SELECT);
					}
				}else{
					if (el.value == null || el.value == "") {
						return doError(el,NO_BLANK);
					}
				}
			}
	
			if (el.getAttribute("MAXBYTE") != null && el.value != "") {
				var len = el.value.getBytes();
				if (len > parseInt(el.getAttribute("MAXBYTE"))) {
					maxbyte = el.getAttribute("MAXBYTE");
					return doError(el,TOO_LONG,"",maxbyte);
				}
			}
			if (el.getAttribute("MINBYTE") != null && el.value != "") {
				var len = el.value.getBytes();
				if (len < parseInt(el.getAttribute("MINBYTE"))) {
					minbyte = el.getAttribute("MINBYTE");
					return doError(el,TOO_SHORT,"",minbyte);
				}
			}
	
			if (el.getAttribute("OPTION") != null && el.value != "") {
				if (!funcs[el.getAttribute("OPTION").toLowerCase()](el)) 
					return false;
			}
	
			if (el.getAttribute("FILETYPE") != null && el.value != "") {
				var validFileType = el.getAttribute("FILETYPE").split(",");
				var nFileType = el.value.substring(el.value.lastIndexOf(".")+1,el.length);
				var isValidFileType = false;
				for (j=0; j<validFileType.length ; j++) {
					if (nFileType.toUpperCase()==validFileType[j].toUpperCase().replace(/\s/g,"")) {
						isValidFileType = true;
					}
				}
				if (!isValidFileType) {
					var nameString = "";
					if (el.getAttribute("$name") != null && el.getAttribute("$name") != "") {
						nameString = "{name+이가} ";
					}
					return doError(el,nameString+"적절한 파일 포맷이 아닙니다.");
				}
			}
			
			if( el.getAttribute("type") == "file" && el.value != "") {
				if( !isNoHangulbyValue(el) ) return false;
			}
		}
	}
	return true;
}

function doError(el,type,action,byte) {
	var pattern = /{([a-zA-Z0-9_]+)\+?([가-힝]{2})?}/;
	var name = ($name = el.getAttribute("$NAME")) ? $name : el.getAttribute("NAME");
	pattern.exec(type);
	var tail = (RegExp.$2) ? josa(eval(RegExp.$1),RegExp.$2) : "";
	alert(type.replace(pattern,eval(RegExp.$1) + tail).replace(pattern,byte));
	if (action == "sel") {
		el.select();
	} else if (action == "del")	{
		el.value = "";
	}
	if (el.getAttribute("UNFOCUSED") == null) {
		if(el.type!="hidden"&&el.style.display.toUpperCase()!="NONE"){		
			el.focus();
		}
	}	
	return false;
}	






/**
* 패턴 검사 함수들
******************************************************************************/

function isNoSpace(el) {
	var pattern = /[\s]/;
	return (!pattern.test(el.value)) ? true : doError(el,"{name+은는} 띄어쓰기 없이 입력해주시기 바랍니다");
}

function isValidEmail(el) {
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	return (pattern.test(el.value)) ? true : doError(el,NOT_VALID);
}

function isValidEmailFirst(el) {
	var pattern = /^[_a-zA-Z0-9-\.]+$/;
	return (pattern.test(el.value)) ? true : doError(el,NOT_VALID);
}

function isValidUserid(el) {
	var pattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{3,11}$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 4자이상 12자 미만이어야 하고,\n 영문,숫자, _ 문자만 사용할 수 있습니다");
}

function isNoHangulbyValue(el) {
	var pattern = /[가-힝]/;
	var splitValue = el.value.split('\\');
	var filename = splitValue[splitValue.length-1];
	
	return (!pattern.test(filename)) ? true : doError(el,"첨부파일명(" + filename + ")에는 한글을 사용할 수 없습니다.");
}

function hasHangul(el) {
	var pattern = /[가-힝]/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 한글을 포함해야 합니다");
}
function hangulOnly(el) {
	var pattern = /^[가-힝]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 한글만 입력가능 합니다");
}

function alphaOnly(el) {
	var pattern = /^[a-zA-Z]+$/;
	return (pattern.test(el.value)) ? true : doError(el,NOT_VALID);
}

function isNumeric(el) {
	var pattern = /^[0-9]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 숫자로만 입력해야 합니다");
}

function isNumeric2(el) {
	var pattern = /^[0-9,.]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 숫자로만 입력해야 합니다");
}


function isValidJumin(el) {
    var pattern = /^([0-9]{6})-?([0-9]{7})$/; 
	var num = el.value;
    if (!pattern.test(num)) return doError(el,NOT_VALID); 
    num = RegExp.$1 + RegExp.$2;

	var sum = 0;
	var last = num.charCodeAt(12) - 0x30;
	var bases = "234567892345";
	for (var i=0; i<12; i++) {
		if (isNaN(num.substring(i,i+1))) return doError(el,NOT_VALID);
		sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
	}
	var mod = sum % 11;
	return ((11 - mod) % 10 == last) ? true : doError(el,NOT_VALID);
}

function isValidBizNo(el) { 
	var pattern = /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/; 
	var num = el.value;
    if (!pattern.test(num)) return doError(el,NOT_VALID); 
    num = RegExp.$1 + RegExp.$2 + RegExp.$3;
    var cVal = 0; 
    for (var i=0; i<8; i++) { 
        var cKeyNum = parseInt(((_tmp = i % 3) == 0) ? 1 : ( _tmp  == 1 ) ? 3 : 7); 
        cVal += (parseFloat(num.substring(i,i+1)) * cKeyNum) % 10; 
    } 
    var li_temp = parseFloat(num.substring(i,i+1)) * 5 + '0'; 
    cVal += parseFloat(li_temp.substring(0,1)) + parseFloat(li_temp.substring(1,2)); 
    return (parseInt(num.substring(9,10)) == 10-(cVal % 10)%10) ? true : doError(el,NOT_VALID); 
}

/*
function isValidPhone(el) {
	var pattern = /^([0]{1}[0-9]{1,2})-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
	if (pattern.exec(el.value)) {
		if(RegExp.$1 == "011" || RegExp.$1 == "016" || RegExp.$1 == "017" || RegExp.$1 == "018" || RegExp.$1 == "019") {
			el.value = RegExp.$1 + "-" + RegExp.$2 + "-" + RegExp.$3;
		}
		return true;
	} else {
		return doError(el,NOT_VALID);
	}
}
*/

function isValidPhone(el) {
	var pattern = /^[0-9-]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 숫자로만 입력해야 합니다");
}

function isValidDate(el) {
	var oDateStr = el.value;
	var oDate = new Date(oDateStr.substr(0,4),oDateStr.substr(4,2)-1,oDateStr.substr(6,2));
	var oYearStr=oDate.getFullYear();
	var oMonthStr=(oDate.getMonth()+1).toString();
	oMonthStr = (oMonthStr.length ==1) ? "0"+ oMonthStr: oMonthStr; 
	var oDayStr=oDate.getDate().toString();
	oDayStr = (oDayStr.length ==1) ? "0"+ oDayStr: oDayStr;
	return  (oDateStr == oYearStr+oMonthStr+oDayStr) ? true : doError(el,NOT_VALID); 
}

function isValidPassword(el) {
	var pattern = /^[A-Za-z0-9_\-\!@#]{6,20}$/;
	return (pattern.test(el.value)) ? true : doError(el,"비밀번호가 올바르지 않습니다.\n비밀번호는 4자이상 12자 이하의 영문, 숫자, 특수문자만 사용할 수 있습니다");
}


function isValidFileName(_s) {
	var returnValue = true;
	if (_s==undefined) _s = "";
	if (_s!="") {
		var startIndex = _s.lastIndexOf("\\");
		var fileName = _s.substring(startIndex+1);
		if (fileName.length>15) {
			returnValue = false;
		}
	}
	return returnValue;
}

function checkBoxLength(obj, maxlen, arr) {
	Tobj = eval('$("form").' + obj);	
	var count = 0;
	for(i=0;i<Tobj.length;i++) {
		if(Tobj[i].checked) count++;
	}
	
	if (count > maxlen) {alert('최대 ' + maxlen + '개까지 선택 가능 합니다'); 
		arr.checked = false; 
	}	
}