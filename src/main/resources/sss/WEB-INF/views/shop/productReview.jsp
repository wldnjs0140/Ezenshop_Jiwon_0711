<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/style/style_review.css" />
</head>
<body>

	<div id="reViewArea">
		<div class="topReview dFlex">
		
			<c:set var="reFocusChk" value="${regReview}"/>
			<input type="hidden" id="reFocusChk" value="${reFocusChk}">
			
			<div id="topLeft">
				<span id="review_Sub">REVIEW</span>
				<input type="hidden" id="hidgoodsCode" value="${goodsCode}">
				<input type="hidden" id="hidnum" value="${num}">
			</div>
			
			<div id="topRight" class="dFlex">
				<c:if test="${sessionScope.unameSession != null}">
			 		<span class="goReview">상품 리뷰 작성하기</span> 
				</c:if>
				<span>|</span> 
				<span class="goAllReview">전체 상품 리뷰 보기</span>
			</div>
			
		</div>

		<div id="picListArea">
			<hr>
			<span>사진</span>
			<div id="reivewImgArea">
				<img src="" alt="사진1"> <img src="" alt="사진2"> 
				<img src="" alt="사진3"> <img src="" alt="사진4">
			</div>

		</div>
		
		<div id="reViews">
			<hr>
				<div class="review_Filter">
					<button>추천순</button>
					<button>최신순</button>
					<button>별점순</button>
				</div>
			<hr>
			
			
			
			<div id="review_Tbl_Area">
				
				<c:forEach var="a" items="${reviewList}">
					<div class="reviewTblList dFlex">
					
					<div class="reviewLeft">
						<div class="review_Star_List">
							<c:set var="star" value="${a.reStar}"/>	
							<fieldset>
								<span class="text-bold"></span>
								<span>${star }</span>
								<c:forEach var="chkStar" begin="1" end="${5-star}" step="1">
									<label id="notFilled">★</label>
								</c:forEach>
								<c:forEach var="chkStar" begin="1" end="${star}" step="1">
									<label id="filled">★</label>
								</c:forEach>
								
							</fieldset>
						</div>
						
						<img src="" alt="리뷰테이블사진" />
						<span> ${a.reContent}</span>
						
					</div>
					
					<div class="reviewRight">
						<span>${a.uname}님의 리뷰입니다</span>
						<span>키 : ${a.height}</span>
						<span>몸무게 : ${a.weight}</span>
						<span>색상 : ${a.goodsColor}</span>
						<span>사이즈 :  ${a.goodsSize}</span>
					</div>
					
					</div>
				</c:forEach>
				
			</div>
			<!-- div#review_Tbl_Area -->
			
		</div>
		<!-- div#reViews -->
	</div>

	<script src="/script/jquery-3.6.4.min.js"></script>
	<script src="/script/script_Review.js"></script>

</body>
</html>