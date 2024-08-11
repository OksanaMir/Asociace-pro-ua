const aboutSection = createSection(
	'about',
	content.about,
	`
        <div class="row flex-lg-row align-items-center g-5 py-5">
            <div class="col-12 col-sm-6 col-lg-8">
                ${createImage(
					'images/spolek-with-flag.jpeg',
					'Members with the flag',
					700,
					500
				)}
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                ${content.details
					.map(
						detail => `
                    <p><strong>${detail.header}:</strong> ${detail.body}</p>
                `
					)
					.join('')}
            </div>
        </div>
    `,
	'mx-0'
);

const generateMottoSection = content => {
	return `
        <section class="${classes.mottoSection}">
            <!-- Section content -->
        </section>
    `;
};

const generateAboutSection = content => {
	return createSection(
		'about',
		content.about,
		/* Section HTML */
		classes.common
	);
};

return `
    ${generateMottoSection(content)}
    ${generateAboutSection(content)}
    ${generateMissionSection(content)}
    ${generateActivitiesSection(content)}
    ${generateContactSection(content)}
    ${generateLegalSection(content)}
`;
