document.addEventListener('DOMContentLoaded', function() {
	let catalogSlider;

	const initSliders = () => {
		const catalogSliders = document.querySelectorAll('.js-catalog-slider');
		const catalogPrev = document.querySelectorAll('.catalog__nav .swiper-prev-btn');
		const catalogNext = document.querySelectorAll('.catalog__nav .swiper-next-btn');
		const catalogPagination = document.querySelectorAll('.catalog__pagination');

		catalogSliders.forEach((slider, index) => {
			catalogSlider = new Swiper(slider, {
				slidesPerView: 1.29,
				spaceBetween: 24,
				initialSlide: 0,
				//centeredSlidesBounds: true,
				navigation: {
					nextEl: catalogNext[index],
					prevEl: catalogPrev[index]
				},
				pagination: {
					el: catalogPagination[index],
					clickable: true
				},
				breakpoints: {
					568: {
						slidesPerView: 3.9,
						centeredSlides: true,
						initialSlide: slider.querySelectorAll('.catalog-card').length > 6 ?  3 : 0,
						slidesPerGroup: 3
					}
				},
			});
		});
	};

	initSliders();
});