window.onload = function() {
    const iframe = document.getElementById('geminiFrame');
    const loading = document.getElementById('loading');

    iframe.onload = function() {
        loading.style.display = 'none';
        iframe.style.display = 'block';

        try {
            Object.defineProperty(iframe.contentWindow.navigator, 'userAgent', {
                value: 'Mozilla/5.0 (Mobile; Nokia 2720 Flip; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5'
            });

            const style = iframe.contentWindow.document.createElement('style');
            style.innerHTML = `
                body {
                    font-size: 16px !important;
                }
                input[type="text"], input[type="search"], textarea {
                    min-height: 30px !important;
                    padding: 5px !important;
                }
                button {
                    min-height: 35px !important;
                    padding: 5px 10px !important;
                }
            `;
            iframe.contentWindow.document.head.appendChild(style);
        } catch (error) {
            console.error("Oops, something went wrong trying to adjust the page:", error);
        }
    };

    document.addEventListener('keypress', function(e) {
        if (!iframe.contentWindow) return;

        if (e.key === 'Backspace' || e.keyCode === 8) {
            iframe.contentWindow.history.back();
            e.preventDefault();
        }

        if (e.key === '5') {
            const inputField = iframe.contentWindow.document.querySelector('input[type="text"], input[type="search"], textarea');
            if (inputField) {
                inputField.focus();
                e.preventDefault();
            } else {
                const primaryButton = iframe.contentWindow.document.querySelector('button:not([style*="display: none"])');
                if (primaryButton) {
                    primaryButton.click();
                    e.preventDefault();
                }
            }
        }

        if (e.key === '2') iframe.contentWindow.scrollBy(0, 50);
        if (e.key === '8') iframe.contentWindow.scrollBy(0, -50);
    });
};
