type Wrap<T extends readonly any[]> = T extends readonly [infer R, ...infer Rest]
  ? R extends Promise<infer V>
    ? [V, ...Wrap<Rest>]
    : [R, ...Wrap<Rest>]
  : []

declare function PromiseAll<T extends readonly any[]>(v: any[]): Promise<[...Wrap<T>]>

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

const params = [promise1, promise2, promise3] as const

type res = typeof PromiseAll<typeof params>
