<?php include("/m/page_top.php"); ?>


<%
	b_type = Request("b_type")
	idx = Request("idx")

	gotopage = Request("gotopage")
	b_category = Request("b_category")

	b_code			= "board_news"

	pass_type	= Request("pass_type")

	Sql = "Select * From "&b_code&" Where idx = '"&idx&"' and b_category = '"&b_category&"'"
	Set rs = dbcon.execute(sql)


	If Not(rs.eof) Then
	
		idx				= RS("idx")
		b_subject		= RS("b_subject")
		b_content		= RS("b_content")
		b_content		= replace(b_content,"/upload_file/", Site_Url&"/upload_file/")
		b_id			= RS("b_id")
		b_name			= RS("b_name")
		b_writeday		= RS("b_writeday")

		b_writeday		= Left(b_writeday,10)

		b_writeday		= Replace(b_writeday,"-",".")

		b_file0			= rs("b_file0")

		
		b_email			= RS("b_email")
		b_pw			= RS("B_SECURITY_PWD")
		b_pass_u		= RS("B_SECURITY_U")

		
		If pass_type = "" Then
		
		
			If b_pass_u = "1" Then
			
				response.redirect site_loc&"/subpage/subpage.asp?page_index=m_board/board_pass.asp&b_type=view&idx="&idx&"&gotopage="&gotopage&"&b_category="&b_category


			End If

		Else
		
			If pass_type <> b_pw Then

				Response.write ExecJavaAlertLocation("비밀번호가 다릅니다. 확인 바랍니다.",site_loc&"/subpage/subpage.asp?page_index=m_board/board_pass.asp&b_type=view&idx="&idx&"&gotopage="&gotopage&"&b_category="&b_category)

			End If
		
		End If
		


	End If

	
	''/// 이전글 다음글
	SQL  = "select min(IDX) from "&b_code&"  where  IDX > '"&IDX&"' and b_category = '"&b_category&"' "
	set prev_row = DbCon.Execute(SQL)

	if not prev_row.eof then
	prev_idx = prev_row(0)
	Else
	prev_idx = 0
	end if
	prev_row.close : Set prev_row = nothing

	sql = "select b_subject from "&b_code&" where idx = '"&prev_idx&"' and b_category = '"&b_category&"' "
	set ps = dbcon.execute(sql)

	If Not(ps.eof) then
	prev_link = "<A HREF='"&site_loc&"/m/subpage/news_view.asp.asp?b_category="&b_category&"&IDX="&prev_idx&"&gotopage="&gotopage&"'>"
	prev_subject = "<A HREF='"&site_loc&"/m/subpage/news_view.asp.asp?b_category="&b_category&"&IDX="&prev_idx&"&gotopage="&gotopage&"'>"&Left(ps("b_subject"),24)&"..</a>"
	Else
	prev_link = "<a href = 'javascript:link_prev();'>"
	prev_subject = "이전글이 없습니다."
	End If
	ps.close : set ps = nothing

	SQL = "select max(IDX) from "&b_code&" where  IDX < '"&IDX&"' and b_category = '"&b_category&"' "
	set next_row = DbCon.Execute(SQL)
	if not next_row.eof then
	next_idx = next_row(0)
	Else
	next_idx = 0
	end if
	next_row.close : Set next_row = nothing

	sql = "select b_subject from "&b_code&" where idx = '"&next_idx&"' and b_category = '"&b_category&"' "
	set ps = dbcon.execute(sql)

	If Not(ps.eof) Then
	next_link = "<A HREF='"&site_loc&"/m/subpage/news_view.asp.asp?b_category="&b_category&"&IDX="&next_idx&"&gotopage="&gotopage&"'>"
	next_subject = "<A HREF='"&site_loc&"/m/subpage/news_view.asp.asp?b_category="&b_category&"&IDX="&next_idx&"&gotopage="&gotopage&"'>"&Left(ps("b_subject"),24)&"..</a>"
	Else
	prev_link = "<a href = 'javascript:link_next();'>"
	next_subject = "다음글이 없습니다."
	End If


	ps.close : set ps = nothing
	

%>
<SCRIPT>
	function link_prev()
	{
		alert("이전글이 없습니다.");
	}

	function link_next()
	{
		alert("다음글이 없습니다.");
	}

	function bbs_search()
	{
		form = document.frmSearch;

		if(form.searchString.value=="")
		{			
			alert("검색어를 입력하세요");
			form.searchString.focus();
			return;
		}

		form.submit();


	}

</SCRIPT>	

	<div class="sub_visual_04">
		<div class="sub_top_tt">
			News<br />
			<div class="sub_top_tt_line"></div>
			<div class="sub_top_m">
			(주)플라이업엔터테인먼트<br>
			새소식
			</div>
		</div><!-- sub_top_tt 종료 -->
	</div><!-- sub_visual 종료 -->
	
	<div class="sub_con">
		<div class="sub_contents">
			
			<!-- m_board 시작 -->
			<div class="m_board">
				
				<div class="board_wrap">
						<div style="border-top:1px solid #dfdfdf;"></div>
						<div class="s_contents1">	

							<ul class="s_board">
								<li class="l_text">
									<b><%=b_subject%></b>
									<br>
									<span class="date"><%=b_name%>&nbsp;|&nbsp;<%=b_writeday%></span>	
								</li>
							</ul>
							<div class="con_text">
								<%=b_content%>
							</div>
				<%
					Select Case b_category

					Case "1"
						If menu_name_01_write = "1" Then
							write_type = "on"
						ElseIf menu_name_01_write = "2" Then
							write_type = "member"
						Else
							write_type = "no"
						End If

					Case "2"
						If menu_name_02_write = "1" Then
							write_type = "on"
						ElseIf menu_name_02_write = "2" Then
							write_type = "member"
						Else
							write_type = "no"
						End If

					Case "3"
						If menu_name_03_write = "1" Then
							write_type = "on"
						ElseIf menu_name_03_write = "2" Then
							write_type = "member"
						Else
							write_type = "no"
						End If
						
					End Select

					If write_type = "on" Then
					

				%>
							<div class="substance_h_line1">
								<div class="substance_h_line"></div>
							</div>
							<div class="view_list">
								<a href="/m/subpage/subpage.asp?page_index=m_board/board_pass.asp&b_type=edit&idx=<%=idx%>&b_category=<%=b_category%>&gotopage=<%=gotopage%>&b_type=<%=b_type%>">
								<img src = "/m/images/b_edit.gif" alt="수정"/></a>
								<a href="/m/subpage/subpage.asp?page_index=m_board/board_pass.asp&b_type=del&idx=<%=idx%>&b_category=<%=b_category%>&gotopage=<%=gotopage%>&b_type=<%=b_type%>"><img src = "/m/images/b_del.gif" alt="삭제"/></a>

							</div>
				<%
					End If
				%>
							
							<div class="list_top3">
								<div class="substance_h_line1">
									<div class="substance_h_line"></div>
								</div>
								<div class="prev_view">
									<div class="prev_view_text"><font color="#333333"><b>[이전글]</b></font> <%=prev_subject%></div>
								</div>
								<div class="substance_h_line1">
									<div class="substance_h_line"></div>
								</div>
								<div class="next_view">
									<div class="next_view_text"><font color="#CC0000"><b>[다음글]</b></font> <%=next_subject%></div>
								</div>
								<div class="substance_h_line1">
									<div class="substance_h_line"></div>
								</div>
							</div>
							<div class="view_list">
								<%=prev_link%>
								<img src = "/m/images/btnP_prev.png" alt="이전"/></a>
								<a href="/m/subpage/news.asp?b_category=<%=b_category%>&gotopage=<%=gotopage%>&b_type=<%=b_type%>"><img src = "/m/images/b_list.gif" alt="목록보기"/></a>
								<%=next_link%>
								<img src = "/m/images/btnP_next.png" alt="다음"/></a>
							</div>
						</div>
						<div class="hspan"></div>
					
					</div>

			</div>
			<!-- m_board 종료 -->

		
		</div><!-- sub_contents -->
	</div><!-- sub_con -->

<?php include("/m/page_foot.php"); ?>
