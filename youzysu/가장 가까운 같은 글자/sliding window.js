function solution(s) {
  const arr = s.split('');
  const answer = Array(s.length).fill(-1);
  const obj = {};

  arr.forEach((char, index) => {
    const location = index + 1;
    if (!obj[char]) obj[char] = location;
    else if (obj[char]) {
      let temp = obj[char];
      answer[index] = location - temp;
      obj[char] = location;
    }
  });

  return answer;
}
