/*3е Задание 
Напишите функцию, которая создает пустой объект, но без прототипа.*/


function newObj(){
    const user = new Object();
    console.log(user);
    console.log(user.isPrototypeOf());
   }
  
  newObj();