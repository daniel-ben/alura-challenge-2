const covers = document.querySelectorAll('[data-color-cover]');
const colorPickers = document.querySelectorAll('[data-color-picker]');

covers.forEach(cover => {
  cover.style.backgroundColor = cover.parentNode.querySelector('[data-color-picker]').value;
  cover.addEventListener('click', event => {
    const target = event.target;
    const colorPicker = target.parentNode.querySelector('[data-color-picker]');
    colorPicker.click();
  });
});

colorPickers.forEach(colorPicker => {
  colorPicker.addEventListener('change', event => {
    const target = event.target;
    const color = target.value;
    const cover = target.parentNode.querySelector('[data-color-cover]');
    const hex = target.parentNode.querySelector('[data-color-hex]');
    const rgb = target.parentNode.querySelector('[data-color-rgb]');
    cover.style.backgroundColor = color;
    hex.innerText = color;
    const rgbColor = hexToRgb(color);
    rgb.innerText = `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`;
  });
});

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}