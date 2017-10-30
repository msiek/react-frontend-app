//ItemService.js

import axios from 'axios';

class ItemService {

    sendData(data){
        axios.post('http://localhost:4200/items/add/post', {
            item: data
        })
            .then(function (reponse) {
                console.log(reponse);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default ItemService;