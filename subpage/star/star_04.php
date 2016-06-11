<!-- #include virtual = "/m/page_top.asp" -->

<%
	idx = Request("idx")

	Sql = "Select * From board_photo where idx = '"&idx&"' order by idx desc"
	Set rs = dbcon.execute(sql)

	If Not(rs.eof) Then 

		idx		= RS("idx")
		B_FILE0 = RS("B_FILE0")
		B_FILE1 = RS("B_FILE1")

%>
	<div class="sub_visual_02">
		<div class="sub_top_tt">
			Star<br />
			<div class="sub_top_tt_line"></div>
			<div class="sub_top_m">
			(주)플라이업엔터테인먼트<br>
			소속 아티스트들
			</div>
		</div><!-- sub_top_tt 종료 -->
	</div><!-- sub_visual 종료 -->


	<div class="sub_con">
		<div class="sub_contents">

			<img src="/upload_file/board_photo/<%=B_FILE1%>">

		</div><!-- sub_contents -->
		<div style="clear:both;width:100%;text-align:center;padding-top:10px;">
			<a href = "/m/subpage/star/star.asp">
			<img src = "/m/images/b_list_01.jpg" alt="" /></a>
		</div>
	</div><!-- sub_con -->

<%
	End If
	
%>

<!-- #include virtual = "/m/page_foot.asp" -->