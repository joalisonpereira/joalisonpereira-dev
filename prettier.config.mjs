/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  trailingComma: 'none',
  tabWidth: 2,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './app/_styles/globals.css',
  tailwindFunctions: ['cn'],
  tailwindAttributes: ['class', '/[Cc]lassName$/']
};

export default config;
