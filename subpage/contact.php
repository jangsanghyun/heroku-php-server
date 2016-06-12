<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_top.php"); ?>

	<div style="margin:25px;">
		<img src="../images/contact_top.png" width="100%"/>
	</div>
	<div id="map" style="width:100%;height:300px;"></div>
	<div style="margin:25px;">
		<img src="../images/contact_bottom.png" width="100%"/>
	</div>

	<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=0337ac038b818db7e1efaeaa6c58608c"></script>
	<script>
	var mapContainer = document.getElementById('map'),
		mapOption = { 
			center: new daum.maps.LatLng(37.5134190, 127.0254190),
			level: 3
		};
	var map = new daum.maps.Map(mapContainer, mapOption);
	var markerPosition  = new daum.maps.LatLng(37.5134190, 127.0254190); 
	var marker = new daum.maps.Marker({
		position: markerPosition
	});
	
	marker.setMap(map);
	// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
	// marker.setMap(null);    
	</script>

<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_foot.php"); ?>