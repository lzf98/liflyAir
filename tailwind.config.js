/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './data/**/*.{md,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#60a5fa',
                    DEFAULT: '#2563eb',
                    dark: '#1e3a8a',
                },
                background: {
                    light: '#f8fafc',
                    dark: '#0f172a',
                },
                card: {
                    light: '#ffffff',
                    dark: '#1e293b',
                },
            },
            boxShadow: {
                glow: '0 0 20px rgba(37, 99, 235, 0.6)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
