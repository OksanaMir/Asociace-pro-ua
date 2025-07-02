import { content } from './texts.js';
import { generateModalHTML } from './modal.js';
import { generateMainContentHTML } from './content.js';
import { createNavLinks } from './utils.js';

// Ensure ?lang=cs is present on first load if no lang is set
const params = new URLSearchParams(window.location.search);
if (!params.has('lang')) {
	params.set('lang', 'cs');
	window.location.search = params.toString();
	// The page will reload with ?lang=cs in the URL
}

document.addEventListener('DOMContentLoaded', () => {
	const getScreenType = () => {
		if (window.innerWidth < 600) return 'mobile';
		if (window.innerWidth < 960) return 'tablet';
		if (window.innerWidth < 1280) return 'laptop';
		return 'desktop';
	};

	const data = content;
	const LANG_EN = 'en';
	const LANG_UK = 'uk';
	const LANG_CS = 'cs';

	const mainElm = document.getElementById('main-content');
	const siteTitleElm = document.getElementById('site-title');
	const headerNavLinksElm = document.querySelector(
		'#navbarContent .navbar-nav'
	);
	const footerTexrElm = document.getElementById('footer-text');
	const legalModalElement = document.getElementById('legalModal');

	// Check if the element exists before trying to modify it
	if (!legalModalElement) {
		console.error('Element with id "legalModal" not found.');
		return;
	}

	const languageSwitcher = document.querySelector(
		'#languageDropdown + .dropdown-menu'
	);
	const langBtn = document.getElementById('languageDropdown');

	let langMode = '';
	// add storing the chosen language logic. If saved lang exists, the page will be in chosen lang.
	const savedLang = localStorage.getItem('lang');
	let currentLang = savedLang || mainElm.dataset.lang || 'cs';

	const loadContent = lang => {
		let content = data[lang];
		if (!content) {
			console.error(`Content for language ${lang} is not available.`);
			return;
		}
		console.log(content);

		switch (lang) {
			case LANG_EN:
				langMode = LANG_EN;
				break;
			case LANG_UK:
				langMode = LANG_UK;
				break;
			default:
				langMode = LANG_CS;
				break;
		}

		langBtn.textContent = langMode;

		siteTitleElm.innerText = content.name.body;

		headerNavLinksElm.innerHTML = createNavLinks(data[langMode].navLinks);

		mainElm.innerHTML = generateMainContentHTML(data[langMode]);

		footerTexrElm.innerText = `\u00A9 2024 Asociace ProUA Jižní Čechy. ${content.rights}`;

		legalModalElement.innerHTML = generateModalHTML(data[langMode]);

		// Clear current active class
		document
			.querySelectorAll('#languageDropdown + .dropdown-menu a')
			.forEach(link => link.classList.remove('active'));

		// Set the active class to the selected language
		document
			.querySelector(
				`#languageDropdown + .dropdown-menu a[data-lang="${lang}"]`
			)
			.classList.add('active');
	};

	languageSwitcher.addEventListener('click', e => {
		e.preventDefault();
		if (e.target.tagName === 'A') {
			const lang = e.target.getAttribute('data-lang');
			localStorage.setItem('lang', lang); // Save user's choice for language
			// In your language switch event handler:
			const params = new URLSearchParams(window.location.search);
			params.set('lang', lang);
			window.history.pushState(
				{},
				'',
				`${window.location.pathname}?${params}`
			);
			loadContent(lang);
		}
	});

	// Initial load
	const initialLang =
		document
			.querySelector('#languageDropdown + .dropdown-menu a.active')
			?.getAttribute('data-lang') ||
		currentLang ||
		LANG_CS; //add storing chosen language logic. If saved lang exists, the page will be in chosen lang.
	loadContent(initialLang);

	console.log(`Current screen type: ${getScreenType()}`);
	const backToTopButton = mainElm.querySelector('#backToTop');
	console.log(backToTopButton);

	// Show button when the header is outside the viewport
	window.addEventListener('scroll', () => {
		console.log(window.scrollY);
		if (window.scrollY > document.querySelector('header').offsetHeight) {
			backToTopButton.classList.remove('d-none');
		} else {
			backToTopButton.classList.add('d-none');
		}
	});

	// Scroll to top behavior
	backToTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});
