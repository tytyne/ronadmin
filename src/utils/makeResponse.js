const emailUser = ["Email"]
const idUser=["Id"]
const firstnameUser=["FirstName"]
const lastnameUser=["LastName"]
const userId=["UserID"]
const  UserActivityIP=["UserActivityIP"]
export const makeModerator =(Moderator)=>{
    if(Moderator===true){
        return 1
    }

    if(Moderator===false){
        return 0
    }
    
   
}
export const makeStatus =(EventStatus)=>{
    if(EventStatus==="active"){
        return 1
    }
    if(EventStatus==="unactive"){
        return 2
    }
    

    else{
    return 2
    }

}


export const makeEmailArray = (array) =>
    array.map((object) =>
        emailUser.reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {})
    );

    export const makeUserIdArray = (array) =>
    array.map((object) =>
        userId.reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {})
    );
    export const makeIdArray = (array) =>
    array.map((object) =>
        idUser.reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {})
    );
    export const makeFirstnameArray = (array) =>
    array.map((object) =>
        firstnameUser.reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {})
    );
    export const makeLastnameArray = (array) =>
    array.map((object) =>
        lastnameUser.reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {})
    );
    export const makeUseIP = (array) =>
    array.map((object) =>
    UserActivityIP.reduce((a, b) => {
            a[b] = object[b];
            return a;
        }, {})
    );
