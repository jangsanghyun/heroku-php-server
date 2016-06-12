<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_top.php"); ?>

<style>
.main-link-body {
    height:auto;
    overflow:hidden;
}
.main-link-body div {
    float:left;
    width:50%;
}

.eventImageWrap {
    position:relative;
}

.eventTextWrap {
    position: absolute;
    top: 190px;
    width: 100%;
}

.eventTextWrap .starName {
    margin-bottom:10px;
    font-size: 25px;
    font-weight: bold;
    color:#fff;
}

.more-info-btn {
    background-color: #7ac3cc;
    color: #ffffff !important;
    border-radius:10px;
    font-size:14px;
    padding:5px 20px;
}

</style>


<section id="event" style="margin-top: 70px;">
    <div id="eventContainer" style="cursor: -webkit-grab;">
        <ul id="articleVisual" class="eventWrapper">
            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_01.jpg" alt=" " /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>LEE BO YOUNG</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>
        
            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_02.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>WANG BIT NA</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>
        
            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_03.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>YOO IN YOUNG</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
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
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>KIM SUNG OH</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>

            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_06.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>RYU SU YOUNG</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>

            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_07.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>CHOI JUNG WON</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>

            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_08.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>KIM JI HOON</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>

            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_09.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>HONG SEUNG HUI</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>

            <li class="eventArea">
                <div class="eventImageWrap">
                    <a href="" class="event_thumb">
                    <img class="event_img" src="/m/images/m_10.jpg" alt="" /></a>
                    <div class="eventTextWrap">
                        <div class="starName">
                            <span>JANG EUI SOO</span>
                      </div>
                      <div>
                        <a class="more-info-btn" href="#">M O R E&nbsp;&nbsp;I N F O</a>
                      </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="eventPaging">
            <span class="swiper-pagination-switch"></span>
            <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
        </div>
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
            //docReady();
        });

    });
</script>

<div class="main-link-body" style="margin:25px;">
    <div><a href="/m/company"><img src="./images/menu_1.jpg" width="100%"></a></div>
    <div><a href="/m/star"><img src="./images/menu_3.jpg" width="100%"></a></div>
    <div><a href="/m/notice"><img src="./images/menu_4.jpg" width="100%"></a></div>
    <div><a href="/m/news"><img src="./images/menu_5.jpg" width="100%"></a></div>
    <div style="clear:both;"></div>
</div>


<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_foot.php"); ?>
