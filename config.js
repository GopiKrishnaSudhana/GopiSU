tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                apple: {
                    bg: '#000000',
                    card: '#1c1c1e',
                    border: '#38383a',
                    accent: '#0A84FF',
                    purple: '#BF5AF2',
                    green: '#32D74B',
                    orange: '#FF9F0A',
                    cyan: '#2FD9D4', 
                    indigo: '#B0A9E5',
                    olive: '#8BBB92',
                    amber: '#E77023'
                }
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif']
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glow': '0 0 40px -10px rgba(10, 132, 255, 0.3)',
            }
        }
    }
}

// Load and Initialize EmailJS globally via config
const emailScript = document.createElement('script');
emailScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
emailScript.onload = function() {
    emailjs.init({
        publicKey: "bOCWLtVyQi12fM1Us",
    });
};
document.head.appendChild(emailScript);
