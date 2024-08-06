export const createListItems = list =>
	list.map(item => `<li>${item}</li>`).join('');

export const createNavLinks = links =>
	links
		.map(
			link =>
				`<li class="nav-item"><a class="nav-link color-custom fs-5 header-nav" href='#${link.id}'>${link.tab}</a></li>`
		)
		.join('');

export const createSection = (id, title, content, additionalClasses = '') => `
  <section id="${id}" class="${id} mb-4 p-4 ${additionalClasses}">
    <h2 class="display-4 fw-bold lh-2 mb-3 color-custom">${title}</h2>
    ${content}
  </section>
`;

export const createImage = (src, alt, width, height) => `
  <img src="${src}" class="d-block mx-lg-auto img-fluid" alt="${alt}" width="${width}" height="${height}" loading="lazy">
`;

export const createModalSections = contents =>
	contents
		.map(
			content =>
				`<h3 class="mt-4">${content.header}: </h3> ${
					Array.isArray(content.body)
						? content.body
								.map(paragraph => `<p>${paragraph}</p><hr>`)
								.join('')
						: `<p>${content.body}</p><hr>`
				}`
		)
		.join('');
