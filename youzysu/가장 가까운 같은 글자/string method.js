function solution(s) {
  const notIncluded = -1;
  const distance = [];
  distance.push(notIncluded);

  for (let i = 1; i < s.length; i++) {
    const currentChar = s[i];
    const forwardSubstring = s.substring(0, i);
    if (forwardSubstring.includes(currentChar)) {
      distance.push(i - forwardSubstring.lastIndexOf(currentChar));
    } else {
      distance.push(notIncluded);
    }
  }
  return distance;
}
