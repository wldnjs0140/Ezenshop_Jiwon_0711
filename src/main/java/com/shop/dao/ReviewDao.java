package com.shop.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.shop.dto.ReviewDto;
import com.shop.dto.ReviewImgDto;

@Mapper
public interface ReviewDao {

	// 리뷰 전체 리스트 출력
	@Select("select * from review order by num desc")
	public List<ReviewDto> reviewListAll();
	
	// 특정 상품 리뷰 리스트 출력
	@Select("select * from review where goodsCode=#{param1}")
	public List<ReviewDto> reviewList(String goodsCode);
	
	// 리뷰등록
	@Insert("insert into review (goodsCode,goodsName,reStar,uname,weight,height,goodsSize,goodsColor,reContent,ref)"
			+ " values (#{_goodsCode},#{_goodsName} ,#{_reStar}, #{_uname}, #{_weight}, #{_height}, #{_goodsSize}, #{_goodsColor}, #{_reContent}, #{_ref})")
	public void reviewAdd(Map<String, Object> map);
	
	// 리뷰사진등록
	@Insert("insert into reviewImg (goodsCode,uname,filename,oriFilename,filesize,ref) values "
			+ "(#{goodsCode}, #{uname}, #{filename}, #{oriFilename}, #{filesize}, ${ref})")
	public void reviewImgAdd(Map<String, Object> map);
	
	// 리뷰 사진 가져오기
	@Select("select * from reviewImg where goodsCode=#{param1}")
	public List<ReviewImgDto> callImg(String goodsCode);
	
	// 초기 ref 값 설정
	@Select("select max(num) from review")
	public int refIniSet();
}
