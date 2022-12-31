function solution(numbers, hand) {
  const HAND = { LEFT: 'L', RIGHT: 'R' };
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
  let currentLeft = '*';
  let currentRight = '#';
  let result = '';

  const decideHand = (number, hand, previousLeft, previousRight) => {
    if (number % 3 === 1) return HAND.LEFT;
    if (number % 3 === 0 && number !== 0) return HAND.RIGHT;
    if (number % 3 === 2 || number === 0)
      return decideMiddleLine(number, hand, previousLeft, previousRight);
  };

  const decideMiddleLine = (number, hand, previousLeft, previousRight) => {
    const distanceLeft = calculateDistance(previousLeft, number);
    const distanceRight = calculateDistance(previousRight, number);

    if (distanceLeft < distanceRight) return HAND.LEFT;
    if (distanceLeft > distanceRight) return HAND.RIGHT;
    return userHand(hand);
  };

  const userHand = (hand) => {
    if (hand === 'right') return HAND.RIGHT;
    return HAND.LEFT;
  };

  const calculateDistance = (current, next) => {
    const currentIndex = LOCATION[current];
    const nextIndex = LOCATION[next];

    const x = Math.abs(currentIndex[0] - nextIndex[0]);
    const y = Math.abs(currentIndex[1] - nextIndex[1]);

    return x + y;
  };

  numbers.forEach((number) => {
    const currentHand = decideHand(number, hand, currentLeft, currentRight);
    result += currentHand;
    if (currentHand === HAND.LEFT) currentLeft = number;
    if (currentHand === HAND.RIGHT) currentRight = number;
  });

  return result;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
