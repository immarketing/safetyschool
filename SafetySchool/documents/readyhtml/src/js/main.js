/**
 * 
 */

$(document).ready(function() {
	$('#navbar a[href^="#"], a[href^="."]').click(function() { // если в href
														// начинается с # или .,
														// то ловим клик
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута
												// href
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы
										// избежать ошибки
			$('html, body').animate({
				scrollTop : ($(scroll_el).offset().top - $('.navbar').height())
			}, 500); // анимируем скроолинг к элементу scroll_el
		}
		$('#navbar .active').removeClass('active');
		$(this).addClass('active');
		return false; // выключаем стандартное действие
	});
});

$(document).ready(function() {
	$("#navbar li").click(function(evnt) {
		// $(this).slideUp();
		$(this).text('aaa');
		//alert(evnt);
	});
});