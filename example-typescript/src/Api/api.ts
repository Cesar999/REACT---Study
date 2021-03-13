import Pokemon from '../Utilities/utilities';

async function getRandomPoke() {
    const response = await fetch(`http://localhost:3002/getRandomPoke`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        }
    })
    return response.json();
}

async function getAllTeam() {
    const response = await fetch(`http://localhost:3002/getAllTeam`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        }
    })
    return response.json();
}

async function getPoke(id:number) {
    const response = await fetch(`http://localhost:3002/getPoke/${id}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        }
    })
    return response.json();
}

async function postPoke(newPoke:Pokemon) {
    const response = await fetch(`http://localhost:3002/postPoke`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPoke)
    })
    return response.json();
}

async function deletePoke(id:number) {
    const response = await fetch(`http://localhost:3002/deletePoke/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        }
    })
    return response.json();
}

async function putPoke(newPoke:Pokemon, id:number) {
    const response = await fetch(`http://localhost:3002/putPoke/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPoke)
    })
    return response.json();
}
  
export {getRandomPoke, getAllTeam, getPoke, postPoke, deletePoke, putPoke};