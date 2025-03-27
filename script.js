// Wait for page to load
window.onload = function() {
    const iframe = document.getElementById('deepseekFrame');
    const loading = document.getElementById('loading');
    
    // When DeepSeek loads
    iframe.onload = function() {
        loading.style.display = 'none';
        iframe.style.display = 'block';
        
        // Force mobile mode
        Object.defineProperty(iframe.contentWindow.navigator, 'userAgent', {
            value: 'Mozilla/5.0 (Mobile; Nokia 2720 Flip; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5'
        });
        
        // Improve mobile UI
        const style = iframe.contentWindow.document.createElement('style');
        style.innerHTML = `
            body { font-size: 16px !important; }
            input { min-height: 30px !important; }
            header { padding: 10px !important; }
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
        
        // Center key (focus input)
        if (e.key === '5') {
            iframe.contentWindow.document.querySelector('input')?.focus();
        }
        
        // Scroll up/down
        if (e.key === '2') iframe.contentWindow.scrollBy(0, 50);
        if (e.key === '8') iframe.contentWindow.scrollBy(0, -50);
    });
};
