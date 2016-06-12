<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_top.php"); ?>

	<div class="sub_visual_06">
		
	</div><!-- sub_visual 종료 -->

	
	<div class="sub_con">
		<div class="sub_contents">

		<div class="map_con">
							<!--<img src="/images/map.jpg"  alt="" />
							<!--iframe src="company/map1.html" style="width:100%;min-height:300px;" frameborder="0" class="iframe_map"></iframe-->

							<div id="map" style="width:100%;height:550px;"></div>

							<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=305e4e4b7f9d9ee4bc16d4ae02be0f5d"></script>


							<script>
							var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
								mapOption = { 
									center: new daum.maps.LatLng(37.5134190, 127.0254190), // 지도의 중심좌표
									level: 3 // 지도의 확대 레벨
								};

							var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

							// 마커가 표시될 위치입니다 
							var markerPosition  = new daum.maps.LatLng(37.5134190, 127.0254190); 

							// 마커를 생성합니다
							var marker = new daum.maps.Marker({
								position: markerPosition
							});

							// 마커가 지도 위에 표시되도록 설정합니다
							marker.setMap(map);

							// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
							// marker.setMap(null);    
							</script>
				</div><!-- map_con-->


		</div><!-- sub_contents -->
	</div><!-- sub_con -->

<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_foot.php"); ?>