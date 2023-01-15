type Concat<T extends any[], U extends any[]> = [...T, ...U]

type res43 = Concat<[1], [2]>
