type Shift<T extends any[]> = T extends [infer R, ...infer P] ? P : never

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Shift<arr1> // expected to be ['b', 'c', 'd']
type re2 = Shift<arr2> // expected to be [2, 1]
