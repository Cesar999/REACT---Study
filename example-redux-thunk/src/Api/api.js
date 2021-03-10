const users = [
    {
        email: "ricardo_reg@hotmail.com",
        favoriteColor: "0000ff",
        username: "Ricardo",
        age: 3,
        sex: "male"
    }
]

const getUserAPI = (name) => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const temp = users.filter(user=>user.username === name);
            res(temp[0]);
        }, 1000);
    })
};

const postUserAPI = (user) => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            users.push(user);
            res(user);
        }, 1000);
    })
}

export {getUserAPI, postUserAPI};