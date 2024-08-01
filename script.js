import { content } from './texts.js';
import { generateModalHTML } from './modal.js';
import { generateMainContentHTML } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
	const data = content;
	const LANG_EN = 'en';
	const LANG_UK = 'uk';
	const LANG_CS = 'cs';
	// const fetchContent = async () => {
	// 	const response = await fetch('texts.json');
	// 	const data = await response.json();
	// 	console.log(data);
	// 	return data;
	// };

	const languageSwitcher = document.querySelector(
		'#languageDropdown + .dropdown-menu'
	);
	const langBtn = document.getElementById('languageDropdown');

	const getScreenType = () => {
		if (window.innerWidth < 600) return 'mobile';
		if (window.innerWidth < 960) return 'tablet';
		if (window.innerWidth < 1280) return 'laptop';
		return 'desktop';
	};

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
		generateMainContentHTML(data[langMode]);
		generateModalHTML(data[langMode]);

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
			// console.log(lang);
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
