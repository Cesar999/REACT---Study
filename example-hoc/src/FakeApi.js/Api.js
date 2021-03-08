function getDataFromServer(id){
    return new Promise(resolve => setTimeout(()=>{
        const DATA_BASE = [
            {
                username: 'cesar-encinas',
                birth: '06/17/92',
                corp: 'Apple',
                position: 'UI Software Engineer',
            },
            {
                username: 'leslie-gaxiola',
                birth: '11/14/91',
                corp: 'Oomapasc',
                position: 'Human Resourses',
            },
            {
                username: 'ricardo-encinas',
                birth: '11/04/2017',
                corp: 'House',
                position: 'Spoiled Baby',
            },
            {
                username: 'ana-encinas',
                birth: '09/20/1993',
                corp: 'H&M',
                position: 'User Experience',
            },
            {
                username: 'manuel-encinas',
                birth: '12/26/1999',
                corp: 'Student',
                position: 'Software Engineer',
            }
        ];
        resolve(DATA_BASE[id]);
    }, 2000))
}

export default getDataFromServer;