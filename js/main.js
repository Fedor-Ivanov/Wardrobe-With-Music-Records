
$(document).ready(function () {

	$('[href^="#anchor"]').click(function () {
		event.preventDefault();
		var id = $(this).attr('href');
		var docTop = mediaQuery('max', 767) ? $(id).offset().top - $('.navigation').outerHeight() : $(id).offset().top;
		$('body, html').animate({ scrollTop: docTop }, 800);
	});

	$('.discography__list').slick({
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

	$(window).on('load', function () {
		$('body').css('overflow', 'visible');
		$('.loader').find('.sk-wandering-cubes').fadeOut(1000, function () {
			$('body').css('overflow', 'hidden');
		});
		$('.loader').delay(550).fadeOut('slow');
	});

	$('.discography__album-cover-img').mouseover(function () {
		$('.discography__album-cover-icon').hide();
	});
	$('.discography__album-cover-img').mouseout(function () {
		$('.discography__album-cover-icon').show();
	});

});

var cover = document.querySelectorAll('.discography__album-cover-img');

var tempSong;

cover.forEach(function (elem) {
	elem.addEventListener('mouseover', function () {
		var songs = this.parentNode.querySelectorAll('.album'),
			temp = songs[randomSong(0, songs.length)];
		temp.play();
		temp.onended = function () {
			temp = songs[randomSong(0, songs.length)];
			temp.play();
			tempSong = temp;
		};
		tempSong = temp;
	});

	elem.addEventListener('mouseout', function () {
		tempSong.pause();
		tempSong.currentTime = 0.0;
	});
});

var blockWords = document.querySelector('.words');

var words = ['..give me a bullet and i`ll change your life..', '..hello darkness my old friend..', '..and she buy a stairway to heaven..', '..with birds i share..', '..love`s a funeral of hearts..', '..into the abyss will i run..', '..decadence isn`t easy, is it?..'];

blockWords.innerText = words[randomSong(1, words.length - 1)];

function randomSong(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mediaQuery(direction, width) {
	return window.matchMedia('(max-width: 800px)').matches;
}