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

}); //$