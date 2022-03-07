function compress(s) {
  const sArray = [...s];
  let count = 0;
  let result = '';
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === sArray[i + 1]) {
      while (sArray[i] === sArray[i + count + 1]) {
        count++;
      }
      result += sArray[i] + (count + 1);
      i += count;
      count = 0;
    } else {
      result += sArray[i] + 1;
    }
  }
  return result.length < s.length ? result : s;
}

console.log(compress('aabcccccaaa'));
