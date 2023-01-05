function solution(board, moves) {
  var answer = 0;
  
  let list = board.map((v) => v.slice());
 
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    
    let n = moves[i] - 1;

    for (let j = 0; j < list.length; j++) {
    
      if (list[j][n] !== 0) {
     
        if (stack[stack.length - 1] === list[j][n]) {
          answer += 2;
          stack.pop();
        }
       
        else {
          stack.push(list[j][n]);
        }
       
        list[j][n] = 0;
        break;
      }
    }
  }
  return answer;
}