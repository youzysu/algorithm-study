function solution(board, moves) {
  let answer = 0;
  let basket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        if (
          basket.length > 0 &&
          board[j][moves[i] - 1] === basket[basket.length - 1]
        ) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}
