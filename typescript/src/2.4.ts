{
    // 
    interface userDetails<T, X = null> {
        name: string;
        details: {
            age: number;
            stdtn: boolean;
            phone: number
        };
        smWatch: T,
        bike? : X
    }


    interface GeneralWatch {
        name: string;
        brand: string
    }
    let me : userDetails<GeneralWatch> = {
        name: 'Mahdi',
        details: {
            age: 103,
            stdtn: true,
            phone: 166588581
        },
        smWatch:{
            name: "Android watch",
            brand: "X-23aD"
        } 
    }
    
    interface AppleWatch {
        name: string;
        brand: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }
    interface Bike {
        name: string;
        brand: string;
        heartTrack: boolean
    }

    let friend : userDetails<AppleWatch, Bike> = {
        name: 'Mahdi',
        details: {
            age: 103,
            stdtn: true,
            phone: 166588581
        },
        smWatch:{
            name: "Apple watch",
            brand: "X-23aD",
            heartTrack: true,
            sleepTrack: true
        },
        bike:{
            name: "Yamaha",
            brand: "X-23aD",
            heartTrack: false
        } 
    }

    console.log(me, friend)



    // 
}