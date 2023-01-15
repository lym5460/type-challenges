type First<T extends any[]> = T extends [...any[], infer P] ? P : never

type arr1 = [1, 2, 3]

type r = First<arr1>
