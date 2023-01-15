type Push<T extends any[], U extends any> = [...T, U]

type DFGFGS = Push<[1, 2], '3'>
