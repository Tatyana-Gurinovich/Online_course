let date = new Date()
console.log(date)//выводит полную дату, время, день недели и тд
console.log(date.getSeconds())//выводит секунды
console.log(date.getUTCDate())//выводит только номер дня в месяце
console.log(date.getFullYear())//выводит год
console.log(date.getMilliseconds())//выводит милисекунды
/* Для любого get есть set, т.е. с помощью set мы можем задавать другие параметры(день,год,дату и тд) */

console.log(date.getTime())//мы получаем таймштамп, который показывает количество милисекунд, которое прошло с 1 января 1970года