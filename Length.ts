type Length<T extends readonly any[]> = T['length']

type arr = [1, 2, 3]

type res1 = Length<arr>
