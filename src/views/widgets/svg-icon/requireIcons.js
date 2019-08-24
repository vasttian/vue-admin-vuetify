// more detail
// [require.context](https://webpack.js.org/guides/dependency-management/#require-context)
const importAll = r => r.keys();
const all = importAll(require.context('@/components/svg-icons/icons', false, /\.svg$/));
const re = /^\.\/(.*)\.svg/;
const icons = all.map(s => s.match(re)[1]);
icons.sort();
// console.log('icons--', icons);
export default icons;
