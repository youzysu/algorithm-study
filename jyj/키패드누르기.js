function distance(x, y) {
  let oneDismensionDistance = Math.abs(x - y);
  return Math.floor(oneDismensionDistance / 3) + (oneDismensionDistance % 3);
}
function pushAndAnswer(stack, number, answer) {
  stack.push(number);
  if (stack[0] === 10) {
    answer += "L";
  } else {
    answer += "R";
  }
  return answer;
}
function solution(numbers, hand) {
  let answer = "";
  //*은 10, 0은 11, #은 12로 치환
  let lstack = [10]; //왼손 처음 위치 *
  let rstack = [12]; //오른손 처음 위치 #
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) {
      numbers[i] = 11; //0은 11로 치환
    }
    if (numbers[i] % 3 === 0) {
      answer = pushAndAnswer(rstack, numbers[i], answer);
    } else if (numbers[i] % 3 === 1) {
      answer = pushAndAnswer(lstack, numbers[i], answer);
    } else {
      let ldistance = distance(lstack[lstack.length - 1], numbers[i]);
      let rdistance = distance(rstack[rstack.length - 1], numbers[i]);
      if (ldistance < rdistance) {
        answer = pushAndAnswer(lstack, numbers[i], answer);
      } else if (ldistance > rdistance) {
        answer = pushAndAnswer(rstack, numbers[i], answer);
      } else {
        if (hand === "right") {
          answer = pushAndAnswer(rstack, numbers[i], answer);
        } else {
          answer = pushAndAnswer(lstack, numbers[i], answer);
        }
      }
    }
  }
  return answer;
}
