/**
 * 
 */
 
 function readImage(input) {
    // 인풋 태그에 파일이 있는 경우
    if(input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            const previewImage = document.getElementById("preview-image")
            previewImage.src = e.target.result
        }
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(input.files[0])
    }
}
// input file에 change 이벤트 부여
const inputImage = document.getElementById("thumb-Image")
inputImage.addEventListener("change", e => {
    readImage(e.target)
});



$(document).ready(function() {
  var removeButtonCreated = false;

  $('#addButton').click(function() {
    var existingInput = $('input.files:last');
    var clonedInput = existingInput.clone();
   	
    var timestamp = Date.now(); // 현재 시간을 밀리초 단위로 가져옵니다.
  	var newName = 'files' + timestamp; // 새로운 이름을 생성합니다.
    clonedInput.attr('name');
    existingInput.parent().append(clonedInput);

    if (!removeButtonCreated) {
      $('#addButton').after('<button id="removeButton">-</button>');
      removeButtonCreated = true;
    }
  });


  $(document).on('click', '#removeButton', function() {
    var additionalInputs = $('input[name^="files"]');
    if (additionalInputs.length > 0) {
      additionalInputs.last().remove();
    }
    if (additionalInputs.length <= 1) {
      $('#removeButton').remove();
      removeButtonCreated = false;
    }
  });
});

/*
$(document).ready(function() {
  var removeButtonCreated = false;
  var inputIndex = 1;

  $('#addButton').click(function() {
    var existingInput = $('input.files').eq(inputIndex - 1);
    var clonedInput = existingInput.clone();
    var newName = 'files' + inputIndex;

    clonedInput.attr('name', newName);
    existingInput.parent().append(clonedInput);

    inputIndex++;

    if (!removeButtonCreated) {
      $('#addButton').after('<button id="removeButton">-</button>');
      removeButtonCreated = true;
    }
  });

  $(document).on('click', '#removeButton', function() {
    var additionalInputs = $('input[name^="files"]');
    if (additionalInputs.length > 1) {
      additionalInputs.last().remove();
      inputIndex--;
    }
    if (additionalInputs.length === 2) {
      $('#removeButton').remove();
      removeButtonCreated = false;
    }
  });
});
*/



$(function(){
	
	$("button.fBtn").click(function(){
		// let goodsCode = $("input.goodsCode").val();
		// console.log(goodsCode);
		// var fileName = $("input[name=files]").prop("files")[0].name;
		 
		 /*var files = $(".adImgs").prop("files");
   		 var fileNames = [];
    
    	for (var i = 0; i < files.length; i++) {
      		fileNames.push(files[i].name);
   		 }
		
		 var files = [];
	    var fileInputs = $('input[name="myFiles"]');
	    for (var i = 0; i < fileInputs.length; i++) {
	      var fileInput = fileInputs[i];
	      for (var j = 0; j < fileInput.files.length; j++) {
	        files.push(fileInput.files[j].name);
	      }
		alert("adImgs : " + fileNames.join(", "));
		*/
		$("form#form1").attr("action","/goodsDetailRegProc");
		$("form#form1").submit();
	});


}); 





 