// Wait for page to load
window.onload = function() {
    const iframe = document.getElementById('geminiFrame');
    const loading = document.getElementById('loading');

    // When Gemini loads
    iframe.onload = function() {
        loading.style.display = 'none';
        iframe.style.display = 'block';

        // Force mobile mode (may not be fully effective for all sites)
        Object.defineProperty(iframe.contentWindow.navigator, 'userAgent', {
            value: 'Mozilla/5.0 (Mobile; Nokia 2720 Flip; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5'
        });

        // Attempt to improve mobile UI (may require more specific CSS)
        const style = iframe.contentWindow.document.createElement('style');
        style.innerHTML = `
            body { font-size: 16px !important; }
            input { min-height: 30px !important; }
            textarea { min-height: 80px !important; } /* Added for text areas */
            button { padding: 8px 12px !important; } /* Basic button styling */
            /* Add more specific styles as needed by inspecting Gemini's UI */
        `;
        iframe.contentWindow.document.head.appendChild(style);
    };

    // Keypad controls
    document.addEventListener('keypress', function(e) {
        if (!iframe.contentWindow) return;

        // Back button
        if (e.key === 'Backspace') {
            iframe.contentWindow.history.back();
            e.preventDefault();
        }

        // Center key (attempt to focus input - may need refinement)
        if (e.key === '5') {
            const inputElements = iframe.contentWindow.document.querySelectorAll('input[type="text"], textarea');
            if (inputElements.length > 0) {
                inputElements[0].focus(); // Focus the first text input or textarea
            }
        }

        // Scroll up/down
        if (e.key === '2') iframe.contentWindow.scrollBy(0, 50);
        if (e.key === '8') iframe.contentWindow.scrollBy(0, -50);
    });
};
