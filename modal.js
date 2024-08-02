export const generateModalHTML = content => {
	// Check for undefined properties and set default values if necessary
	const modalContent = content?.modal || {};
	const modalHeader1 =
		modalContent.header1 ||
		'Výpis subjektu Asociace ProUA Jižní Čechy, z.s.';
	const modalHeader2 = modalContent.header2 || 'Výpis';
	const modalHeader3 =
		modalContent.header3 ||
		'ze spolkového rejstříku, vedeného Krajským soudem v Českých Budějovicích';

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
                    <p><strong>Datum vzniku a zápisu:</strong> 2. července 2024<br>
                        <strong>Spisová značka:</strong> L 9426 vedená u Krajského soudu v Českých Budějovicích
                    </p>
                    <hr>
                    <p><strong>Název:</strong> Asociace ProUA Jižní Čechy, z.s.</p>
                    <p><strong>Sídlo:</strong> Otavská 1064/10, České Budějovice 2, 370 11 České Budějovice</p>
                    <hr>
                    <p><strong>Identifikační číslo:</strong> 216 57 394</p>
                    <hr>
                    <p><strong>Právní forma:</strong> Spolek</p>
                    <hr>
                    <h3 class="mt-4">Účel:</h3>
                    <p>Asociace je samosprávným, dobrovolným spolkem občanů a právnických osob. Účelem Asociace je
                        zejména koordinace aktivit ukrajinských organizací v Jihočeském kraji, jejich zastřešení
                        vůči správním a samosprávním orgánům, poskytování právního a účetního servisu svým členům,
                        rozšíření možností svých členů k podpoře ukrajinské diaspory a lidí přicházejících z
                        Ukrajiny, pomoc členům s realizací integračních aktivit do české společnosti. Účelem
                        Asociace je umožnit svým členům rozšířit své aktivity k co největšímu množství příjemců.</p>
                    <p>Asociace zároveň vytváří podmínky a koordinuje aktivity svých členů např. zasílání
                        humanitární pomoci na Ukrajinu, podpora finančních sbírek pro válečné uprchlíky a vybavení
                        na frontu.</p>
                    <hr>
                    <p>Asociace se hlásí k podpoře a rozvoji občanské společnosti, podpoře demokratických hodnot a
                        šíření respektu v české společnosti.</p>
                    <hr>
                    <p>Asociace spolupracuje s dalšími subjekty a organizacemi v Evropě na naplňování svého účelu.
                    </p>
                    <hr>
                    <h3 class="mt-4">Předmět činnosti:</h3>
                    <p>Koordinace aktivit ukrajinských iniciativ v Jihočeském kraji a vytvoření platformy pro jejich
                        sdružování, podpora synergie aktivit napříč Jihočeským krajem</p>
                    <p>Podpora spolupráce členských organizací na společných akcích, sdílení prostor, odborných
                        pracovníků a prostředků, zprostředkování výměny zkušeností mezi členy</p>
                    <hr>
                    <p>Zastřešení členů Asociace, zejména v právní a ekonomické oblasti, poskytování relevantních
                        informací v měnícím se prostředí a právní úpravě česko-ukrajinských vztahů</p>
                    <p>Asistence při společné účasti v grantových výzvách</p>
                    <hr>
                    <p>Vzdělávání: přednáškové a vzdělávací akce, kurzy a konference, zejména související s
                        integrací do české společnosti, edukací o ukrajinské historii a tradicích, výchovou a
                        osobnostním rozvojem lidí a zvyšováním jejich zaměstnatelnosti; příprava a další vzdělávání
                        dobrovolníků a dalších osob</p>
                    <hr>
                    <p>Spolupráce s obdobnými organizacemi v České republice i Evropě</p>
                    <hr>
                    <p>Rozvojová a humanitární pomoc: rozvojová spolupráce, rozvojové vzdělávání; humanitární pomoc
                        zaměřená především na místa a oblasti postižené válečným konfliktem na Ukrajině</p>
                    <hr>
                    <p>Rozvoj dobrovolnictví: vyhledávání, výběr a evidence dobrovolníků, jejich příprava,
                        doprovázení v dobrovolné službě a nabídka navazujících aktivit; podpora rozvoje
                        dobrovolnictví u dalších organizací</p>
                    <hr>
                    <p>Mezinárodní aktivity: získávání a sdílení zkušeností, koordinace a účast na společných akcích
                        na mezinárodní úrovni</p>
                    <hr>
                    <p>Ostatní: zájmové aktivity; jednorázové, prázdninové a víkendové akce; spolupráce s
                        organizacemi a institucemi v ČR i v zahraničí tak, aby byl naplněn účel Asociace; publikační
                        činnost; tvorba audiovizuálních děl; podílení se na vytváření státní politiky ve výše
                        uvedených oblastech</p>
                    <p><strong>Název nejvyššího orgánu:</strong> Valné shromáždění</p>
                    <hr>
                    <p><strong>Statutární orgán - Předseda:</strong></p>
                    <p>Předseda: Mgr. VALERIYA ZABELINA, Ph.D.<br>
                        [ adresa], České Budějovice 2, 370 11 České Budějovice<br>
                        Den vzniku funkce: [datum]</p>
                    <p class="text-muted">vymazáno 11. července 2024</p>
                    <p>Předseda: Mgr. VALERIJA JURIJIVNA ZABELINA, Ph.D.<br>
                        [adresa], České Budějovice 2, 370 11 České Budějovice<br>
                        Den vzniku funkce: [datum]</p>
                    <hr>
                    <p><strong>Počet členů:</strong> 1</p>
                    <p><strong>Způsob jednání:</strong> Předseda zastupuje Asociaci samostatně.</p>
                    <hr>
                    <p><strong>Kontrolní orgán:</strong></p>
                    <p><strong>Počet členů:</strong> ?</p>
                    <hr>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>    `;
};
