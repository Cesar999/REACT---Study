import './ShowData.css';

function ShowData({username, age, email, sex, favoriteColor}){
    return (
        <div className="ShowData">
            <span><strong>username: </strong>{username}</span>
            <span><strong>age: </strong>{age}</span>
            <span><strong>email: </strong>{email}</span>
            <span><strong>sex: </strong>{sex}</span>
            <span><strong>favoriteColor: </strong>{favoriteColor}</span>
        </div>
    )
}

export default ShowData;
