const colorScheme = JSON.parse(window.localStorage.getItem('colorScheme'));

// can't iterate over an object in javascript
// so we need to convert it to an array
// and then iterate over it
if (colorScheme) {
  Object.keys(colorScheme).forEach(color => {
    document.documentElement.style.setProperty(`--${color}`, `${colorScheme[color]}`);
  });
}
