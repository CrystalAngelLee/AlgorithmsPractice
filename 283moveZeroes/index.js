var moveZeroes = function (nums) {
  if (!nums || !num.length) return;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[j++] = nums[i];
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
};

var moveZeroes = function (nums) {
  if (!nums || !nums.length) return;
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[j] = nums[i];
      if (i !== j) {
        nums[i] = 0;
      }
      j++;
    }
  }
};

var moveZeroes = function (nums) {
  if (!nums || !nums.length) return;
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j++] = temp;
    }
  }
};

var moveZeroes = function (nums) {
  if (!nums || !nums.length) return;
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i]) {
      [nums[j++], nums[i]] = [nums[i], nums[j]];
    }
  }
};
