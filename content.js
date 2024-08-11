import { createListItems, createSection, createImage } from './utils.js';

export const generateMainContentHTML = content => {
	if (!content || !content.motto || !content.about || !content.activities) {
		console.error('Content is missing required properties:', content);
		return;
	}
	const mottoSection = `
    <section class="mx-0 bg-shadow-lg rounded mb-5">
    	<div class="motto d-xl-flex position-relative">
			<div class="d-lg-flex flex-column p-4 fst-italic w-50 pangolin-regular">
				<h2 class="display-3 fw-bold lh-2 text-left ms-xl-5">Pro UA</h2>
				<h3 id="site-motto" class="display-5 lh-2 text-right p-0 me-xl-5">${content.motto}</h3>
        	</div>
		  	<p class='slideLine text-white text-center mb-0 mb-0 position-absolute bottom-0 w-100'>
			<span class="anouncement bottom-0">
				${content.slidingText} <i class="fas fa-hand-point-right"></i> <a href="https://www.instagram.com/zenskyj_klub?igsh=amp6Z3pnenJybjNo&utm_source=qr"
                class=" mx-4"><i class="fab fa-instagram"></i></a><a href=""
                class=" mx-4"><i class="fab fa-facebook"></i></a>
				</span>
			</p>
      	</div>
	  
    </section>
  `;

	const aboutSection = createSection(
		'about',
		content.about,
		`
      		<div class="row flex-lg-row align-items-center g-5 py-5">
				<div class="col-12 col-sm-6  ">
				${createImage(
					'images/spolek-with-flag.jpeg',
					'Members with the flag',
					700,
					500
				)}
				</div>
				<div class="col-12 col-sm-6 ">
					${[content.name, content.legal]
						.map(
							item =>
								`<p>
							<strong>${item.header}: </strong> ${item.body}
						</p>`
						)
						.join('')}
								  <p>${
										content.legalNotice
									} <a class="link-info link-underline-light" href="https://or.justice.cz/ias/ui/rejstrik-$firma?p%3A%3Asubmit=x&.%2Frejstrik-%24&nazev=Asociace%20ProUA&ico=&forma=spolek&polozek=500&typHledani=CONTAINS&jenPlatne=VSECHNY&utm_source=spolkovyrejstrik.cz&referral=spolkovyrejstrik.cz" target="_blank">http://www.justice.cz</a>.</p>
					</div>
			</div>
    	`,
		'mx-0 '
	);

	const missionSection = createSection(
		'mission',
		content.subjectBrief.header,
		`
		  	<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div class="col-12 col-sm-6 ">
			  	${createImage('images/before-speech.jpeg', 'Before the Speech', 500, 700)}
				</div>
				<div class="col-12 col-sm-6 ">
			  		<ul class="list-unstyled my-4">
						<li>
				  			<ul>
                				${createListItems(content.subjectBrief.list)}
			              </ul>
						</li>
          			</ul>
        		</div>
      		</div>
    	`,
		'color-custom mx-0 '
	);

	const activitiesSection = createSection(
		'activities',
		content.activities.header,
		`
			<div class="row">
				<div class="col-12">
					<ul class="list-unstyled mx-auto p-2 ">
						<li>
							<ul>
							${createListItems(content.activities.list)}
						</ul>
						</li>
					</ul>
				</div>
		  		<div class="container carouselOuter px-0 my-4">
					<div id="carouselControls" class="photobox carousel slide" data-bs-touch="false">
						<div class="carousel-inner">
							${[
								'images/praying.jpeg',
								'images/with-military.jpeg',
								'images/heart-and-candles.jpeg',
								'images/people-on-square.jpeg',
								'images/conference1.jpeg',
								'images/traditions.jpeg'
							].map(
								src => `<div class="carousel-item${
									src === 'images/praying.jpeg'
										? ' active'
										: ''
								}">
										${createImage(src, 'carousel image', 700, 500)}
									</div>`
							)}
			  			</div>
			  			<button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
          				</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
        			</div>
      			</div>
	  		</div>
    `,
		'color-custom'
	);

	const contactSection = createSection(
		'contact',
		content.contacts.header,
		`<div>
			<p><strong><i class="fas fa-file-contract"></i> ${content.orgId.header}: ${
			content.orgId.body
		}</strong></p>
			<p><strong><i class="fas fa-address-card"></i> ${
				content.contacts.address.header
			}: </strong>datová schránka: <strong>637wwvs</strong>, ${
			content.contacts.address.body
		}
			</p>
			<p><strong><i class="fas fa-envelope"></i> ${
				content.contacts.email.header
			}: </strong> ${content.contacts.email.body}
			</p>
			<p><strong><i class="fas fa-phone"></i> ${
				content.contacts.phone.header
			}: </strong> ${content.contacts.phone.body}
			</p>
			<p><strong><i class="fas fa-paper-plane"></i> ${
				content.contacts.social
			}: </strong></p>
			<ul class="list-unstyled" mx-auto p-2">
				<li>
					<ul>
						${createListItems(
							[
								{
									socName: 'Instagram',
									href: 'https://www.instagram.com/zenskyj_klub?igsh=amp6Z3pnenJybjNo&utm_source=qr'
								},
								{
									socName: 'Facebook',
									href: '[Facebook Link]'
								}
							].map(
								elm =>
									`<a class="link-secondary link-underline-light" href=${
										elm.href
									} >${
										elm.socName
									} <i class="fab fa-${elm.socName.toLowerCase()}"></i></a>`
							)
						)}
					</ul>
				</li>
			</ul>
		</div>
		`,
		'color-custom mx-0 '
	);
	const partnersSection = createSection(
		'partners',
		content.partners.header,
		`<div class="row justify-content-around g-4 py-5">
		  ${content.partners.body
				.map(
					item => `
			  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-stretch">
				<div class="card border-0 shadow-sm text-center w-100">
				  <a href="${item.link}" target="_blank" class="d-flex flex-column align-items-center text-decoration-none color-custom p-3 h-100">
					<img src="${item.img}" class="img-fluid mb-3" alt="${item.name}" style="max-width: 80px; max-height: 80px;">
					<p class="mb-0 fw-bold fs-6 small">${item.name}</p>
				  </a>
				</div>
			  </div>
			`
				)
				.join('')}
		</div>`,
		'color-custom mx-0'
	);

	return `
	${mottoSection}${aboutSection}${missionSection}${activitiesSection}${contactSection}${partnersSection}
	<!-- Other sections as needed -->
	`;
};
