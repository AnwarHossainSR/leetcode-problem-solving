const longestCommonPrefix = (strs) => {
  if (strs.length === 0)
    return '';
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i])
        return result;
    }
    result += strs[0][i];
  }
  return result;
};

console.log(longestCommonPrefix([ 'flower', 'flow', 'flight' ]));
