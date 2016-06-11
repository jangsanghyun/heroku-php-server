
<?php include("/m/page_top.php"); ?>

<%
	b_type = Request("b_type")
	GotoPage = Request("GotoPage")
	if GotoPage = "" then GotoPage = 1
	pagesize = 6

	search_category		= Request("search_category")
	searchString		= Request("searchString")

	b_category = Request("b_category")

	If b_category = "" Then b_category = 0

	'response.write b_category

	b_code			= "board_notice"


	where_qry = " and b_category = '"&b_category&"' "

	If searchString <> "" Then
	
		if Instr(search_category,"B_NAME") > 0 then 
			name_qry = " B_NAME Like '%" & searchstring & "%' "
		end if
		
		if Instr(search_category,"B_SUBJECT") > 0 then 
			subject_qry = "  B_SUBJECT Like '%" & searchstring & "%' "
		end if
		
		if Instr(search_category,"B_CONTENT") > 0 then 
			content_qry =  "  B_CONTENT Like '%" & searchstring & "%' "
		end If
		
		If Instr(search_category,"b_total") > 0 then 
			name_qry = " B_NAME Like '%" & searchstring & "%' "
			subject_qry = "  B_SUBJECT Like '%" & searchstring & "%' "
			content_qry =  "  B_CONTENT Like '%" & searchstring & "%' "
		end If
		
		if name_qry <> "" and subject_qry <> "" then 
		  qry_opt1 = "or"
		end if
		
		if subject_qry <> "" and  content_qry <> "" then 
		  qry_opt2 = "or"
		end if
		
		where_qry = where_qry& " and " & name_qry & qry_opt1 & subject_qry & qry_opt2 & content_qry	
	end if


	SQL = "SELECT count(IDX) as recCount FROM "&b_code&" where 1=1 "&where_qry
	SET Rs = DBCON.EXECUTE(SQL)
	recordCount = Rs(0)
	Rs.close : Set Rs = nothing

	pagecount = int((recordCount-1)/pagesize) +1

	SQL = "SELECT TOP " & pagesize & " * FROM "&b_code&" "
	SQL = SQL & " WHERE  1=1 "&where_qry&" AND IDX not in "
	SQL = SQL & "(SELECT TOP " & ((GotoPage - 1) * pagesize) & " IDX FROM "&b_code&" "
	SQL = SQL & " where 1=1 "&where_qry&" order by B_REF desc,B_STEP asc) order by B_REF desc,B_STEP asc"
	'Response.write sql
	Set RS = Dbcon.Execute(SQL)


%>	
<Script>
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
</script>

	<div class="sub_visual_03">
		<div class="sub_top_tt">
			Notice<br />
			<div class="sub_top_tt_line"></div>
			<div class="sub_top_m">
			(주)플라이업엔터테인먼트<br>
			공지사항
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
							<ul class="board_list">
				<%
					i = 0
					DO UNTIL RS.EOF
					loop_num = loop_num + 1
					view_num = int(recordCount)-(int(pagesize)*(int(GotoPage)-1)) - loop_num + 1

					idx				= RS("idx")
					b_subject		= RS("b_subject")
						
					b_id			= RS("b_id")
					b_name			= RS("b_name")
					b_writeday		= RS("b_writeday")

					b_writeday		= Left(b_writeday,10)


					B_LEVEL			= RS("B_LEVEL")
					b_category		= RS("b_category")

					wid = "&nbsp;"
					reimg = ""
					if B_LEVEL > 0 then
					For j = 0 to B_LEVEL
					wid = wid&wid
					Next
					wid = wid&"<img src = '"&site_loc&"/images/re.gif' alt='답변' /> "
					End If

					b_pass_u			= RS("B_SECURITY_U")

					If b_pass_u = "1" Then
						b_close = "<img src = '"&site_loc&"/images/close.gif' alt='비밀글' />"
					else
						b_close = ""
					End If
					
				%>
								<li>
									<a href="notice_view.asp?idx=<%=idx%>&gotopage=<%=gotopage%>&b_category=<%=b_category%>&b_type=<%=b_type%>">
										<%=wid%><%=b_subject%>&nbsp;<%=b_close%><br />						
										<span class="date"><%=b_name%>&nbsp;|&nbsp;<%=b_writeday%></span>						
									</a>						
								</li>
				<%
					i = i + 1
					RS.MOVENEXT
					Loop
					

					If GotoPage = 1 Or Int(pagecount) = 0 Then	
						prev_a = 1
					Else
						prev_a = GotoPage - 1
					End If


					If Int(pagecount) = Int(GotoPage) Or Int(pagecount) = 0 Then
					
						next_b = GotoPage
					Else
						next_b = GotoPage + 1
					End If
					
					
					
				%>
							</ul>

						</div>		
						
					</div><!-- board_wrap -->
				
				
				<div class="page_control">
					<ul>
						<li style="width:50px;"><a href="/m/subpage/notice.asp?gotopage=<%=prev_a%>&b_category=<%=b_category%>&search_category=<%=search_category%>&searchString=<%=searchString%>&b_type=<%=b_type%>"><img src="/m/images/arrow_02.jpg" alt="" style="height:35px;"></a></li>
						<li style="width:70px;text-align:center;padding-top:5px;font-size:15px;font-weight:bold;"><b><%=GotoPage%></b>/<%=pagecount%>  </li>
						<li style="width:50px;padding-bottom:15px;"><a href="/m/subpage/notice.asp?gotopage=<%=next_b%>&b_category=<%=b_category%>&search_category=<%=search_category%>&searchString=<%=searchString%>&b_type=<%=b_type%>"><img src="/m/images/arrow_01.jpg" alt="" style="height:35px;"></a></li>
					</ul>


				</div><!-- 페이지컨트롤 -->

				<!-- 검색 -->
				<div style="width:100%;float:left;margin-top:10px; padding-top:10px;background:#f3f3f3;border: 1px solid #dddddd;">
					<ul class="pagingv">
						<li>
							<div class="search">
								<div class="s_bg02">
								<!-- 게시판 리스트(검색폼) 시작 -->
								
	
							<FORM NAME="frmSearch" Method="post" ACTION="/m/subpage/notice.asp">
							<input type="hidden" name="b_category" value="<%=b_category%>">
							<input type="hidden" name="b_type" value="<%=b_type%>">
							<input type="hidden" name="sub_type" value="<%=sub_type%>">
								<span class="s_label">								
								<select name="search_category" id="search_category" style="float:left; border: 1px solid #cccccc;height:20px;">
									<option value="b_total" selected>전체</option>
									<OPTION VALUE="B_NAME" >작성자명</OPTION>
									<OPTION VALUE="B_SUBJECT" >제목</OPTION>
									<OPTION VALUE="B_CONTENT" >내용</OPTION>
								</select>							
								<input type="text" name="searchString" id="searchString" style="height:18px;border: 1px solid #cccccc;"  value="" >					
								<a href="javascript:bbs_search();"><img src="/m/images/b_search.gif" alt="검색" style="float:right;padding:1px 0 0 2px;"/></a>
							</span>
							</form>
							

								<!-- 게시판 리스트(검색폼) 종료 -->
								</div>						
							</div>
						</li>
					</ul>
				</div>

			</div>
			<!-- m_board 종료 -->


		</div><!-- sub_contents -->
	</div><!-- sub_con -->

<?php include("/m/page_foot.php"); ?>
