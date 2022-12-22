function solution(s, count = 0) {
  if (!s) return count;

  const charList = s.split('');
  let [firstChar, ...restChars] = charList;

  let countFirstChar = 1;
  let countOtherChars = 0;

  let index = 0;
  for (; index < restChars.length; index++) {
    if (restChars[index] === firstChar) countFirstChar += 1;
    else countOtherChars += 1;
    if (countFirstChar === countOtherChars) break;
  }

  const nextSubstring = restChars.slice(index + 1).join('');
  return solution(nextSubstring, count + 1);
}

console.log(solution('aaabbaccccabba'));
