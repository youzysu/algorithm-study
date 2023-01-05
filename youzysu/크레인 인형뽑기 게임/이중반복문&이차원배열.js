function solution(board, moves) {
  let count = 0;
  const stack = [];

  moves.forEach((move) => {
    const index = move - 1;
    for (let line = 0; line < board.length; line++) {
      if (board[line][index]) {
        if (board[line][index] === stack[stack.length - 1]) {
          stack.pop();
          count += 1;
          board[line][index] = 0;
          return;
        } else {
          stack.push(board[line][index]);
          board[line][index] = 0;
          return;
        }
      }
    }
  });
  return count * 2;
}
