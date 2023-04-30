const textInput = document.getElementById("text-input");
const resultInput = document.getElementById("result-input");
const modeSelect = document.getElementById("mode-select");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", function() {
  const text = textInput.value.toLowerCase();
  const mode = modeSelect.value;
  const convertedText = convertText(text, mode);
  resultInput.value = convertedText;
});
document.getElementById("copy-button").addEventListener("click", function() {
  var resultInput = document.getElementById("result-input");
  resultInput.select();
  document.execCommand("copy");
});



function convertText(text, mode) {
    let mapping = {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
    };
  
    let convertedText = "";
  
    if (mode === "encrypt") {
      // Convert original text to encrypted text
      for (let i = 0; i < text.length; i++) {
        if (mapping[text[i]]) {
          convertedText += mapping[text[i]];
        } else {
          convertedText += text[i];
        }
      }
    } else if (mode === "decrypt") {
      // Convert encrypted text to original text
      for (let i = 0; i < text.length; i++) {
        if (text.slice(i, i+5) === "enter") {
          convertedText += "e";
          i += 4;
        } else if (text.slice(i, i+4) === "imes") {
          convertedText += "i";
          i += 3;
        } else if (text.slice(i, i+2) === "ai") {
          convertedText += "a";
          i += 1;
        } else if (text.slice(i, i+4) === "ober") {
          convertedText += "o";
          i += 3;
        } else if (text.slice(i, i+4) === "ufat") {
          convertedText += "u";
          i += 3;
        } else {
          convertedText += text[i];
        }
      }
    }
  
    return convertedText;
  }
  