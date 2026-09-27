/* Custom interactive additions on top of the base HTML5 UP template. */
(function ($) {
	'use strict';

	$(document).ready(function () {

		/* ---------------------------------------------------------------
		 * Dark / light theme toggle (persisted in localStorage)
		 * ------------------------------------------------------------- */
		var $themeToggle = $('#theme-toggle');
		var THEME_KEY = 'portfolio-theme';

		function applyTheme(theme) {
			if (theme === 'dark') {
				document.documentElement.setAttribute('data-theme', 'dark');
				$themeToggle.removeClass('fa-moon').addClass('fa-sun');
			} else {
				document.documentElement.removeAttribute('data-theme');
				$themeToggle.removeClass('fa-sun').addClass('fa-moon');
			}
		}

		var savedTheme = null;
		try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}

		if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			savedTheme = 'dark';
		}
		applyTheme(savedTheme);

		$themeToggle.on('click', function (e) {
			e.preventDefault();
			var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
		});

		/* ---------------------------------------------------------------
		 * Typewriter tagline
		 * ------------------------------------------------------------- */
		var $tagline = $('#tagline');
		if ($tagline.length) {
			var phrases = [
				'Computer Science Student',
				'Aspiring Backend Developer',
				'Data & Full-Stack Enthusiast'
			];
			var phraseIndex = 0, charIndex = 0, deleting = false;

			function typeTick() {
				var current = phrases[phraseIndex];

				if (!deleting) {
					charIndex++;
					$tagline.text(current.slice(0, charIndex));
					if (charIndex === current.length) {
						deleting = true;
						setTimeout(typeTick, 1400);
						return;
					}
				} else {
					charIndex--;
					$tagline.text(current.slice(0, charIndex));
					if (charIndex === 0) {
						deleting = false;
						phraseIndex = (phraseIndex + 1) % phrases.length;
					}
				}

				setTimeout(typeTick, deleting ? 35 : 65);
			}

			setTimeout(typeTick, 500);
		}

		/* ---------------------------------------------------------------
		 * Scroll-to-top button visibility
		 * ------------------------------------------------------------- */
		var $scrollTop = $('#scrollTop');
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 400) {
				$scrollTop.addClass('visible');
			} else {
				$scrollTop.removeClass('visible');
			}
		});

		/* ---------------------------------------------------------------
		 * Contact form -> mailto (no backend required)
		 * ------------------------------------------------------------- */
		var $contactForm = $('#contact-form');
		if ($contactForm.length) {
			$contactForm.on('submit', function (e) {
				e.preventDefault();

				var name = $('#name').val().trim();
				var email = $('#email').val().trim();
				var subject = $('#subject').val().trim() || 'Portfolio contact from ' + name;
				var message = $('#message').val().trim();

				var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;

				var mailto = 'mailto:yonatanawlachew1@gmail.com'
					+ '?subject=' + encodeURIComponent(subject)
					+ '&body=' + encodeURIComponent(body);

				window.location.href = mailto;
			});
		}

	});

})(jQuery);
