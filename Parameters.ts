type MyParameters<T extends (...args: any[]) => void> = T extends (
  ...arg: infer P
) => void
  ? P
  : never

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
