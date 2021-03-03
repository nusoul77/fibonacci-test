export default function reverseString(str: string) {
  let newString: string = '';
  if (str) {
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
  }
  return newString;
}
