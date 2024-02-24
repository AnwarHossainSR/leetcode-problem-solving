const addBinary = (a, b) => {
  let sum = "", carry = 0;

  a = a.split("");
  b = b.split("");
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    const x = parseInt(a.pop() || 0);
    const y = parseInt(b.pop() || 0);
    const temp = x + y + carry;
    sum = (temp % 2) + sum;
    carry = Math.floor(temp / 2);
  }
  if (carry)
    sum = carry + sum;

  return sum;
};

console.log(addBinary("1010", "1011"));
