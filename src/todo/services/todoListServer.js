import axios from 'axios';

let baseUrl = 'http://localhost:3030/list';

function getAllItems(){
    return axios
    .get(baseUrl)
    .then(response => response.data);
}

function save(item){
    if(item.id === 0){
        return axios.post(baseUrl, item).then(response => response.data);
    } else {
        return axios.put(`${baseUrl}/${item.id}`, item).then(response => response.data);
    }
}

export default { getAllItems, save };