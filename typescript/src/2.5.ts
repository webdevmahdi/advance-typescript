{
    // 
    let myFunc = <T, Q> (param: T, param2: Q) : [T, Q] =>{
        return [param, param2];
    }
    interface User {
        name: string;
        role: string
    }
    console.log(myFunc<string, number> ('Bangladesh', 222))
    console.log(myFunc<string, User> ('Bangladesh', {
        name:'Mahdi',
        role:'founder'
    }))
    


    // 
    let func = <T> (student : T) => {
        let next = 'Next laval web developer';
        return {
            ...student,
            next
        }
    }

    console.log(func({name: 'Mahdi', age: 12, isStd: true}))

    // 
}