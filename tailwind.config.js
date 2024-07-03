export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blur": "rgba(0, 0, 0, 0.3)",
        "box": "0 0 10px white"
      }
    },
  },
  plugins: [],
}