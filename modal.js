import { createModalSections } from './utils.js';

export const generateModalHTML = content => {
	// Check for undefined properties and set default values if necessar

	const modalContent = content?.modal || {};
	console.log(content);
	const modalHeader1 =
		modalContent.header1 ||
		'Výpis subjektu Asociace ProUA Jižní Čechy, z.s.';
	const modalHeader2 = modalContent.header2 || 'Výpis';
	const modalHeader3 =
		modalContent.header3 ||
		'ze spolkového rejstříku, vedeného Krajským soudem v Českých Budějovicích';

	// TODO decide which content to use.

	const bodySections = [
		content.foundationDate,
		content.legalAddress,
		content.orgId,
		content.legal,
		content.purpose,
		content.subject,
		content.highAuth,
		content.statBody,
		content.chairman
	];

	return `
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable fs-4">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="legalModalLabel">${modalHeader1}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container my-4 p-4 border rounded bg-light">
                    <h2 class="mt-4">${modalHeader2}</h2>
                    <p>${modalHeader3}<br>
                        <strong>oddíl</strong>, vložka L 9426
                    </p>
                    <hr>
                    <p><strong>Název:</strong> Asociace ProUA Jižní Čechy, z.s.</p>
                    <p><strong>Sídlo:</strong> [Vaše Adresa], České Budějovice 2, 370 11 České Budějovice</p>
                    <hr>
                    ${createModalSections(bodySections)}
                    <p><strong>Počet členů:</strong> 1</p>
                    <p><strong>Způsob jednání:</strong> Předseda zastupuje Asociaci samostatně.</p>
                    <hr>
                    <p><strong>Kontrolní orgán:</strong></p>
                    <p><strong>Počet členů:</strong> 3</p>
                    <hr>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>    `;
};
