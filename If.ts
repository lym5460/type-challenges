type If<T extends boolean, U, K> = T extends true ? U : K

type A = If<false, 'a', 'b'>
