const lengthOfLastWord = (str) => {
  let strArr = str.trim().split(" ");
  const lws = strArr[strArr.length - 1];
  return lws.length;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
