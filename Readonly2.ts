type MyReadonly2<T, U extends keyof T> = {
  [K in Exclude<keyof T, U>]: T[K]
} & {
  readonly [K in U]: T[K]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK
