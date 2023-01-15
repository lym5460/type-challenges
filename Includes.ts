type Includes<T extends any[], U extends any> = U extends T[number]
    ? true
    : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'>
