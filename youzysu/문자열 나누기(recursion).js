function solution(s, count = 0) {
  if (!s) return count;

  const charList = s.split('');
  let [firstChar, ...restChars] = charList;

  let countSameChar = 1;
  let countDifferentChar = 0;

  let index = 0;
  for (; index < restChars.length; index++) {
    if (restChars[index] === firstChar) countSameChar += 1;
    else countDifferentChar += 1;
    if (countSameChar === countDifferentChar) break;
  }

  const nextSubstring = restChars.slice(index + 1).join('');
  return solution(nextSubstring, count + 1);
}

console.log(solution('aaabbaccccabba'));
