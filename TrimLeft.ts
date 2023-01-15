type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : T

type a = TrimLeft<'  sdfsdf'>
