function solution(numbers, hand) {
  var answer = '';
  
  const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['*', 0, '#']
  ]
  
  const left = [1, 4, 7]
  const right = [3, 6, 9]
  
  let left_now = '*'
  let right_now = '#'
  
  for (let i = 0; i < numbers.length; i++) {

      if (left.includes(numbers[i])) {
          answer += 'L'
          left_now = numbers[i]
      }

      else if (right.includes(numbers[i])) {
          answer += 'R'
          right_now = numbers[i]
      }

      else {

          function get_keypad_index(num) {
              for (let i = 0; i < keypad.length; i++) {
                  if (keypad[i].indexOf(num) != -1){
                      return [i, keypad[i].indexOf(num)]
                  }   
              }
          }

          let num_x, num_y;
          [num_x, num_y] = get_keypad_index(numbers[i])

          let left_x, left_y;
          [left_x, left_y] = get_keypad_index(left_now)

          let right_x, right_y;
          [right_x, right_y] = get_keypad_index(right_now)
          

          let left_diff = Math.abs(left_x - num_x) + Math.abs(left_y - num_y)
          let right_diff = Math.abs(right_x - num_x) + Math.abs(right_y - num_y)
          
          if (left_diff == right_diff) { 
              if (hand == "left") {
                  answer += 'L'
                  left_now = numbers[i]
              }
              else {
                  answer += 'R'
                  right_now = numbers[i]
              }
          }
          else if (left_diff < right_diff) { 
              answer += 'L'
              left_now = numbers[i]
          }
          else {
              answer += 'R'
              right_now = numbers[i]
          }

      }
  }
  return answer;
}