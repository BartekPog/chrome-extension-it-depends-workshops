export function count(element) {
  return element.innerText.replace(/\r?\n|\r/g, ' ').split(' ').filter(elem => elem.length > 1);
}
