function threeSum(n: number[]): number[][] {
  // 数组长度小于3，直接返回空数组
  if (n.length < 3) return []
  // 先从小到大排序
  const nums = n.sort((a, b) => a - b)
  const res: number[][] = []
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1
    let r = nums.length - 1
    if (nums[i] === nums[i - 1]) {
      continue
    }
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        // 去重
        while (nums[l] === nums[l + 1]) {
          l++
        }
        while (nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      }
      if (sum < 0) {
        l++
      }
      if (sum > 0) {
        r--
      }
    }
  }
  return res
}
