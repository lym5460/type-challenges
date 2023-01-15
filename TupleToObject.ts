const tuple = ["tesla", 1, "model X", "model Y"] as const;

type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]: K;
};

type res = TupleToObject<typeof tuple>;
