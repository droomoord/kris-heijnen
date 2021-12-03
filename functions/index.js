export function parseToHTML(string) {
  return string.replace(
    /\*(\S*)\*/g,
    '<span class="highlight normalize">$1</span>'
  );
}
