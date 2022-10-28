function isPalindrom(num) {
  let temp = num;
  let rev = 0;
  while (temp > 0) {
    let lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return rev === num;
}

isPalindrom(-121);
