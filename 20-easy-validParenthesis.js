const isValid = (str) => {
  if (str.length % 2 !== 0) return false;
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else {
      const last = stack.pop();
      console.log('last', last + ' ' + i);
      if (str[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

console.log(isValid('()[]{}'));
