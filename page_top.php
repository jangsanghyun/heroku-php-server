<!DOCTYPE html>
<html>
<head>
<title>플라이업엔터테인먼트</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
<link rel="stylesheet" type="text/css" media="all" href="/m/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" media="all" href="/m/css/bootstrap-theme.min.css" />
<link rel="stylesheet" type="text/css" href="/m/css/style.css">

<!-- <script type='text/javascript' src='/m/js/jquery-3.0.0.min.js'></script> -->
<script   src="https://code.jquery.com/jquery-2.2.4.js"   integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="   crossorigin="anonymous"></script>
<script type='text/javascript' src='/m/js/jquery.common.js'></script>
<script type='text/javascript' src='/m/js/swipe.js'></script>
<script type="text/javascript" src="/m/js/jquery.colorbox.js"></script>
<script type='text/javascript' src="/m/js/jquery.easing.1.3.js"></script>
<script type='text/javascript' src='/m/js/jquery.flexslider-min.js'></script>
<script type='text/javascript' src='/m/js/bx.slider.min.js'></script>
<script type="text/javascript" src="/m/js/jquery.touchslider.js"></script>
<script type="text/javascript" src="/m/js/jquery.rolling.js"></script>
<script type="text/javascript" src="/m/js/idangerous.swiper.js"></script>
<script type="text/javascript" src="/m/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" media="all" href="/m/css/colorbox.css" />

<link href="/m/css/jquery.selectbox.css" type="text/css" rel="stylesheet" />

</head>

<body>

<div id="wrapper">

<header id="header">
	
	<section class="gnb">
		<div class="shadow hide"></div>
		<div style="position:absolute;right:25px;top:25px;">
				<a href="#lnb" class="lnb_open"><img src="/m/images/full_menu_btn.png" alt="전체메뉴" style="height:30px;width:30px;"></a>
			</div>
		<div class="mainLogo" style="padding-left:20px;display:none;">
		</div>
		
	</section><!-- gnb -->
</header>

<script>
	function menu_type(idx)
	{							
		if(idx == 1)
		{
			if($(".sub_menu_101").is(':hidden') == true){
				
				$(".sub_menu_01_bg_on").attr("class", "sub_menu_01_bg");
				$(".sub_menu_101").show();
				$(".sub_menu_02").hide();
				$(".sub_menu_03").hide();
				$(".sub_menu_04").hide();
				$(".sub_menu_05").hide();
				$(".sub_menu_06").hide();
				$(".sub_menu_07").hide();
				$("#menu_img_1").attr("src", "/images/tab_on.png");
				$("#menu_img_2").attr("src", "/images/tab_off.png");
				$("#menu_img_3").attr("src", "/images/tab_off.png");
				$("#menu_img_4").attr("src", "/images/tab_off.png");
				$("#menu_img_5").attr("src", "/images/tab_off.png");
				$("#menu_img_6").attr("src", "/images/tab_off.png");
				


			}
			else
			{
				$(".sub_menu_01_bg").attr("class", "sub_menu_01_bg_on");
				$(".sub_menu_101").hide();
				$("#menu_img_1").attr("src", "/images/tab_off.png");

			}



		}

		if(idx == 2)
		{
			if($(".sub_menu_02").is(':hidden') == true){

				$(".sub_menu_02_bg_on").attr("class", "sub_menu_02_bg");
				$(".sub_menu_02").show();
				$(".sub_menu_101").hide();
				$(".sub_menu_03").hide();
				$(".sub_menu_04").hide();
				$(".sub_menu_05").hide();
				$(".sub_menu_06").hide();
				$(".sub_menu_07").hide();
				$("#menu_img_2").attr("src", "/images/tab_on.png");
				$("#menu_img_1").attr("src", "/images/tab_off.png");
				$("#menu_img_3").attr("src", "/images/tab_off.png");
				$("#menu_img_4").attr("src", "/images/tab_off.png");
				$("#menu_img_5").attr("src", "/images/tab_off.png");
				$("#menu_img_6").attr("src", "/images/tab_off.png");


			}
			else
			{
				$(".sub_menu_02_bg").attr("class", "sub_menu_02_bg_on");
				$(".sub_menu_02").hide();

				$("#menu_img_2").attr("src", "/images/tab_off.png");

			}

		}

		if(idx == 3)
		{
			if($(".sub_menu_03").is(':hidden') == true){
				
				$(".sub_menu_03_bg_on").attr("class", "sub_menu_03_bg");
				$(".sub_menu_03").show();
				$(".sub_menu_101").hide();
				$(".sub_menu_02").hide();
				$(".sub_menu_04").hide();
				$(".sub_menu_05").hide();
				$(".sub_menu_06").hide();
				$(".sub_menu_07").hide();

				$("#menu_img_3").attr("src", "/images/tab_on.png");
				$("#menu_img_1").attr("src", "/images/tab_off.png");
				$("#menu_img_2").attr("src", "/images/tab_off.png");
				$("#menu_img_4").attr("src", "/images/tab_off.png");
				$("#menu_img_5").attr("src", "/images/tab_off.png");
				$("#menu_img_6").attr("src", "/images/tab_off.png");

			}
			else
			{
				$(".sub_menu_03_bg").attr("class", "sub_menu_03_bg_on");
				$(".sub_menu_03").hide();

				$("#menu_img_3").attr("src", "/images/tab_off.png");
			}

		}


		if(idx == 4)
		{
			if($(".sub_menu_04").is(':hidden') == true){
				
				$(".sub_menu_04_bg_on").attr("class", "sub_menu_04_bg");
				$(".sub_menu_04").show();
				$(".sub_menu_101").hide();
				$(".sub_menu_02").hide();
				$(".sub_menu_03").hide();
				$(".sub_menu_05").hide();
				$(".sub_menu_06").hide();
				$(".sub_menu_07").hide();

				$("#menu_img_4").attr("src", "/images/tab_on.png");
				$("#menu_img_1").attr("src", "/images/tab_off.png");
				$("#menu_img_2").attr("src", "/images/tab_off.png");
				$("#menu_img_3").attr("src", "/images/tab_off.png");
				$("#menu_img_5").attr("src", "/images/tab_off.png");
				$("#menu_img_6").attr("src", "/images/tab_off.png");

			}
			else
			{
				$(".sub_menu_04_bg").attr("class", "sub_menu_04_bg_on");
				$(".sub_menu_04").hide();

				$("#menu_img_4").attr("src", "/images/tab_off.png");
			}

		}

		if(idx == 5)
		{
			if($(".sub_menu_05").is(':hidden') == true){
				
				$(".sub_menu_05_bg_on").attr("class", "sub_menu_05_bg");
				$(".sub_menu_05").show();
				$(".sub_menu_101").hide();
				$(".sub_menu_02").hide();
				$(".sub_menu_03").hide();
				$(".sub_menu_04").hide();
				$(".sub_menu_06").hide();
				$(".sub_menu_07").hide();

				$("#menu_img_5").attr("src", "/images/tab_on.png");
				$("#menu_img_1").attr("src", "/images/tab_off.png");
				$("#menu_img_2").attr("src", "/images/tab_off.png");
				$("#menu_img_3").attr("src", "/images/tab_off.png");
				$("#menu_img_4").attr("src", "/images/tab_off.png");
				$("#menu_img_6").attr("src", "/images/tab_off.png");

			}
			else
			{
				$(".sub_menu_05_bg").attr("class", "sub_menu_05_bg_on");
				$(".sub_menu_05").hide();

				$("#menu_img_5").attr("src", "/images/tab_off.png");
			}

		}
		if(idx == 6)
		{
			if($(".sub_menu_06").is(':hidden') == true){
				
				$(".sub_menu_06_bg_on").attr("class", "sub_menu_06_bg");
				$(".sub_menu_06").show();
				$(".sub_menu_101").hide();
				$(".sub_menu_02").hide();
				$(".sub_menu_03").hide();
				$(".sub_menu_04").hide();
				$(".sub_menu_05").hide();
				$(".sub_menu_07").hide();

				$("#menu_img_6").attr("src", "/images/tab_on.png");
				$("#menu_img_1").attr("src", "/images/tab_off.png");
				$("#menu_img_2").attr("src", "/images/tab_off.png");
				$("#menu_img_3").attr("src", "/images/tab_off.png");
				$("#menu_img_4").attr("src", "/images/tab_off.png");
				$("#menu_img_5").attr("src", "/images/tab_off.png");

			}
			else
			{
				$(".sub_menu_06_bg").attr("class", "sub_menu_06_bg_on");
				$(".sub_menu_06").hide();

				$("#menu_img_6").attr("src", "/images/tab_off.png");
			}

		}
		if(idx == 7)
		{
			if($(".sub_menu_07").is(':hidden') == true){
				
				$(".sub_menu_07_bg_on").attr("class", "sub_menu_07_bg");
				$(".sub_menu_07").show();
				$(".sub_menu_101").hide();
				$(".sub_menu_02").hide();
				$(".sub_menu_03").hide();
				$(".sub_menu_04").hide();
				$(".sub_menu_05").hide();
				$(".sub_menu_06").hide();

				$("#menu_img_7").attr("src", "/images/tab_on.png");

			}
			else
			{
				$(".sub_menu_07_bg").attr("class", "sub_menu_07_bg_on");
				$(".sub_menu_07").hide();

				$("#menu_img_7").attr("src", "/images/tab_off.png");
			}

		}


	}

</script>

<section id="lnb">
	<div class="lnb_inner">
		<div class="contentpop">
			<div class="pop-wrap">
	<div class="headpop" style="background-color: rgba(122,195,204,1);width:100%;height:50px;">
		<div class="iconbtn" style="font-size:17px;color:#fff;padding:5px 0 0 5px;font-weight:bold;text-align:left;">
			<a href="/m"><img src="/m/images/m_logo.png" alt="로고" ></a>
		 <span style="float:left;padding-left:5px;line-height:250%;"></span>
		</div>
		
		
	</div>
	<div class="contentpop">
	<!--
		<div class="pop_smenu" style="padding-top:0px;">
			<a href="/m/subpage/company.php">
			<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:#0274bb;padding:13px 0 0 5%;
			">
				COMPANY 
			</div></a>

		</div>

		<div class="pop_smenu" style="clear:both;">
			<a href="/m/subpage/star/star.php">
			<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:#0274bb;padding:13px 0 0 5%;
			">
				STAR 
			</div></a>		
		</div>

		<div class="pop_smenu" style="clear:both;">
			<a href="/m/subpage/notice.php">
			<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:#0274bb;padding:13px 0 0 5%;
			">
				NOTICE
			</div></a>
		</div>


		<div class="pop_smenu" style="clear:both;">
			<a href="/m/subpage/news.php">
			<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:#0274bb;padding:13px 0 0 5%;
			">
				NEWS
			</div></a>
		</div>

		<div class="pop_smenu" style="clear:both;">
			<a href="/m/subpage/audition/audition_01.php">
			<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:#0274bb;padding:13px 0 0 5%;
			">
				AUDITION
			</div></a>
		</div>

		<div class="pop_smenu" style="clear:both;">
			<a href="/m/subpage/contact.php">
			<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:#0274bb;padding:13px 0 0 5%;
			">
				CONTACT US
			</div></a>
		</div>

		-->
		<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingOne">
					<h4 class="panel-title">
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						COMPANY
						</a>
					</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
					<div class="panel-body">
						<div class="pop_smenu" style="padding-top:0px;">
							<a href="/m/subpage/company.php">
							<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;">
								ABOUT 
							</div></a>

						</div>
						<div class="pop_smenu" style="padding-top:0px;">
							<a href="/m/subpage/company.php">
							<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;">
								HISTORY 
							</div></a>
						</div>
							<div class="pop_smenu" style="clear:both;">
							<a href="/m/subpage/contact.php">
							<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
							">
								CONTACT US
							</div></a>
						</div>
					</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingTwo">
					<h4 class="panel-title">
						<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						STAR
						</a>
					</h4>
					</div>
					<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
					<div class="panel-body">
						<div class="pop_smenu" style="clear:both;">
								<a href="/m/subpage/star/star.php">
								<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
								">
									STAR 
								</div></a>		
						</div>
						<div class="pop_smenu" style="clear:both;">
							<a href="/m/subpage/star/star.php">
							<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
							">
								FILMOGRAPHY 
							</div></a>		
						</div>
					</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingThree">
					<h4 class="panel-title">
						<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						COMMUNICATION
						</a>
					</h4>
					</div>
					<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
					<div class="panel-body">
						<div class="pop_smenu" style="clear:both;">
								<a href="/m/subpage/star/star.php">
								<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
								">
									NEWS 
								</div></a>		
						</div>
						<div class="pop_smenu" style="clear:both;">
							<a href="/m/subpage/star/star.php">
							<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
							">
								NOTICE 
							</div></a>		
						</div>
					</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingFour">
					<h4 class="panel-title">
						<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
						AUDITION
						</a>
					</h4>
					</div>
					<div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
					<div class="panel-body">
						<div class="pop_smenu" style="clear:both;">
								<a href="/m/subpage/star/star.php">
								<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
								">
									AUDITION 
								</div></a>		
						</div>
						<div class="pop_smenu" style="clear:both;">
							<a href="/m/subpage/star/star.php">
							<div style="font-weight:bold;width:95%;height:33px;font-size:14px;color:white;padding: 0px 15px;-webkit-box-align: center;
    display: -webkit-box;
							">
								RECRUITMENT 
							</div></a>		
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	<!-- End contentpop -->
</div>
		</div>
	</div><!-- //lnb_inner -->
</section><!-- //lnb -->

<script type="text/javascript">
	function totalHeight (){  
			var totalHeight = 0;
			var userAgent = navigator.userAgent.toLowerCase();
			 
			var browser = {
			    msie    : /msie/.test( userAgent ) && !/opera/.test( userAgent ),
			    safari  : /webkit/.test( userAgent ),
			    firefox : /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ),
			    opera   : /opera/.test( userAgent )
			};   
			 

			  if( browser.msie ){ //IE
			     var scrollHeight = document.documentElement.scrollHeight;
			     var browserHeight = document.documentElement.clientHeight;
			     totalHeight = scrollHeight < browserHeight ? browserHeight : scrollHeight;
			  } else if ( browser.safari ){ //Chrome || Safari
			     totalHeight = document.body.scrollHeight;
			  } else if ( browser.firefox ){ // Firefox || NS
			     var bodyHeight = document.body.clientHeight;
			     totalHeight = window.innerHeight < bodyHeight ? bodyHeight : window.innerHeight;
			   } else if ( browser.opera ){ // Opera
			     var bodyHeight = document.body.clientHeight;
			     totalHeight = window.innerHeight < bodyHeight ? bodyHeight : window.innerHeight;
			   } else { 
			     //alert("지원하지 않는 브라우져!!");
			   }
			   return totalHeight;
			  //alert(totalHeight); 
			}

	$(".lnb_open").click(function(e){
		var id = $($(this).attr("href"));
		var t = id.find(".lnb_inner");
		var b = t.css("display") == "block";
		 var backgound = $("<div>").attr({
						         "class": "popup_background"
						     }).css({
						       "background":"rgba(0, 0, 0,0.3)",
						       "width": "100%",
						       "height": totalHeight(),
						       "position": "absolute",
						       "left": 0,
						        "top": 0,
						        "z-index":99,
						        "opacity":0.7,
						  "filter":"alpha(opacity=50)" 
						     });
						   
		if(b){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("close","full_menu_btn") );
			t.stop().animate({"right":"-84.12698412698413%"},150,function(){
				$(this).css("display","none");
			});	
			$(".popup_background").remove();
			$(".sub_inner").hide();
			$(".quick_inner").hide();
			$(".gnb .shadow").addClass("hide");
			 

		}else{
			$(".popup_background").remove();
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("full_menu_btn","close") );
			t.css("display","block").stop().animate({"right":"0"},150);	
			 $("body").append(backgound);
			 $(".sub_inner").hide();
			 $(".quick_inner").hide();
			 $(".gnb .shadow").removeClass("hide");
			console.log("expend");
		}
		
		e.preventDefault();


	});

	function changesrc(obj) { tsrc = obj.attr('src'); obj.attr('src', obj.attr('onsrc')); obj.attr('onsrc', tsrc); }
			
	function moveUrl(url) {
		parent.location.href = url;
	}

	</script>



<script language="Javascript"> 
<!-- 
function setCookie( name, value, expiredays ) { 
    var todayDate = new Date(); 
        todayDate.setDate( todayDate.getDate() + expiredays ); 
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
    } 
function closeWin() { 
    if ( document.notice_form.chkbox.checked ){ 
        setCookie( "maindiv", "done" , 1 ); 
    } 
    document.all['popup_151021'].style.visibility = "hidden"; 
} 
//-->  
</script>