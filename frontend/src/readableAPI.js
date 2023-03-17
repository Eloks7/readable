const api = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'JWT'
}

export const getCategorries = () => 
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)