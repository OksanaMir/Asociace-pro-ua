export const generateContent = (lang, data) => {
	let content = '';
	if (lang === 'EN') {
		content = data.en;
	} else if (lang === 'UK') {
		content = data.uk;
	} else if (lang === 'CS') {
		content = data.cs;
	}

	console.log('Content for', lang, content);

	if (!content || !content.name || !content.name.body) {
		console.error('Invalid content structure:', content);
		return;
	}

	document.getElementById('site-title').innerText = content.name.body;
	document.getElementById('site-motto').innerText = content.motto;
	document.getElementById(
		'footer-text'
	).innerText = `\u00A9 2024 Asociace ProUA Jižní Čechy. ${content.rights}`;
	let mainElm = document.getElementById('main-content');

	mainElm.innerHTML = `
	<section class="about mb-4 overflow-auto">
		<h2>${content.about}</h2>
         <img src="images/spolek-with-flag.jpeg" alt="Members of spolek" class="float-lg-right w-50 mx-1 p-4">
		<p><strong>${content.name.header}</strong> ${content.name.body}</p>
		<p><strong>${content.legal.header}</strong> ${content.legal.body}</p>
		<p><strong>${content.founded.header}</strong> ${content.founded.body}</p>
		<p><strong>${content.orgId.header}</strong> ${content.orgId.body}</p>
		<p><strong>${content.legalAddress.header}</strong> ${
		content.legalAddress.body
	}</p>
	</section>
	<section class="mission mb-4 overflow-auto">
		<h2>${content.subjectBrief.header}</h2>
         <img src="images/before-speech.jpeg" alt="Before the Speech" class="float-lg-left w-50 mx-1 p-4">
		<ul mx-auto p-4>
			${content.subjectBrief.list.map(item => `<li>${item}</li>`).join('')}
		</ul>
	</section>
	<section class="activities mb-4">
		<h2>${content.activities.header}</h2>
		<ul mx-auto p-2>
			${content.activities.list.map(item => `<li>${item}</li>`).join('')}
		</ul>
        <div class="container carouselOuter">
            <div id="carouselExampleControlsNoTouching" class="photobox carousel slide" data-bs-touch="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/praying.jpeg" class="d-block w-100 img-fluid" alt="meeting">
                    </div>
                    <div class="carousel-item">
                        <img src="images/with-military.jpeg" class="d-block w-100 img-fluid" alt="conference1">
                    </div>
                    <div class="carousel-item">
                        <img src="images/heart-and-candles.jpeg" class="d-block w-100 img-fluid" alt="flag and candles">
                    </div>
                    <div class="carousel-item">
                        <img src="images/conference3.jpeg" class="d-block w-100 img-fluid" alt="conference3">
                    </div>
                     <div class="carousel-item">
                        <img src="images/traditions.jpeg" class="d-block w-100 img-fluid" alt="traditions">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
	</section>
	<section class="contact mb-4">
		<h2>${content.contacts.header}</h2>
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
		<ul mx-auto p-2>
			<li><a href="[Facebook Link]">Facebook</a></li>
			<li><a href="[Twitter Link]">Twitter</a></li>
			<li><a href="[LinkedIn Link]">LinkedIn</a></li>
		</ul>
	</section>
	<section class="legal mb-4">
		<h2>${content.legalInfo.header}</h2>
		<p>${
			content.legalInfo.body
		} <a href="http://www.justice.cz" target="_blank">http://www.justice.cz</a>.</p>
	</section>
	<!-- Other sections as needed -->
	`;
};
