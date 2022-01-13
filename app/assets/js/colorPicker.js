const cards = document.querySelectorAll('[data-color-card]');

const defaultScheme = 
{
  'lightest-color' : '150, 185, 253',
  'light-color' : '123, 164, 252',
  'primary-color' : '80, 129, 251',
  'dark-color' : '5, 29, 59',
  'input-color': '255, 255, 255',
  'menu-color': '45, 65, 91',
}

const openColorPickerOnClick = (cover, colorPicker) => {
  cover.addEventListener('click', () => {
    colorPicker.click();
  });
};

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const saveColorScheme = (colorName, rgbColor) => {
  const localStorage = window.localStorage;
  const colorScheme =  !localStorage.colorScheme ?  {}  :  JSON.parse(localStorage.colorScheme); 

  colorScheme[colorName] = rgbColor;
  localStorage.setItem('colorScheme', JSON.stringify(colorScheme));
}

const changeColorValues = (card, colorPicker, name, hex, rgb) => {
  card.addEventListener('change', (event) => {
    const color = event.target.value.replace(/\s/g, '').split(',');

    const hexColor = color[0][0] === '#' ? color : rgbToHex(...color.map(item => parseInt(item)));
    const rgbColor = color[0][0] !== '#' ? {r: color[0], g: color[1], b: color[2]} : hexToRgb(...color);
    
    colorPicker.value = hexColor;
    hex.placeholder = hexColor;
    rgb.placeholder = `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`;

    // change root color values
    document.documentElement.style.setProperty(`--${name}`, `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);    
  
    saveColorScheme(name, `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);
  });
}

const resetColor = (button, name) => {
  button.addEventListener('click', () => {
    const defaultColor = defaultScheme[`${name}`];
    saveColorScheme(name, defaultColor);
    location.reload();
  });
}

cards.forEach(card => {
  
  const cover = card.querySelector('[data-color-cover]');
  const colorPicker = card.querySelector('[data-color-picker]');
  const colorName = colorPicker.getAttribute('name');
  const hex = card.querySelector('[data-color-hex]');
  const rgb = card.querySelector('[data-color-rgb]');
  const resetButton = card.querySelector('[data-color-reset]');

  cover.style.backgroundColor = `rgb(var(--${colorName}))`; 

  openColorPickerOnClick(cover, colorPicker);
  changeColorValues(card, colorPicker, colorName, hex, rgb);
  resetColor(resetButton, colorName);
});

