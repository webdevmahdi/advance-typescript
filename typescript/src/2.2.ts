{
    //
    type User1 = {
        name: string;
        age: number
    }
    let user : User1 = {
        name: 'Mahdi',
        age: 120
    }

    // Interface 
    interface User2 {
        name: string;
        age: number;
        isStudent : boolean
    }
    let user1 : User2 = {
        name: 'Mahdi',
        age: 17,
        isStudent: true
    }
    console.log(user)
    console.log(user1)


    // Add extra value using extends
    interface User {
        name: string
    }
    interface Users2 extends User{
        role: string
    }
    let userDetails : Users2 = {
        name: "Mahdi",
        role: "Sr. Web developer"
    }
    // console.log(userDetails);


    // Interface for array 
    interface ArrayInt {
        [index: number] : number,
    }

    let array : ArrayInt = [1,2,3];
    console.log(array)

    


    // Interface for function
    interface Add {
        (num1 : number, num2 : number) : number
      }

      let addSum : Add = (num1, num2) => num1 + num2;
      console.log(addSum(21, 23))


    //
}