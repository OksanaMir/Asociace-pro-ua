import { content } from './texts.js';
import { generateModalHTML } from './modal.js';
import { generateMainContentHTML } from './content.js';
import { createNavLinks } from './utils.js';

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
			loadContent(lang);
		}
	});

	// Initial load
	const initialLang =
		document
			.querySelector('#languageDropdown + .dropdown-menu a.active')
			?.getAttribute('data-lang') || LANG_CS;
	loadContent(initialLang);

	console.log(`Current screen type: ${getScreenType()}`);
});
