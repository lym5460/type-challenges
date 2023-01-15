import { Expect, Equal } from '@type-challenges/utils'
type HelloWorld = string

type cases = Expect<Equal<HelloWorld, string>>
