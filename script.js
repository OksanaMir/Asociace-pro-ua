import { content } from './texts.js';
import { generateModal } from './modal.js';
import { generateContent } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
	const texts = content;
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
		switch (lang) {
			case 'en':
				langMode = 'EN';
				break;
			case 'uk':
				langMode = 'UK';
				break;
			default:
				langMode = 'CS';
				break;
		}
		langBtn.textContent = langMode;
		generateContent(langMode, texts);
		generateModal(langMode, texts);

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
			?.getAttribute('data-lang') || 'cs';
	loadContent(initialLang);

	console.log(`Current screen type: ${getScreenType()}`);
});
