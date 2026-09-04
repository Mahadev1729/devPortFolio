export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    950: '#0a0f1f',
                },
                gradient: {
                    primary: 'from-blue-600 via-purple-600 to-pink-500',
                    secondary: 'from-slate-900 via-slate-800 to-slate-900',
                }
            },
            spacing: {
                'section': '6rem',
            },
            fontSize: {
                'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
                'heading': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
                'subheading': ['1.25rem', { lineHeight: '1.5' }],
            },
            boxShadow: {
                'glow': '0 0 30px rgba(59, 130, 246, 0.5)',
                'glow-sm': '0 0 15px rgba(59, 130, 246, 0.3)',
                'card': '0 10px 40px -15px rgba(0, 0, 0, 0.5)',
                'card-hover': '0 20px 60px -15px rgba(59, 130, 246, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};
