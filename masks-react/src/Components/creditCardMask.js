export const creditCardNumber = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{4})(\d)/, '$1 $2') // captura 2 grupos de numero o primeiro de 4 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um espaço antes do segundo grupo de numero
    .replace(/(\d{4})(\d)/, '$1 $2') // captura 2 grupos de numero o primeiro de 4 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um espaço antes do segundo grupo de numero
    .replace(/(\d{4})(\d)/, '$1 $2') // captura 2 grupos de numero o primeiro de 4 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um espaço antes do segundo grupo de numero
}

export const creditCardEpiry = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de numero o primeiro de 2 e o segundo de 1, apos capturar o primeiro grupo ele adiciona uma / antes do segundo grupo de numero
}