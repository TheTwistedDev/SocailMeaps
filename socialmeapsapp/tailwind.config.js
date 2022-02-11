module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: theme => ({
        'myscreen' : 'calc(100vh - 68px)',
        'chat' : 'calc(100vh - 170px)',
      }),

      width: theme => ({
        'chat' : 'calc(100vw - 450px)',
        'input' : 'calc(100vw - 520px)', 
      }),

    },
  },
  plugins: [],
}
