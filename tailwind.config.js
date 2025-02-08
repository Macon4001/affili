module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update to match your file structure
  ],
  theme: {
    extend: {
      colors: {
        'dodger-blue': {
          '50': '#edfaff',
          '100': '#d7f2ff',
          '200': '#b9ebff',
          '300': '#88e0ff',
          '400': '#50ccff',
          '500': '#28b0ff',
          '600': '#1a98ff',
          '700': '#0a7aeb',
          '800': '#0f61be',
          '900': '#135495',
          '950': '#11335a',
        },
      },
      fontFamily: {
        'sans': ['Geist Sans', 'system-ui'],
        'serif': ['Geist Sans', 'Georgia'],
        'mono': ['Geist Mono', 'monospace'],
        'display': ['Geist Sans', 'system-ui'],
        'body': ['Geist Sans', 'system-ui'],
      },
    },
  },
  plugins: [],
};
