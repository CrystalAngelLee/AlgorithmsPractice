/* 方案一：双重循环，时间复杂度O(n^2) */
var maxArea = function(height) {
  if(!height || height.length === 0) return 0;
  let max = 0, i, j;
  for (i = 0; i < height.length - 1; ++i) {
    for (j = i + 1; j < height.length; ++j) {
      let area = (j - i) * Math.min(height[i], height[j])
      max = Math.max(max, area)
    }
  }

  return max
}


/* 方案二: 时间复杂度O(n) */
var maxArea = function(height) {
  if(!height || height.length === 0) return 0;
  let max = 0, i, j;
  for (i = 0, j = height.length - 1; i < j;) {
    let minHeight = height[i] < height[j] ? height[i ++] : height[j --];
    let area = (j - i + 1) * minHeight;
    max = Math.max(max, area)
  }

  return max
}

/* 方案三: 时间复杂度O(n)，由于省去了方案二中的数学计算部分，比方案二快 */
var maxArea = function(height) {
  if(!height || height.length === 0) return 0;
  let max = 0, i, j;
  for (i = 0, j = height.length - 1; i < j;) {
    let minHeight = height[i] < height[j] ? height[i] : height[j];
    let area = (j - i) * minHeight;
    max = area > max ? area : max;
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max
}
