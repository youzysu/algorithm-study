function solution(s) {
  let count = 0;
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
      count += 1;
      firstChar = '';
      firstCharCount = 0;
      theOtherCharCount = 0;
    }
  }

  if (firstChar) count += 1;
  return count;
}
