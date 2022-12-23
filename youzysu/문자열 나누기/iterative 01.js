function solution(s) {
  let answer = 0;
  let firstChar = '';
  let firstCharCount = 0;
  let theOtherCharCount = 0;

  for (let char of s) {
    if (!firstChar) {
      firstChar = char;
      firstCharCount += 1;
    } else {
      if (char === firstChar) firstCharCount += 1;
      else theOtherCharCount += 1;
    }

    if (firstCharCount === theOtherCharCount) {
      answer += 1;
      firstChar = '';
      firstCharCount = 0;
      theOtherCharCount = 0;
    }
  }

  if (firstChar) answer += 1;
  return answer;
}
