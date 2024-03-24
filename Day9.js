function validParenthesis(s) {
  let array = s.split("");
  let poppedElements = [];
  for (var i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "(":
      case "{":
      case "[":
        poppedElements.push(array[i]);
        break;
      case ")":
        if (poppedElements.length === 0 || poppedElements.pop() !== "(") {
          return false; 
        }
        break;
      case "}":
        if (poppedElements.length === 0 || poppedElements.pop() !== "{") {
          return false; 
        }
        break;
      case "]":
        if (poppedElements.length === 0 || poppedElements.pop() !== "[") {
          return false; 
        }
        break;
      default:
        break;
    }
  }
  if (poppedElements.length == 0) {
    return true;
  } else {
    return false;
  }
}

let s = "(]";
console.log(validParenthesis(s));
