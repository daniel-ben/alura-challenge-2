document.querySelector('[data-color-picker]').addEventListener('change', changeBorderColor);

export function changeBorderColor() {
  const color = document.querySelector('[data-color-picker]').value;
  document.querySelector('[data-code-container]').style.borderColor = color;
}