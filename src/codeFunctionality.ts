
const darkLightCodeFunction = (codeId: string, iconId: string): void => {
    const iconElement = document.getElementById(iconId);
    const codeElement = document.getElementById(codeId);

    if (iconElement && codeElement) {
        iconElement.addEventListener('click', () => {
            iconElement.classList.toggle('bx-sun'); // Toggling the icon class between moon and sun
            codeElement.classList.toggle('darkCode-mode'); // Assuming you have a class for dark mode styles
        });
    }
};

const copyFunction = (codeId: string, iconId: string): void => {
    const copyIcon = document.getElementById(iconId);
    const codeElement = document.getElementById(codeId);

    if (copyIcon && codeElement) {
        copyIcon.addEventListener('click', () => {
            const codeText = codeElement.textContent || ''; // Get the code content
            navigator.clipboard.writeText(codeText)
            .then(() => {
                const copiedMessage = copyIcon.closest('div')?.querySelector('.copiedMessage');
                if (copiedMessage) {
                    copiedMessage.classList.remove('d-none');

                    // Hide the message after 1 second
                    setTimeout(() => {
                        copiedMessage.classList.add('d-none');
                    }, 1000);
                }
            })
                .catch(() => {
                    const notCopiedMessage = copyIcon.closest('div')?.querySelector('.notCopiedMessage');
                    if (notCopiedMessage) {
                        notCopiedMessage.classList.remove('d-none');
    
                        // Hide the message after 1 second
                        setTimeout(() => {
                            notCopiedMessage.classList.add('d-none');
                        }, 1000);
                    }
                });
        });
    }
};
// Example usage for your elements
darkLightCodeFunction('SimpleNodeCode', 'lightDarkIcon1');
copyFunction('SimpleNodeCode', 'copyIcon1');

darkLightCodeFunction('SimpleNodeCode2', 'lightDarkIcon2');
copyFunction('SimpleNodeCode2', 'copyIcon2');

darkLightCodeFunction('SimpleNodeCode3', 'lightDarkIcon3');
copyFunction('SimpleNodeCode3', 'copyIcon3');

darkLightCodeFunction('SimpleNodeCode4', 'lightDarkIcon4');
copyFunction('SimpleNodeCode4', 'copyIcon4');

darkLightCodeFunction('SimpleNodeCode5', 'lightDarkIcon5');
copyFunction('SimpleNodeCode5', 'copyIcon5');

darkLightCodeFunction('SimpleNodeCode6', 'lightDarkIcon6');
copyFunction('SimpleNodeCode6', 'copyIcon6');

darkLightCodeFunction('SimpleNodeCode7', 'lightDarkIcon7');
copyFunction('SimpleNodeCode7', 'copyIcon7');

darkLightCodeFunction('SimpleNodeCode8', 'lightDarkIcon8');
copyFunction('SimpleNodeCode8', 'copyIcon8');

darkLightCodeFunction('SimpleNodeCode9', 'lightDarkIcon9');
copyFunction('SimpleNodeCode9', 'copyIcon9');

darkLightCodeFunction('SimpleNodeCode10', 'lightDarkIcon10');
copyFunction('SimpleNodeCode10', 'copyIcon10');

darkLightCodeFunction('SimpleNodeCode11', 'lightDarkIcon11');
copyFunction('SimpleNodeCode11', 'copyIcon11');

darkLightCodeFunction('SimpleNodeCode12', 'lightDarkIcon12');
copyFunction('SimpleNodeCode12', 'copyIcon12');

darkLightCodeFunction('SimpleNodeCode13', 'lightDarkIcon13');
copyFunction('SimpleNodeCode13', 'copyIcon13');

darkLightCodeFunction('SimpleNodeCode14', 'lightDarkIcon14');
copyFunction('SimpleNodeCode14', 'copyIcon14');

darkLightCodeFunction('SimpleNodeCode15', 'lightDarkIcon15');
copyFunction('SimpleNodeCode15', 'copyIcon15');

darkLightCodeFunction('SimpleNodeCode16', 'lightDarkIcon16');
copyFunction('SimpleNodeCode16', 'copyIcon16');

darkLightCodeFunction('SimpleNodeCode17', 'lightDarkIcon17');
copyFunction('SimpleNodeCode17', 'copyIcon17');

darkLightCodeFunction('SimpleNodeCode18', 'lightDarkIcon18');
copyFunction('SimpleNodeCode18', 'copyIcon18');

darkLightCodeFunction('SimpleNodeCode19', 'lightDarkIcon19');
copyFunction('SimpleNodeCode19', 'copyIcon19');

darkLightCodeFunction('SimpleNodeCode20', 'lightDarkIcon20');
copyFunction('SimpleNodeCode20', 'copyIcon20');

darkLightCodeFunction('SimpleNodeCode21', 'lightDarkIcon21');
copyFunction('SimpleNodeCode21', 'copyIcon21');

darkLightCodeFunction('SimpleNodeCode22', 'lightDarkIcon22');
copyFunction('SimpleNodeCode22', 'copyIcon22');

darkLightCodeFunction('SimpleNodeCode23', 'lightDarkIcon23');
copyFunction('SimpleNodeCode23', 'copyIcon23');

darkLightCodeFunction('SimpleNodeCode24', 'lightDarkIcon24');
copyFunction('SimpleNodeCode24', 'copyIcon24');

darkLightCodeFunction('SimpleNodeCode25', 'lightDarkIcon25');
copyFunction('SimpleNodeCode25', 'copyIcon25');

darkLightCodeFunction('SimpleNodeCode26', 'lightDarkIcon26');
copyFunction('SimpleNodeCode26', 'copyIcon26');

darkLightCodeFunction('SimpleNodeCode27', 'lightDarkIcon27');
copyFunction('SimpleNodeCode27', 'copyIcon27');

darkLightCodeFunction('SimpleNodeCode28', 'lightDarkIcon28');
copyFunction('SimpleNodeCode28', 'copyIcon28');

darkLightCodeFunction('SimpleNodeCode29', 'lightDarkIcon29');
copyFunction('SimpleNodeCode29', 'copyIcon29');

darkLightCodeFunction('SimpleNodeCode30', 'lightDarkIcon30');
copyFunction('SimpleNodeCode30', 'copyIcon30');

darkLightCodeFunction('SimpleNodeCode31', 'lightDarkIcon31');
copyFunction('SimpleNodeCode31', 'copyIcon31');

darkLightCodeFunction('SimpleNodeCode32', 'lightDarkIcon32');
copyFunction('SimpleNodeCode32', 'copyIcon32');

darkLightCodeFunction('SimpleNodeCode33', 'lightDarkIcon33');
copyFunction('SimpleNodeCode33', 'copyIcon33');

darkLightCodeFunction('SimpleNodeCode34', 'lightDarkIcon34');
copyFunction('SimpleNodeCode34', 'copyIcon34');

darkLightCodeFunction('SimpleNodeCode35', 'lightDarkIcon35');
copyFunction('SimpleNodeCode35', 'copyIcon35');

darkLightCodeFunction('SimpleNodeCode36', 'lightDarkIcon36');
copyFunction('SimpleNodeCode36', 'copyIcon36');

darkLightCodeFunction('SimpleNodeCode37', 'lightDarkIcon37');
copyFunction('SimpleNodeCode37', 'copyIcon37');

darkLightCodeFunction('SimpleNodeCode38', 'lightDarkIcon38');
copyFunction('SimpleNodeCode38', 'copyIcon38');

darkLightCodeFunction('SimpleNodeCode39', 'lightDarkIcon39');
copyFunction('SimpleNodeCode39', 'copyIcon39');

darkLightCodeFunction('SimpleNodeCode40', 'lightDarkIcon40');
copyFunction('SimpleNodeCode40', 'copyIcon40');

darkLightCodeFunction('SimpleNodeCode41', 'lightDarkIcon41');
copyFunction('SimpleNodeCode41', 'copyIcon41');

darkLightCodeFunction('SimpleNodeCode42', 'lightDarkIcon42');
copyFunction('SimpleNodeCode42', 'copyIcon42');

darkLightCodeFunction('SimpleNodeCode43', 'lightDarkIcon43');
copyFunction('SimpleNodeCode43', 'copyIcon43');

darkLightCodeFunction('SimpleNodeCode44', 'lightDarkIcon44');
copyFunction('SimpleNodeCode44', 'copyIcon44');

darkLightCodeFunction('SimpleNodeCode45', 'lightDarkIcon45');
copyFunction('SimpleNodeCode45', 'copyIcon45');

darkLightCodeFunction('SimpleNodeCode46', 'lightDarkIcon46');
copyFunction('SimpleNodeCode46', 'copyIcon46');

darkLightCodeFunction('SimpleNodeCode47', 'lightDarkIcon47');
copyFunction('SimpleNodeCode47', 'copyIcon47');

darkLightCodeFunction('SimpleNodeCode48', 'lightDarkIcon48');
copyFunction('SimpleNodeCode48', 'copyIcon48');

darkLightCodeFunction('SimpleNodeCode49', 'lightDarkIcon49');
copyFunction('SimpleNodeCode49', 'copyIcon49');

darkLightCodeFunction('SimpleNodeCode50', 'lightDarkIcon50');
copyFunction('SimpleNodeCode50', 'copyIcon50');

darkLightCodeFunction('SimpleNodeCode51', 'lightDarkIcon51');
copyFunction('SimpleNodeCode51', 'copyIcon51');

darkLightCodeFunction('SimpleNodeCode52', 'lightDarkIcon52');
copyFunction('SimpleNodeCode52', 'copyIcon52');

darkLightCodeFunction('SimpleNodeCode53', 'lightDarkIcon53');
copyFunction('SimpleNodeCode53', 'copyIcon53');

darkLightCodeFunction('SimpleNodeCode54', 'lightDarkIcon54');
copyFunction('SimpleNodeCode54', 'copyIcon54');

darkLightCodeFunction('SimpleNodeCode55', 'lightDarkIcon55');
copyFunction('SimpleNodeCode55', 'copyIcon55');

darkLightCodeFunction('SimpleNodeCode56', 'lightDarkIcon56');
copyFunction('SimpleNodeCode56', 'copyIcon56');

darkLightCodeFunction('SimpleNodeCode57', 'lightDarkIcon57');
copyFunction('SimpleNodeCode57', 'copyIcon57');

darkLightCodeFunction('SimpleNodeCode58', 'lightDarkIcon58');
copyFunction('SimpleNodeCode58', 'copyIcon58');

darkLightCodeFunction('SimpleNodeCode59', 'lightDarkIcon59');
copyFunction('SimpleNodeCode59', 'copyIcon59');

darkLightCodeFunction('SimpleNodeCode60', 'lightDarkIcon60');
copyFunction('SimpleNodeCode60', 'copyIcon60');

darkLightCodeFunction('SimpleNodeCode61', 'lightDarkIcon61');
copyFunction('SimpleNodeCode61', 'copyIcon61');

darkLightCodeFunction('SimpleNodeCode62', 'lightDarkIcon62');
copyFunction('SimpleNodeCode62', 'copyIcon62');

darkLightCodeFunction('SimpleNodeCode63', 'lightDarkIcon63');
copyFunction('SimpleNodeCode63', 'copyIcon63');

darkLightCodeFunction('SimpleNodeCode64', 'lightDarkIcon64');
copyFunction('SimpleNodeCode64', 'copyIcon64');

darkLightCodeFunction('SimpleNodeCode65', 'lightDarkIcon65');
copyFunction('SimpleNodeCode65', 'copyIcon65');

darkLightCodeFunction('SimpleNodeCode66', 'lightDarkIcon66');
copyFunction('SimpleNodeCode66', 'copyIcon66');

darkLightCodeFunction('SimpleNodeCode67', 'lightDarkIcon67');
copyFunction('SimpleNodeCode67', 'copyIcon67');

darkLightCodeFunction('SimpleNodeCode68', 'lightDarkIcon68');
copyFunction('SimpleNodeCode68', 'copyIcon68');

darkLightCodeFunction('SimpleNodeCode69', 'lightDarkIcon69');
copyFunction('SimpleNodeCode69', 'copyIcon69');

darkLightCodeFunction('SimpleNodeCode70', 'lightDarkIcon70');
copyFunction('SimpleNodeCode70', 'copyIcon70');

darkLightCodeFunction('SimpleNodeCode71', 'lightDarkIcon71');
copyFunction('SimpleNodeCode71', 'copyIcon71');

darkLightCodeFunction('SimpleNodeCode72', 'lightDarkIcon72');
copyFunction('SimpleNodeCode72', 'copyIcon72');

darkLightCodeFunction('SimpleNodeCode73', 'lightDarkIcon73');
copyFunction('SimpleNodeCode73', 'copyIcon73');

darkLightCodeFunction('SimpleNodeCode74', 'lightDarkIcon74');
copyFunction('SimpleNodeCode74', 'copyIcon74');

darkLightCodeFunction('SimpleNodeCode75', 'lightDarkIcon75');
copyFunction('SimpleNodeCode75', 'copyIcon75');

darkLightCodeFunction('SimpleNodeCode76', 'lightDarkIcon76');
copyFunction('SimpleNodeCode76', 'copyIcon76');

darkLightCodeFunction('SimpleNodeCode77', 'lightDarkIcon77');
copyFunction('SimpleNodeCode77', 'copyIcon77');

darkLightCodeFunction('SimpleNodeCode78', 'lightDarkIcon78');
copyFunction('SimpleNodeCode78', 'copyIcon78');

darkLightCodeFunction('SimpleNodeCode79', 'lightDarkIcon79');
copyFunction('SimpleNodeCode79', 'copyIcon79');

darkLightCodeFunction('SimpleNodeCode80', 'lightDarkIcon80');
copyFunction('SimpleNodeCode80', 'copyIcon80');

darkLightCodeFunction('SimpleNodeCode81', 'lightDarkIcon81');
copyFunction('SimpleNodeCode81', 'copyIcon81');

darkLightCodeFunction('SimpleNodeCode82', 'lightDarkIcon82');
copyFunction('SimpleNodeCode82', 'copyIcon82');

darkLightCodeFunction('SimpleNodeCode83', 'lightDarkIcon83');
copyFunction('SimpleNodeCode83', 'copyIcon83');

darkLightCodeFunction('SimpleNodeCode84', 'lightDarkIcon84');
copyFunction('SimpleNodeCode84', 'copyIcon84');

darkLightCodeFunction('SimpleNodeCode85', 'lightDarkIcon85');
copyFunction('SimpleNodeCode85', 'copyIcon85');

darkLightCodeFunction('SimpleNodeCode86', 'lightDarkIcon86');
copyFunction('SimpleNodeCode86', 'copyIcon86');

darkLightCodeFunction('SimpleNodeCode87', 'lightDarkIcon87');
copyFunction('SimpleNodeCode87', 'copyIcon87');

darkLightCodeFunction('SimpleNodeCode88', 'lightDarkIcon88');
copyFunction('SimpleNodeCode88', 'copyIcon88');

darkLightCodeFunction('SimpleNodeCode89', 'lightDarkIcon89');
copyFunction('SimpleNodeCode89', 'copyIcon89');

darkLightCodeFunction('SimpleNodeCode90', 'lightDarkIcon90');
copyFunction('SimpleNodeCode90', 'copyIcon90');

darkLightCodeFunction('SimpleNodeCode91', 'lightDarkIcon91');
copyFunction('SimpleNodeCode91', 'copyIcon91');

darkLightCodeFunction('SimpleNodeCode92', 'lightDarkIcon92');
copyFunction('SimpleNodeCode92', 'copyIcon92');

darkLightCodeFunction('SimpleNodeCode93', 'lightDarkIcon93');
copyFunction('SimpleNodeCode93', 'copyIcon93');

darkLightCodeFunction('SimpleNodeCode94', 'lightDarkIcon94');
copyFunction('SimpleNodeCode94', 'copyIcon94');

darkLightCodeFunction('SimpleNodeCode95', 'lightDarkIcon95');
copyFunction('SimpleNodeCode95', 'copyIcon95');

darkLightCodeFunction('SimpleNodeCode96', 'lightDarkIcon96');
copyFunction('SimpleNodeCode96', 'copyIcon96');

darkLightCodeFunction('SimpleNodeCode97', 'lightDarkIcon97');
copyFunction('SimpleNodeCode97', 'copyIcon97');

darkLightCodeFunction('SimpleNodeCode98', 'lightDarkIcon98');
copyFunction('SimpleNodeCode98', 'copyIcon98');

darkLightCodeFunction('SimpleNodeCode99', 'lightDarkIcon99');
copyFunction('SimpleNodeCode99', 'copyIcon99');

darkLightCodeFunction('SimpleNodeCode100', 'lightDarkIcon100');
copyFunction('SimpleNodeCode100', 'copyIcon100');

darkLightCodeFunction('SimpleNodeCode101', 'lightDarkIcon101');
copyFunction('SimpleNodeCode101', 'copyIcon101');

darkLightCodeFunction('SimpleNodeCode102', 'lightDarkIcon102');
copyFunction('SimpleNodeCode102', 'copyIcon102');

darkLightCodeFunction('SimpleNodeCode103', 'lightDarkIcon103');
copyFunction('SimpleNodeCode103', 'copyIcon103');

darkLightCodeFunction('SimpleNodeCode104', 'lightDarkIcon104');
copyFunction('SimpleNodeCode104', 'copyIcon104');

darkLightCodeFunction('SimpleNodeCode105', 'lightDarkIcon105');
copyFunction('SimpleNodeCode105', 'copyIcon105');

darkLightCodeFunction('SimpleNodeCode106', 'lightDarkIcon106');
copyFunction('SimpleNodeCode106', 'copyIcon106');

darkLightCodeFunction('SimpleNodeCode107', 'lightDarkIcon107');
copyFunction('SimpleNodeCode107', 'copyIcon107');

darkLightCodeFunction('SimpleNodeCode108', 'lightDarkIcon108');
copyFunction('SimpleNodeCode108', 'copyIcon108');

darkLightCodeFunction('SimpleNodeCode109', 'lightDarkIcon109');
copyFunction('SimpleNodeCode109', 'copyIcon109');

darkLightCodeFunction('SimpleNodeCode110', 'lightDarkIcon110');
copyFunction('SimpleNodeCode110', 'copyIcon110');

darkLightCodeFunction('SimpleNodeCode111', 'lightDarkIcon111');
copyFunction('SimpleNodeCode111', 'copyIcon111');

darkLightCodeFunction('SimpleNodeCode112', 'lightDarkIcon112');
copyFunction('SimpleNodeCode112', 'copyIcon112');

darkLightCodeFunction('SimpleNodeCode113', 'lightDarkIcon113');
copyFunction('SimpleNodeCode113', 'copyIcon113');

darkLightCodeFunction('SimpleNodeCode114', 'lightDarkIcon114');
copyFunction('SimpleNodeCode114', 'copyIcon114');

darkLightCodeFunction('SimpleNodeCode115', 'lightDarkIcon115');
copyFunction('SimpleNodeCode115', 'copyIcon115');

darkLightCodeFunction('SimpleNodeCode116', 'lightDarkIcon116');
copyFunction('SimpleNodeCode116', 'copyIcon116');

darkLightCodeFunction('SimpleNodeCode117', 'lightDarkIcon117');
copyFunction('SimpleNodeCode117', 'copyIcon117');

darkLightCodeFunction('SimpleNodeCode118', 'lightDarkIcon118');
copyFunction('SimpleNodeCode118', 'copyIcon118');

darkLightCodeFunction('SimpleNodeCode119', 'lightDarkIcon119');
copyFunction('SimpleNodeCode119', 'copyIcon119');

darkLightCodeFunction('SimpleNodeCode120', 'lightDarkIcon120');
copyFunction('SimpleNodeCode120', 'copyIcon120');

darkLightCodeFunction('SimpleNodeCode121', 'lightDarkIcon121');
copyFunction('SimpleNodeCode121', 'copyIcon121');

darkLightCodeFunction('SimpleNodeCode122', 'lightDarkIcon122');
copyFunction('SimpleNodeCode122', 'copyIcon122');

darkLightCodeFunction('SimpleNodeCode123', 'lightDarkIcon123');
copyFunction('SimpleNodeCode123', 'copyIcon123');

darkLightCodeFunction('SimpleNodeCode124', 'lightDarkIcon124');
copyFunction('SimpleNodeCode124', 'copyIcon124');

darkLightCodeFunction('SimpleNodeCode125', 'lightDarkIcon125');
copyFunction('SimpleNodeCode125', 'copyIcon125');

darkLightCodeFunction('SimpleNodeCode126', 'lightDarkIcon126');
copyFunction('SimpleNodeCode126', 'copyIcon126');

darkLightCodeFunction('SimpleNodeCode127', 'lightDarkIcon127');
copyFunction('SimpleNodeCode127', 'copyIcon127');

darkLightCodeFunction('SimpleNodeCode128', 'lightDarkIcon128');
copyFunction('SimpleNodeCode128', 'copyIcon128');

darkLightCodeFunction('SimpleNodeCode129', 'lightDarkIcon129');
copyFunction('SimpleNodeCode129', 'copyIcon129');

darkLightCodeFunction('SimpleNodeCode130', 'lightDarkIcon130');
copyFunction('SimpleNodeCode130', 'copyIcon130');

darkLightCodeFunction('SimpleNodeCode131', 'lightDarkIcon131');
copyFunction('SimpleNodeCode131', 'copyIcon131');

darkLightCodeFunction('SimpleNodeCode132', 'lightDarkIcon132');
copyFunction('SimpleNodeCode132', 'copyIcon132');

darkLightCodeFunction('SimpleNodeCode133', 'lightDarkIcon133');
copyFunction('SimpleNodeCode133', 'copyIcon133');

darkLightCodeFunction('SimpleNodeCode134', 'lightDarkIcon134');
copyFunction('SimpleNodeCode134', 'copyIcon134');

darkLightCodeFunction('SimpleNodeCode135', 'lightDarkIcon135');
copyFunction('SimpleNodeCode135', 'copyIcon135');

darkLightCodeFunction('SimpleNodeCode136', 'lightDarkIcon136');
copyFunction('SimpleNodeCode136', 'copyIcon136');

darkLightCodeFunction('SimpleNodeCode137', 'lightDarkIcon137');
copyFunction('SimpleNodeCode137', 'copyIcon137');

darkLightCodeFunction('SimpleNodeCode138', 'lightDarkIcon138');
copyFunction('SimpleNodeCode138', 'copyIcon138');

darkLightCodeFunction('SimpleNodeCode139', 'lightDarkIcon139');
copyFunction('SimpleNodeCode139', 'copyIcon139');

darkLightCodeFunction('SimpleNodeCode140', 'lightDarkIcon140');
copyFunction('SimpleNodeCode140', 'copyIcon140');

darkLightCodeFunction('SimpleNodeCode141', 'lightDarkIcon141');
copyFunction('SimpleNodeCode141', 'copyIcon141');

darkLightCodeFunction('SimpleNodeCode142', 'lightDarkIcon142');
copyFunction('SimpleNodeCode142', 'copyIcon142');

darkLightCodeFunction('SimpleNodeCode143', 'lightDarkIcon143');
copyFunction('SimpleNodeCode143', 'copyIcon143');

darkLightCodeFunction('SimpleNodeCode144', 'lightDarkIcon144');
copyFunction('SimpleNodeCode144', 'copyIcon144');

darkLightCodeFunction('SimpleNodeCode145', 'lightDarkIcon145');
copyFunction('SimpleNodeCode145', 'copyIcon145');

darkLightCodeFunction('SimpleNodeCode146', 'lightDarkIcon146');
copyFunction('SimpleNodeCode146', 'copyIcon146');

darkLightCodeFunction('SimpleNodeCode147', 'lightDarkIcon147');
copyFunction('SimpleNodeCode147', 'copyIcon147');

darkLightCodeFunction('SimpleNodeCode148', 'lightDarkIcon148');
copyFunction('SimpleNodeCode148', 'copyIcon148');

darkLightCodeFunction('SimpleNodeCode149', 'lightDarkIcon149');
copyFunction('SimpleNodeCode149', 'copyIcon149');

darkLightCodeFunction('SimpleNodeCode150', 'lightDarkIcon150');
copyFunction('SimpleNodeCode150', 'copyIcon150');

darkLightCodeFunction('SimpleNodeCode151', 'lightDarkIcon151');
copyFunction('SimpleNodeCode151', 'copyIcon151');

darkLightCodeFunction('SimpleNodeCode152', 'lightDarkIcon152');
copyFunction('SimpleNodeCode152', 'copyIcon152');

darkLightCodeFunction('SimpleNodeCode153', 'lightDarkIcon153');
copyFunction('SimpleNodeCode153', 'copyIcon153');

darkLightCodeFunction('SimpleNodeCode154', 'lightDarkIcon154');
copyFunction('SimpleNodeCode154', 'copyIcon154');

darkLightCodeFunction('SimpleNodeCode155', 'lightDarkIcon155');
copyFunction('SimpleNodeCode155', 'copyIcon155');

darkLightCodeFunction('SimpleNodeCode156', 'lightDarkIcon156');
copyFunction('SimpleNodeCode156', 'copyIcon156');

darkLightCodeFunction('SimpleNodeCode157', 'lightDarkIcon157');
copyFunction('SimpleNodeCode157', 'copyIcon157');

darkLightCodeFunction('SimpleNodeCode158', 'lightDarkIcon158');
copyFunction('SimpleNodeCode158', 'copyIcon158');

darkLightCodeFunction('SimpleNodeCode159', 'lightDarkIcon159');
copyFunction('SimpleNodeCode159', 'copyIcon159');

darkLightCodeFunction('SimpleNodeCode160', 'lightDarkIcon160');
copyFunction('SimpleNodeCode160', 'copyIcon160');

darkLightCodeFunction('SimpleNodeCode161', 'lightDarkIcon161');
copyFunction('SimpleNodeCode161', 'copyIcon161');

darkLightCodeFunction('SimpleNodeCode162', 'lightDarkIcon162');
copyFunction('SimpleNodeCode162', 'copyIcon162');

darkLightCodeFunction('SimpleNodeCode163', 'lightDarkIcon163');
copyFunction('SimpleNodeCode163', 'copyIcon163');

darkLightCodeFunction('SimpleNodeCode164', 'lightDarkIcon164');
copyFunction('SimpleNodeCode164', 'copyIcon164');

darkLightCodeFunction('SimpleNodeCode165', 'lightDarkIcon165');
copyFunction('SimpleNodeCode165', 'copyIcon165');

darkLightCodeFunction('SimpleNodeCode166', 'lightDarkIcon166');
copyFunction('SimpleNodeCode166', 'copyIcon166');

darkLightCodeFunction('SimpleNodeCode167', 'lightDarkIcon167');
copyFunction('SimpleNodeCode167', 'copyIcon167');