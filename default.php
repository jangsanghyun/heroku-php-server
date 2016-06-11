<?php include("/m/page_top.php"); ?>

        <section id="event">

            <div id="eventContainer" style="cursor: -webkit-grab;">
                <ul id="articleVisual" class="eventWrapper">
                    
                        <li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_01.jpg" alt=" " /></a>
                            </div>
                        </li>
                    
                        <li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_02.jpg" alt="" /></a>
                            </div>
                        </li>
                    
                        <li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_03.jpg" alt="" /></a>
                            </div>
                        </li>
                    
                       <!-- <li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="/" class="event_thumb">
                                <img class="event_img" src="/m/images/m_04.jpg" alt="" /></a>
                            </div>
                        </li-->
                    
                        <li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_05.jpg" alt="" /></a>
                            </div>
                        </li>

						<li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_06.jpg" alt="" /></a>
                            </div>
                        </li>

						<li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_07.jpg" alt="" /></a>
                            </div>
                        </li>

						<li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_08.jpg" alt="" /></a>
                            </div>
                        </li>

						<li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_09.jpg" alt="" /></a>
                            </div>
                        </li>

						<li class="eventArea">
                            <div class="eventImageWrap">
                                <a href="" class="event_thumb">
                                <img class="event_img" src="/m/images/m_10.jpg" alt="" /></a>
                            </div>
                        </li>
                </ul>
                <div class="eventPaging"><span class="swiper-pagination-switch"></span><span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span></div>
                    <a href="javascript://" class="btn_eventPrev"><img src="/m/images/btn_prev_m.png" alt="이전배너보기" style="width:29px;"/></a>
                    <a href="javascript://" class="btn_eventNext"><img src="/m/images/btn_next_m.png" alt="다음배너보기" style="width:29px;"/></a>
            </div>
        </section>


        <script>
            $(function() {
                /*상단 이벤트 배너*/
                var eventTarget = "#event > .eventTabs > .wrap > ol > li"; //대상 - 공통
                var eventActive = "#event > .eventTabs > .wrap > ol > li.active"; //대상활성화 - 공통
                var eventList = "#event > #eventList > .wrap > ol > li"; //대상 - 선택
                var eventListActive = "#event > #eventList > .wrap > ol > li.active"; //대상 - 선택활성화

                var event = new Swiper('#eventContainer', {
                    pagination : '.eventPaging',
                    paginationClickable : true,
                    autoplay : 3000,
                    speed : 1000,
                    grabCursor : true,
                    mode : 'horizontal',
                    loop : true,
                    //loopAdditionalSlides:0,
                    slideElement : 'li',
                    slideClass : 'eventArea',
                    wrapperClass : 'eventWrapper',
                    onSlideChangeStart : function() {
                        $(eventListActive).removeClass('active');
                        $(eventList).eq(event.activeLoopIndex).addClass('active');
                    }
                });
                $(eventTarget).on('touchstart mousedown', function(e) {
                    e.preventDefault();
                    $(eventActive).removeClass('active');
                    $(this).addClass('active');
                    event.swipeTo($(this).index());
                });
                $(eventTarget).click(function(e) {
                    e.preventDefault();
                });
                
                // 다음/이전 버튼
                $('.btn_eventNext').click(function(e) {
                    e.preventDefault();
                    event.swipeNext();
                });
                $('.btn_eventPrev').click(function(e) {
                    e.preventDefault();
                    event.swipePrev();
                });
                
                /*하단 공지 영역*/
                var information = new Swiper('#informationContainer', {
                    mode : "vertical",
                    autoplay : true,
                    speed : 1000,
                    autoplay : 3000,
                    loop : true,
                    slideElement : 'li',
                    slideClass : 'informationArea',
                    wrapperClass : 'informationWrapper'
                });

                /*윈도우너비에 따라 제품 이미지크기 변경*/
                var resizeTimer;

                function resizeBannerImage() {
                    var max = -1;
                    $(".event_img").each(function() {
                        var h = $(this).height();
                        max = h > max ? h : max;
                    });

                    $("#event #eventContainer ").css("height", max);
                    $("#event #eventContainer #articleVisual .eventArea").css("height", max);

                    if ($('#banner_top').css('display') == 'block') {
                        $("#article").css("padding-top", (124 + $("#banner_top").height()) + "px");
                    }
                }
                
                resizeBannerImage();

                $(window).bind("resize", function(e) {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(resizeBannerImage, 100);
                });

                $(window).bind("load", function() {
                    $(window).resize();
                    docReady();
                });

            });
        </script>


	
	<div class="main_con">
		<div id="container_1" style="float:left; width:49.7%;">
			<a href="/m/subpage/company.asp"><img class="event_img" src="/m/images/menu_1.jpg" alt="" style="width:100%;"/></a>
			<a href="/m/subpage/audition/audition_01.asp"><img class="event_img" src="/m/images/menu_2.jpg" alt="" style="width:100%;"/></a>
		</div><!-- container_1 종료 -->
		<div id="container_2" style="float:right; width:50.3%;">
			<a href="/m/subpage/star/star.asp"><img class="event_img" src="/m/images/menu_3.jpg" alt="" style="width:100%;"/></a>
		</div><!-- container_2 종료 -->
		<div id="container_3" style="float:left; width:100%; margin:0;">
			<a href="/m/subpage/notice.asp"><img class="event_img" src="/m/images/menu_4.jpg" alt="" style="float:left; width:33.3%;"/></a>
			<a href="/m/subpage/news.asp"><img class="event_img" src="/m/images/menu_5.jpg" alt="" style="float:left; width:33.3%;"/></a>
			<a href="/m/subpage/contact.asp"><img class="event_img" src="/m/images/menu_6.jpg" alt="" style="width:33.3%;"/></a>
		</div><!-- container_3 종료 -->
	</div><!-- main_con 종료 -->

<?php include("/m/page_foot.php"); ?>
