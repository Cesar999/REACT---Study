let users = [
    {
        username: 'CesarEncinas',
        position: 'UI Software Engineer',
        birthDay: '06-17-92',
        id: 0
    },
    {
        username: 'LeslieGaxiola',
        position: 'Human Resources',
        birthDay: '11-14-91',
        id: 1
    },
    {
        username: 'Ricardo Encinas',
        position: 'Playing at Home',
        birthDay: '11-04-17',
        id: 2
    },
    {
        username: 'Rafael Encinas',
        position: 'Football Player',
        birthDay: '09-07-23',
        id: 3
    },
    {
        username: 'Rebeca Encinas',
        position: 'Medical Doctor',
        birthDay: '10-15-21',
        id: 4
    }
]

function getUserByID(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            for(let user of users){
                if(user.id === id){
                    res(user);
                }
            }
            rej('User with that ID does not exist')
        }, 1000);
    });
}

function postUser(newUser){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            users =[...users, newUser];
            res(newUser);
        }, 1000);
    });
}

function removeUser(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            users = users.filter(user=>user.id!==id);
            res(id);
        }, 1000);
    });
}

export {getUserByID, postUser, removeUser};