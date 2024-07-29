import { content } from './texts.js';
import { generateModal } from './modal.js';
import { generateContent } from './content.js';

const texts = content;
console.log(texts);

document.addEventListener('DOMContentLoaded', () => {
	// const fetchContent = async () => {
	// 	const response = await fetch('texts.json');
	// 	const data = await response.json();
	// 	console.log(data);
	// 	return data;
	// };

	generateContent('cs', texts);
	generateModal('cs', texts);

	const languageSwitcher = document.querySelector(
		'#languageDropdown + .dropdown-menu'
	);
	const langBtn = document.getElementById('languageDropdown');

	// Function to detect screen type
	const getScreenType = () => {
		if (window.innerWidth < 600) return 'mobile';
		if (window.innerWidth < 960) return 'tablet';
		if (window.innerWidth < 1280) return 'laptop';
		return 'desktop';
	};

	// Function to load content based on language
	let langMode = '';
	const loadContent = lang => {
		langBtn.textContent = langMode;
		if (lang === 'en') {
			langMode = 'EN';
			generateContent('en', texts);
			generateModal('en', texts);
		} else if (lang === 'uk') {
			langMode = 'UK';
			generateContent('uk', texts);
			generateModal('uk', texts);
		} else {
			langMode = 'CS';
			generateContent('cs', texts);
			generateModal('cs', texts);
		}
		langBtn.textContent = langMode;

		// Clear current content

		// Load the appropriate content file
		// 	fetch(`content-${lang}.js`)
		// 		.then(response => response.text())
		// 		.then(script => {
		// 			const newScript = document.createElement('script');
		// 			newScript.textContent = script;
		// 			document.body.appendChild(newScript);
		// 			document.body.removeChild(newScript);
		// 		});
	};

	// Language switcher event
	languageSwitcher.addEventListener('click', e => {
		e.preventDefault();
		if (e.target.tagName === 'A') {
			const lang = e.target.getAttribute('data-lang');
			console.log(lang);
			loadContent(lang);
			document
				.querySelectorAll('#languageDropdown + .dropdown-menu a')
				.forEach(link => link.classList.remove('active'));
			e.target.classList.add('active');
		}
	});

	// Initial load
	const initialLang =
		document
			.querySelector('#languageDropdown + .dropdown-menu a.active')
			?.getAttribute('data-lang') || 'cs';
	loadContent(initialLang);

	// Detect screen type
	console.log(`Current screen type: ${getScreenType()}`);
});
