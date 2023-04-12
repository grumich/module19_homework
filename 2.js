/* 2е Задание 
Напишите функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function showProps(obj, objKeyName) {
    console.log(objKeyName in obj);
}

const student1 = {
   name: "Alex", 
   ownCity: "Tver",
   age: 19,
   course: "Frontend"
 };


 showProps(student1, "same");  
 showProps(student1, "name"); 