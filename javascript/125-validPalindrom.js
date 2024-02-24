// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   let str = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let revStr = str.split('').reverse().join('');

//   if (str === revStr) return true;
//   return false;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase();
  let finalStr = "";
  for (let i = 0; i < str.length; i++) {
    const res = checkAsciiValue(str[i]);
    if (res === true) {
      finalStr += str[i];
    }
  }
  if (finalStr === finalStr.split("").reverse().join(""))
    return true;
  return false;
};

const checkAsciiValue = (value) => {
  if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122)
    return true;
  if (value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57)
    return true;
  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome('0p'));
