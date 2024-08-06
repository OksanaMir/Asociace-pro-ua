import { createListItems, createSection, createImage } from './utils.js';

export const generateMainContentHTML = content => {
	if (!content) {
		console.error('Content is not found:', content);
		return;
	}
	const mottoSection = `
    <section class="mx-0 bg-shadow-lg rounded mb-5">
    	<div class="motto bg-white d-xl-flex position-relative">
			<div class="d-lg-flex flex-column p-4 fst-italic w-50 pangolin-regular">
				<h2 class="display-3 fw-bold lh-2 text-left ms-xl-5">Pro UA</h2>
				<h3 id="site-motto" class="display-5 lh-2 text-right p-0 me-xl-5">${content.motto}</h3>
        	</div>
		  	<p class='slideLine text-white text-center mb-0 mb-0 position-absolute bottom-0'>
			<span class="anouncement bottom-0">
				Více fotografií z předchozích akcí a naše oznámení můžete vidět na naší stránce na Instagramu. Klikněte na odkaz: <a href="https://www.instagram.com/zenskyj_klub?igsh=amp6Z3pnenJybjNo&utm_source=qr"
                class="text-white mx-2"><i class="fab fa-instagram"></i></a>
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
				<div class="col-12 col-sm-6 col-lg-8 ">
				${createImage(
					'images/spolek-with-flag.jpeg',
					'Members with the flag',
					700,
					500
				)}
				</div>
				<div class="col-12 col-sm-6 col-lg-4">
					${[
						content.name,
						content.legal,
						content.founded,
						content.orgId,
						content.legalAddress
					]
						.map(
							item =>
								`<p>
							<strong>${item.header}: </strong> ${item.body}
						</p>`
						)
						.join('')}
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
				<div class="col-12 col-sm-6 col-lg-8">
			  	${createImage('images/before-speech.jpeg', 'Before the Speech', 500, 700)}
				</div>
				<div class="col-12 col-sm-6 col-lg-4">
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
			<p><strong>${content.contacts.address.header}: </strong> ${
			content.contacts.address.body
		}
			</p>
			<p><strong>${content.contacts.email.header}: </strong> ${
			content.contacts.email.body
		}
			</p>
			<p><strong>${content.contacts.phone.header}: </strong> ${
			content.contacts.phone.body
		}
			</p>
			<p><strong>${content.contacts.social}: </strong></p>
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
								},
								{ socName: 'Twitter', href: '[Twitter Link]' },
								{ socName: 'LinkedIn', href: '[LinkedIn Link]' }
							].map(
								elm =>
									`<a class="link-secondary link-underline-light" href=${elm.href} >${elm.socName}</a>`
							)
						)}
					</ul>
				</li>
			</ul>
		</div>
		`,
		'color-custom mx-0 '
	);

	const legalSection = createSection(
		'legal',
		content.legalInfo.header,
		`<div>
		  <p>${content.legalInfo.body} <a class="link-info link-underline-light" href="https://or.justice.cz/ias/ui/rejstrik-$firma?p%3A%3Asubmit=x&.%2Frejstrik-%24&nazev=Asociace%20ProUA&ico=&forma=spolek&polozek=500&typHledani=CONTAINS&jenPlatne=VSECHNY&utm_source=spolkovyrejstrik.cz&referral=spolkovyrejstrik.cz" target="_blank">http://www.justice.cz</a>.</p>
		  </div>
		`,
		'color-custom mx-0'
	);

	return `
	${mottoSection}${aboutSection}${missionSection}${activitiesSection}${contactSection}${legalSection}
	<!-- Other sections as needed -->
	`;
};
