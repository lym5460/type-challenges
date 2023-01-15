type MyExclude<T, U> = T extends U ? never : T

type a = MyExclude<'1' | '2' | '3', '4'>
