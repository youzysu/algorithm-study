function solution(nums) {
  let kind = new Set(nums);
  let mid = nums.length / 2;
  return Math.min(mid, kind.size);
}
