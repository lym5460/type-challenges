// 利用infer推断得到Promise包裹内容，如果仍然是promise那么就递归获取最终类型，最终返回;
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T

type ExampleType = Promise<Promise<number>>

type Result = MyAwaited<ExampleType> // string
