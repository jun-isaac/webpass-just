$(function () {
	/** 2가지 유형
	 * 1. 현재 하위(this) 뎁스만 보임
	 * 2. 전체 하위 뎁스 표시
	 */
	$("#gnb .depth1 > li").hover(
		// mouseover
		function () {
			$(this)
				.children(".depth2")
				.addClass("on");
		},
		// mouseout
		function () {
			$(this)
				.children(".depth2")
				.removeClass("on");
		}
	);


	//slider
	let num = 0; // 이미지 번호(전역변수)

	function changeSlider(img_num) {
		//공식 = 높이값(세로기준) * 이미지 번호
		let img_height = 300 * img_num;

		$(".slider .sliders").css({
			transform: `translateY(${-img_height}px)`
		})
	}

	// 자동재생
	setInterval(function(){
		num++;
		if(num > 2) {num = 0;}
		console.log(num);
		changeSlider(num);
	}, 3000)

	// 공지사항/갤러리 tab 버튼
	$('.tab_buttons .notice-btn').click(function(){
		// 탭 초기화
		$('.tab_contents').removeClass('on');
		// 표시
		$('#notice').addClass('on');
		// 선택시 색 추가,제거
		$('.notice-btn').addClass('on');
		$('.gallery-btn').removeClass('on');
	});

	$('.tab_buttons .gallery-btn').click(function(){
				// 탭 초기화
				$('.tab_contents').removeClass('on');
				// 표시
		$('#gallery').addClass('on');
		// 선택시 색 추가,제거
		$('.gallery-btn').addClass('on');
		$('.notice-btn').removeClass('on');
	});

	$('.tab_contents .modal-click').click(function () {
		// 모달 창 켜기
		$('.modal').css('display', 'block');
	});

	$('.modal .close-btn').click(function () {
		// 모달 창 끄기
		$('.modal').css('display', 'none');
	});

}); //$