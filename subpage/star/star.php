<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_top.php"); ?>

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

			<div class="star_p">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
<%
	Sql = "Select * From board_photo order by idx desc"
	Set rs = dbcon.execute(sql)

	If Not(rs.eof) Then 

		jj = 1 
		DO UNTIL RS.EOF

		idx		= RS("idx")
		B_FILE0 = RS("B_FILE0")
		B_FILE1 = RS("B_FILE1")
		
		If jj = 3 Then jj = 1
		
			If jj = 1 Then 
 %>					
					<tr>
						<td><a href="star_04.asp?idx=<%=idx%>"><img src="/upload_file/board_photo/<%=B_FILE0%>"></a></td>
<%
			Else 
%>
						<td><a href="star_04.asp?idx=<%=idx%>"><img src="/upload_file/board_photo/<%=B_FILE0%>"></a></td>
					</tr>
<%
			End If
			

		jj = jj + 1

		RS.MOVENEXT
		Loop

	End If
	
%>
					
				</table>
			 </div>

		</div><!-- sub_contents -->
	</div><!-- sub_con -->

	

<?php include($_SERVER["DOCUMENT_ROOT"]."/m/page_foot.php"); ?>