document.addEventListener('DOMContentLoaded', function () {
	gsap.registerPlugin(ScrollTrigger);

	/* Phone mask */
	const phoneMask = IMask(
		document.getElementById('phone'), {
			mask: '+[00000000000000000000]'
		});

	/* Lang switcher */
	const lang = document.querySelectorAll('.lang-swither');

	lang.forEach(elem => {
		const first = elem.querySelector('.lang-swither-one');
		const second = elem.querySelector('.lang-swither-two');

		elem.addEventListener('click', () => {
			first.classList.toggle('d-none');
			second.classList.toggle('d-none');
		})
	});

	/* Preloader */
	if (sessionStorage.getItem('preloader') == null) {
		let tlPreloader = new TimelineMax();

		tlPreloader
			.fromTo('.logo-part-3', 0.4, {x: -55}, {x: 0, ease: 'none'})
			.fromTo('.logo-part-2', 0.4, {x: 55}, {x: 0, ease: 'none'}, 0.5)
			.fromTo('.logo-part-1', 0.4, {y: -40}, {y: 0, ease: 'none'}, 1)
			.to('.preloader-logo', 0.7, {y: 0, zoom: 0.43, ease: 'none'}, 1.6)
			.to('.preloader-overlay', 0.1, {
				background: 'rgba(0, 0, 0, 0)', ease: 'none', onComplete: function () {
					this.targets()[0].style.pointerEvents = 'none';
				}
			}, 1.6)
			.to('.hero__bg', 0.7, {autoAlpha: 1, scale: 1, ease: 'none'}, 1.6)
			.to('.hero__title', 0.7, {autoAlpha: 1, scale: 1, ease: 'none'}, 1.6)
			.to('.hero__subtitle', 0.7, {autoAlpha: 1, y: 0, ease: 'none'}, 1.6)
			.to('.header', 0.5, {y: 0, ease: 'none'}, 2.2)
			.to('.hero__scroll', 0.5, {autoAlpha: 1, ease: 'none'}, 2.6);

		setTimeout(() => {
			document.querySelector('html').classList.remove('body-scroll-lock');
		}, 3000);

		sessionStorage.setItem('preloader', 'initialized');
	}

	/* Hover on logo */
	const logo = document.querySelector('.header__logo');
	const logoPart1 = logo.querySelector('.logo-part-1');
	const logoPart2 = logo.querySelector('.logo-part-2');
	const logoPart3 = logo.querySelector('.logo-part-3');

	document.querySelector('.header__logo').addEventListener('mouseenter', () => {
		let tlLogo = new TimelineMax();

		tlLogo
			.to(logoPart1, 0.2, {autoAlpha: 0, x: -4}, 0)
			.to(logoPart2, 0.2, {autoAlpha: 0, x: -8}, 0)
			.to(logoPart3, 0.2, {autoAlpha: 0, y: -2}, 0)
			.to(logoPart1, 0.2, {autoAlpha: 1, x: -1}, 0.2)
			.to(logoPart2, 0.2, {autoAlpha: 1, x: -11}, 0.3)
			.to(logoPart3, 0.2, {autoAlpha: 1, y: 4}, 0.4)
	});

	document.querySelector('.header__logo').addEventListener('mouseleave', () => {
		let tlLogo2 = new TimelineMax();

		tlLogo2
			.to(logoPart1, 0.2, {autoAlpha: 0, x: -4}, 0)
			.to(logoPart2, 0.2, {autoAlpha: 0, x: -8}, 0)
			.to(logoPart3, 0.2, {autoAlpha: 0, y: -2}, 0)
			.to(logoPart1, 0.2, {autoAlpha: 1, x: -1}, 0.2)
			.to(logoPart2, 0.2, {autoAlpha: 1, x: -11}, 0.2)
			.to(logoPart3, 0.2, {autoAlpha: 1, y: 4}, 0.2)
	});

	/* Animate hero section */
	let tlHero = gsap.timeline({
		scrollTrigger: {
			trigger: '.hero',
			pin: true,
			start: 'top top',
			end: '+=220%',
			scrub: 0.5,
			invalidateOnRefresh: true,
			toggleActions: 'play none none reverse',
		},
		ease: Linear.easeNone
	});

	tlHero
		.to('.hero__title', 0.7, {scale: 1.5}, 0)
		.to('.hero__subtitle', 0.7, {y: 10}, 0)
		.to('.hero__bg', 0.7, {scale: 1.05}, 0)
		.to('.preloader-logo', 0.7, {y: -60}, 0)
		.to('.hero__title', 1.2, {y: '-100vh', scale: 1.1}, 1.1)
		.to('.hero__subtitle', 1.2, {y: '-100vh'}, 1.1)
		.to('.preloader-logo', 0.4, {y: '-110vh'}, 1.1)
		.to('.hero__bg-overlay', 0.4, {autoAlpha: 1}, 1.1)
		.to('.header__logo', 1.2, {autoAlpha: 1}, 1.1)
		.to('.hero__scroll', 0.4, {autoAlpha: 0, y: '30'}, 1.1)
		.to('.hero__content-2', 0.4, {yPercent: -50, top: '50%'}, 1.1)
		.to('.hero__content-2', 0.4, {yPercent: -50, top: '50%'}, 1.1)
		.to('.hero__bg', 0.4, {scale: 1.7}, 1.1)
		.to('.header', 0.4, {padding: '1.2rem 0', background: 'rgba(0, 0, 0)'}, 2.3)

	/* Anchor scroll */
	document.querySelectorAll('.anchor').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});