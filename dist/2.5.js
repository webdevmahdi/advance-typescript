"use strict";
{
    // 
    let myFunc = (param, param2) => {
        return [param, param2];
    };
    console.log(myFunc('Bangladesh', 222));
    console.log(myFunc('Bangladesh', {
        name: 'Mahdi',
        role: 'founder'
    }));
    // 
    let func = (student) => {
        let next = 'Next laval web developer';
        return Object.assign(Object.assign({}, student), { next });
    };
    console.log(func({ name: 'Mahdi', age: 12, isStd: true }));
    // 
}
