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
                    orange: '#FF9F0A'
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
