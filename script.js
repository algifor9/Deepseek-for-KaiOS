window.onload = function() {
    const iframe = document.getElementById('geminiFrame');
    const loading = document.getElementById('loading');

    // When Gemini loads
    iframe.onload = function() {
        loading.style.display = 'none';
        iframe.style.display = 'block';

        try {
            // Force mobile mode (may not always be fully effective)
            Object.defineProperty(iframe.contentWindow.navigator, 'userAgent', {
                value: 'Mozilla/5.0 (Mobile; Nokia 2720 Flip; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5'
            });

            // Improve mobile UI (inject basic CSS - may need adjustments for Gemini's layout)
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
                /* Add more basic mobile-friendly styles as needed, specific to Gemini's interface */
            `;
            iframe.contentWindow.document.head.appendChild(style);
        } catch (error) {
            console.error("Error injecting styles or user-agent:", error);
        }
    };

    // Keypad controls
    document.addEventListener('keypress', function(e) {
        if (!iframe.contentWindow) return;

        // Back button (usually the red call end button)
        if (e.key === 'Backspace' || e.keyCode === 8) {
            iframe.contentWindow.history.back();
            e.preventDefault();
        }

        // Center key (often used to focus input fields or trigger actions)
        if (e.key === '5') {
            const inputField = iframe.contentWindow.document.querySelector('input[type="text"], input[type="search"], textarea');
            if (inputField) {
                inputField.focus();
                e.preventDefault(); // May interfere with input in some cases
            } else {
                // You might try to simulate a click on a primary action button if no input is focused
                const primaryButton = iframe.contentWindow.document.querySelector('button:not([style*="display: none"])'); // Basic attempt to find a visible button
                if (primaryButton) {
                    primaryButton.click();
                    e.preventDefault();
                }
            }
        }

        // Scroll up/down (adjust scroll amount as needed)
        if (e.key === '2') iframe.contentWindow.scrollBy(0, 50);
        if (e.key === '8') iframe.contentWindow.scrollBy(0, -50);
    });
};
