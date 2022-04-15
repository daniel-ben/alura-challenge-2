const colorPicker = document.querySelector('[data-color-picker]');
const codeContainer = document.querySelector('[data-code-container]');

colorPicker.addEventListener('change', () => {
  const color = colorPicker.value;
  codeContainer.style.borderColor = color;
})