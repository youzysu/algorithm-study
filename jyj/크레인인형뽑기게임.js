function solution(board, moves) {
  let answer = 0;
  let basket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        //moves[i]열에서 1행부터 탐색하여 j+1행에서 0값이 아니면 j행 moves[i]열 값을 꺼낸다.
        if (
          basket.length > 0 && //바구니가 비었지 않으면서  바구니 윗값과 게임화면에서 꺼낸값이 같은 경우
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
