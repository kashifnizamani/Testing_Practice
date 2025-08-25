export function cipherText(str, shiftAmount) {
  let cipherString = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      const shiftedCode =
        ((((charCode - 97 + shiftAmount) % 26) + 26) % 26) + 97;
      cipherString += String.fromCharCode(shiftedCode);
    }
    // Check if it's an uppercase letter
    else if (charCode >= 65 && charCode <= 90) {
      const shiftedCode =
        ((((charCode - 65 + shiftAmount) % 26) + 26) % 26) + 65;
      cipherString += String.fromCharCode(shiftedCode);
    }
    // If not a letter, return the original character
    else {
      cipherString += str.charAt(i);
    }
  }

  return cipherString;
}
