if (typeof(JQUERY_SITE_DEFAULT) == 'undefined') // 한번만 실행
{
	var JQUERY_SITE_DEFAULT = true;

	$(function(){
		// ajaxForm 을 사용하지 않는 form 일경우 Sumit 가로채서 검사
		$("form").not("form[name=Admin_Form_Update]").each(function(i) { 
			var $form = $(this); 
			var f = $form[0]; 

			if (f.onsubmit) f.old_submit = f.onsubmit; 
			f.onsubmit = wrest_submit; 
		}); 

		$("form[name=Admin_Form_Update]").each(function(i) { 
			var $form = $(this); 
			var f = $form[0]; 

			f.old_submit = f.onsubmit; 
			f.onsubmit = function(){ return false; };
		});

		/* 체크 박스 확인 */
		$("input:checkbox[name=chk_all]").click(
			function(){
				$('input:checkbox[name=chk[]]').attr("checked",$(this).attr("checked"));
			}
		);
	});

}

//게시물삭제
function SubmitCheck(f){
	var check_num = $('input:checked[name=chk[]]').size();
	if(check_num>0){
		if(confirm(' '+check_num+'건의 게시물을 정말로 삭제하시겠습니까? \n\n 게시물은 복구가 되지 않습니다. ')){
			f.submit();
		}else
			return false;
	}else{
		alert('한 개 이상의 게시물을 선택하셔야 합니다.');
		return false;
	}
}

/************* 쪽지관련 시작 *************/
var SetNoteTimer="";
function View_Note(){
	if($("#NoteImg").attr("src")==Home_Dir+"/_Image/icon/Note1.gif")
		$("#NoteImg").attr("src",Home_Dir+"/_Image/icon/Note2.gif");
	else
		$("#NoteImg").attr("src",Home_Dir+"/_Image/icon/Note1.gif");
}

function Note_Ajax(){
	//쪽지 Ajax
	$.post(
		Home_Dir+"/_Script/PHP_Func/Note.Alarm.php",
		{},
		function(data){
			clearInterval(SetNoteTimer);

			if(data.ReadNote!="0")
				SetNoteTimer = setInterval(View_Note,300);
			else{
				if($("#NoteImg").attr("src")==Home_Dir+"/_Image/icon/Note2.gif")
					$("#NoteImg").attr("src",Home_Dir+"/_Image/icon/Note1.gif");
			}
		},
		"json"
	);
}
	
function NoteStart(){
	Note_Ajax();
	var AutoNote = setInterval(Note_Ajax,5000);
	
	$(function(){
		$("#NoteOpen").click(function(){
			NoteBrowser();
		});
	});
}
	
function NoteBrowser(){
	window.open(Home_Dir+"/Member/Note.php","WinNote","width=600, height=470");
}
/************* 쪽지관련 끝 *************/

/************* 사이드메뉴 시작 **************/
function ShowSideMenu(e, mb_id, level) {
	var divid = $("#SideMenuLayer");
	var x,y;
	var browser = navigator.appName;

	if(browser=="Microsoft Internet Explorer"){
		x = (document.layers)?loc.pageX:event.clientX;
		y = (document.layers)?loc.pageY:event.clientY;
	}else{
		x = e.clientX;
		y = e.clientY;
	}

	if(level == 'A' || level == 'B'){

		//사이드메뉴가 열려있으면 닫기
		if(divid.attr("id")!=undefined)
			divid.remove();

		var AddElement = "<div id='SideMenuLayer' onMouseOut='HideSideMenu(2);' style='position:absolute; top:"+y+"; left:"+x+"; border:solid 1px #d5d5d5; background-color:#ffffff; width:100px; z-index:999;'>";

		AddElement += "<table cellpadding='0' cellspacing='0' border='0' width='100%'>";
		AddElement += "<tr><td height='10' align='right'><a href='javascript:HideSideMenu(1);' title='닫기'>x</a>&nbsp;</td></tr>";
		AddElement += "<tr><td height='20'>&nbsp;· <a href=\"javascript:NoteBrowser('Write','"+mb_id+"');\" title='쪽지보내기'>쪽지보내기</a></td></tr>";
		AddElement += "</table>";

		AddElement += "</div>";

		$("body").append(AddElement);
	}
}

//사이드메뉴 닫기
function HideSideMenu(sw){
	if(sw==1)
		$("#SideMenuLayer").remove();
	else{
		$("#SideMenuLayer").mouseleave(function(){
			$("#SideMenuLayer").remove();
		});
	}
}
/************* 사이드메뉴 끝 **************/