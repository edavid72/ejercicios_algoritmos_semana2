function isUnique(s) {
  if (s.length > 128) {
    return false;
  }

  let sArray = [...s].sort();

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (sArray[i] === sArray[j]) {
        console.log(sArray[i], sArray[j]);
        return false;
      }
    }
  }
  return true;
}


isUnique('aabcdfrd')