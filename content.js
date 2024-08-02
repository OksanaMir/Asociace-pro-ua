export const generateMainContentHTML = content => {
	if (!content) {
		console.error('Content is not found:', content);
		return;
	}

	return `
	<section class="mb-4 mx-0 ">
        <div class="motto bg-white d-xl-flex ">
            <div class="d-lg-flex flex-column p-4 fst-italic w-50">
                <h2 class="display-3 fw-bold lh-2 text-left ms-xl-5">Pro UA</h2>
                <h3 id="site-motto" class=" display-5 lh-2 text-right p-0 me-xl-5 ">${
					content.motto
				}</h3>
            </div>
        </div>
    </section>
	<section class="about mb-4 p-4">
		<h2 class="display-4 fw-bold lh-2 mb-3">${content.about}</h2>
		<div class="row flex-lg-row align-items-center g-5 py-5">
			<div class="col-10 col-sm-8 col-lg-6 ">
				<img src="images/spolek-with-flag.jpeg" class="d-block mx-lg-auto img-fluid" alt="Members with the flag" width="700"
					height="500" loading="lazy">
			</div>
        	<div class="col-lg-6 col-xl-4" >
				<p><strong>${content.name.header}</strong> ${content.name.body}</p>
				<p><strong>${content.legal.header}</strong> ${content.legal.body}</p>
				<p><strong>${content.founded.header}</strong> ${content.founded.body}</p>
				<p><strong>${content.orgId.header}</strong> ${content.orgId.body}</p>
				<p><strong>${content.legalAddress.header}</strong> ${
		content.legalAddress.body
	}</p>
    	</div>
	</section>
	
	<section class="mission mb-4 p-4">
		<h2 class="display-4 fw-bold lh-2 mb-3 ">${content.subjectBrief.header}</h2>
		<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
			<div class="col-10 col-sm-8 col-lg-6">
				<img src="images/before-speech.jpeg" class="d-block mx-lg-auto img-fluid" alt="Before the Speech" width="500"
					height="700" loading="lazy">
			</div>
        	<div class="col-lg-6">
            	
            	<ul class="list-unstyled my-4 ">
					<li >
						<ul>
							${content.subjectBrief.list.map(item => `<li class="">${item}</li>`).join('')}
						</ul>
					</li>
				</ul>
    	</div>
	</section>
	<section class="activities mb-4">
		<h2 class="display-3 mb-2 text-center">${content.activities.header}</h2>
		<ul class="list-unstyled mx-auto p-2">
			<li>
				<ul>
					${content.activities.list.map(item => `<li class="">${item}</li>`).join('')}
				</ul>
			</li>
		</ul>
		<div class="container carouselOuter px-0 my-4">
			<div id="carouselControls" class="photobox carousel slide" data-bs-touch="false">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="images/praying.jpeg" class="d-block  img-fluid loading=" lazy" alt="meeting">
					</div>
					<div class="carousel-item">
						<img src="images/with-military.jpeg" class="d-block  img-fluid loading=" lazy"
							alt="conference1">
					</div>
					<div class="carousel-item">
						<img src="images/heart-and-candles.jpeg" class="d-block img-fluid loading=" lazy"
							alt="flag and candles">
					</div>
					<div class="carousel-item">
						<img src="images/conference3.jpeg" class="d-block  img-fluid loading=" lazy"
							alt="conference3">
					</div>
					<div class="carousel-item">
						<img src="images/traditions.jpeg" class="d-block  img-fluid loading=" lazy"
							alt="traditions">
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselControls"
					data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselControls"
					data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	</section>
	<section class="contact mb-4 p-4">
		<h2 class="display-3 mb-2">${content.contacts.header}</h2>
		<p><strong>${content.contacts.address.header}:</strong> ${
		content.contacts.address.body
	}
        </p>
		<p><strong>${content.contacts.email.header}</strong> ${
		content.contacts.email.body
	}
        </p>
		<p><strong>${content.contacts.phone.header}</strong> ${
		content.contacts.phone.body
	}
        </p>
		<p><strong>${content.contacts.social}</strong></p>
		<ul class="list-unstyled" mx-auto p-2">
			<li>
				<ul>
					<li><a class="link-secondary link-underline-light" href="[Facebook Link]">Facebook</a></li>
					<li><a class="link-secondary link-underline-light" href="[Twitter Link]">Twitter</a></li>
					<li><a class="link-secondary link-underline-light" href="[LinkedIn Link]">LinkedIn</a></li>
				</ul>
			</li>
		</ul>
	</section>
	<section class="legal mb-4 p-4">
		<h2 class="display-4 display-3 mb2">${content.legalInfo.header}</h2>
		<p>${
			content.legalInfo.body
		} <a class="link-info link-underline-light" href="http://www.justice.cz" target="_blank">http://www.justice.cz</a>.</p>
	</section>
	<!-- Other sections as needed -->
	`;
};
