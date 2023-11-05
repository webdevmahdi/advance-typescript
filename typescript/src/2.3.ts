{
    // 
    let rolls : Array<string> = ["Mahdi", "Hasan", "Mahdi"];
    let bools : Array<boolean> = [true, false, true, false];

    type GenericArray<T> = Array<T>;
    let rose : GenericArray<string> = ['Mahdi', 'Hasan'];
    let friends : GenericArray<number> = [1,2,4,3];
    let bool : GenericArray<boolean> = [true, false, true, false];

    // console.log(rose, friends, bool)


    // Generic Array of Object
    type Generics<T> = Array<T>;

    let users : Generics<{name: string, age: number}> = [
        {
            name: 'Mahdi',
            age: 102
        },
        {
            name: 'Hasan',
            age: 230
        }
    ]
    // console.log(users)


    // Tuple generic
    type Generic<X,Y> = [X,Y]
    let mans : Generic<string, number> = ['Mahdi', 108672]
    // console.log(mans)


    // Generic for object
    type GenericObj<X,Y> = [X,Y]

    let mine : GenericObj<number, {name: string, age: number}> = [1231, {name: 'Mahdi', age: 111}];
    console.log(mine)
    // 
}