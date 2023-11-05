"use strict";
{
    //
    let func = (student) => {
        let next = 'Next laval web developer';
        return Object.assign(Object.assign({}, student), { next });
    };
    console.log(func({ name: 'Mahdi', age: 12, id: 22, email: "mahdihasan0170525@gmail.com", isStd: true }));
    console.log(func({ name: 'Mahdi', age: 12, id: 22, email: "mahdihasan0170525@gmail.com" }));
    //
}
