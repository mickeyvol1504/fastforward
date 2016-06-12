$(document).ready(function(){

	// Кнопка "меню" (скрытие/отображение)
	$(".nav-button").click(function(){
		$(this).next().slideToggle("slow");
	});

	// Карусель owl-carousel
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $("#owl-design");
	owl.owlCarousel({
		items : 2,
		itemsDesktop : [1200,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [768,1],
		slideSpeed : 800
	});
	$(".next-button").click(function(){
		owl.trigger('owl.next');
		paginationSpeed : 800;
	});
	$(".prev-button").click(function(){
		owl.trigger('owl.prev');
	});

	//Проверка номера телефона формат: (066) 111-2222
	//Документация http://digitalbush.com/projects/masked-input-plugin/
	$(function($){
		$('#input-phone').mask("(999) 999-9999");
	});

	// Кнопка to-top
	$('.to-top').click(function(){
		$('html, body').animate({scrollTop:$('#top-social').position().top}, 800);
	});

	// К блоку с регистрацией
	$('.to-registration').click(function(){
		$('html, body').animate({scrollTop:$('#registration').position().top}, 800);
	});
	// Навигация
	$('.to-footer').click(function(){
		$('html, body').animate({scrollTop:$('#footer').position().top}, 800);
	});
	$('.to-reviews').click(function(){
		$('html, body').animate({scrollTop:$('#reviews').position().top}, 800);
	});
	$('.to-tour-info').click(function(){
		$('html, body').animate({scrollTop:$('#tour-info').position().top}, 800);
	});
	$('.to-company').click(function(){
		$('html, body').animate({scrollTop:$('#company').position().top}, 800);
	});

	// Отправка AJAX формы для подписки
	$("#subscription").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Поздравляем! Вы подписались на рассылку новостей");
			$("#subscription").trigger("reset");
		});
		return false;
	});

	// Отправка AJAX основной формы
	$("#main-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Поздравляем! Вы подписались на рассылку новостей");
			$("#main-form").trigger("reset");
		});
		return false;
	});


})