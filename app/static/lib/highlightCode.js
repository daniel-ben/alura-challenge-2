export function highlightCode(text, language) {
  return hljs.highlight(text, { language: language });
}
