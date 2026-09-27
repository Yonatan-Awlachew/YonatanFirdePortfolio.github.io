(function () {
	'use strict';

	// ---- Dark / light theme toggle ----
	var root = document.documentElement;
	var toggle = document.getElementById('theme-toggle');
	var iconMoon = document.getElementById('icon-moon');
	var iconSun = document.getElementById('icon-sun');

	function syncIcon() {
		var isDark = root.classList.contains('dark');
		iconMoon.classList.toggle('hidden', isDark);
		iconSun.classList.toggle('hidden', !isDark);
	}
	syncIcon();

	toggle.addEventListener('click', function () {
		var isDark = root.classList.toggle('dark');
		syncIcon();
		try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
	});

	// ---- Scroll-reveal ----
	var revealEls = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

		revealEls.forEach(function (el) { observer.observe(el); });
	} else {
		revealEls.forEach(function (el) { el.classList.add('is-visible'); });
	}
})();
