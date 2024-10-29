module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #A669EF, #341087)',
        'deep-blue': '#4700ED', 
        'light-blue': '#E0F0FF', 
      },
      backgroundColor: {
        'deep-blue': '#4700ED', 
        'light-blue': '#E0F0FF', 
        'box-purple': "#7141AC",
        'box-pink': "#CEA5FF",

      },
      textColor: {
        'transparent': 'transparent',
        'custom-purple': '#3D247A', 
      },
    },
  },
  plugins: [],
};
