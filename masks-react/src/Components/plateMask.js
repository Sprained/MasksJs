export const plateMask = value => {
    return value
    .replace(/(\D)(\d{3})$/,"$1-$2")//Coloca hífen entre o teceiro e o quarto dígito
    .replace(/(\D{3})(\D)$/, "$1")//Não deixar digitar mais qualquer caracteres depois de 3 digitos
    .toUpperCase()//transformar todas as letras maiúsculas
}