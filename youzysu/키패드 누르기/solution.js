const LOCATION = {
  1: [1, 1],
  2: [1, 2],
  3: [1, 3],
  4: [2, 1],
  5: [2, 2],
  6: [2, 3],
  7: [3, 1],
  8: [3, 2],
  9: [3, 3],
  '*': [4, 1],
  0: [4, 2],
  '#': [4, 3],
};

const keypad = {
  LEFT: 'L',
  RIGHT: 'R',

  solution(numbers, hand) {
    let currentLeft = '*';
    let currentRight = '#';
    let result = '';

    numbers.forEach((number) => {
      const currentHand = this.decideHand(
        number,
        hand,
        currentLeft,
        currentRight
      );

      result += currentHand;
      if (currentHand === this.LEFT) currentLeft = number;
      if (currentHand === this.RIGHT) currentRight = number;
    });

    return result;
  },

  decideHand(number, hand, previousLeft, previousRight) {
    if (number % 3 === 1) return this.LEFT;
    if (number % 3 === 0 && number !== 0) return this.RIGHT;
    if (number % 3 === 2 || number === 0)
      return this.decideMiddleLine(number, hand, previousLeft, previousRight);
  },

  decideMiddleLine(number, hand, previousLeft, previousRight) {
    const distanceLeft = this.calculateDistance(previousLeft, number);
    const distanceRight = this.calculateDistance(previousRight, number);

    if (distanceLeft < distanceRight) return this.LEFT;
    if (distanceLeft > distanceRight) return this.RIGHT;
    return this.userHand(hand);
  },

  userHand(hand) {
    if (hand === 'right') return this.RIGHT;
    return this.LEFT;
  },

  calculateDistance(current, next) {
    const currentIndex = LOCATION[current];
    const nextIndex = LOCATION[next];

    const x = Math.abs(currentIndex[0] - nextIndex[0]);
    const y = Math.abs(currentIndex[1] - nextIndex[1]);

    return x + y;
  },
};

keypad.solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
