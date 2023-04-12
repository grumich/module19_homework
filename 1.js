/*1е Задание
Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
только собственных свойств. Данная функция не должна возвращать значение.*/
function checkKeyValue (obj){
    for (let key in obj) {
     console.log(key+ ': ' + obj[key]);
     }
   }
    
   const userIvanov = {
     name: 'Иван',
     surname: 'Иванов',
     age: '25'
   }
   
   checkKeyValue(userIvanov);