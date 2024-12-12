
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
