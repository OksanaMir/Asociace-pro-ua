export const createListItems = list =>
	list.map(item => `<li>${item}</li>`).join('');

export const createMultiPItems = text =>
	text.map(text => `<p>${text}</p>`).join('');

export const createSection = (id, title, content, additionalClasses = '') => `
  <section id="${id}" class="${id} mb-4 p-4 ${additionalClasses}">
    <h2 class="display-4 fw-bold lh-2 mb-3 color-custom">${title}</h2>
    ${content}
  </section>
`;
export const createImage = (src, alt, width, height) => `
  <img src="${src}" class="d-block mx-lg-auto img-fluid" alt="${alt}" width="${width}" height="${height}" loading="lazy">
`;
