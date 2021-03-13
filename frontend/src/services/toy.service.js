// import axios from 'axios'
import { utilService } from '../services/util.service.js';
// import { storageService } from './storage.service.js';
// import { asyncStorageService } from './async-storage.service.js';
import { httpService } from './http.service.js';
const KEY = 'toys';
const TOY_URL = (process.env.NODE_ENV !== 'development') ? '/api/toy/'
: '//localhost:3030/api/toy/';
// 'http://localhost:3030/api/toy/'

var gFilterBy = {txt: '', pageIdx: 0}
// var gToys = _createToys();

export const toyService = {
    query,
    // toggleCompleted,
    remove,
    getEmptyToy,
    save,
    getToyById,
    setFilter,
    nextPage
};

function setFilter(filterBy) {
    gFilterBy.txt = filterBy.txt
    gFilterBy.pageIdx = 0;
}
function nextPage() {
    gFilterBy.pageIdx++
}

function query(filterBy) {
    return httpService.get('toy', { params: filterBy})
    // return axios.get(TOY_URL, { params: filterBy})
    //     .then(res => res.data)
        //  { params: gFilterBy }
    // return asyncStorageService.query(KEY)
    // return JSON.parse(JSON.stringify(gToys));
}

// function toggleCompleted(id, currTime) {
//     const toy = gToys.find((toy) => toy._id === id);
//     toy.completedAt = currTime;
//     _saveToysToStorage(gToys);
// }

function remove(id){
    return httpService.delete('toy/' + id)
    // return axios.delete(TOY_URL + id).then(res => res.data)
    // return asyncStorageService.remove(KEY, id)
    // const idx = gToys.find(toy => toy._id === id);
    // gToys.splice(idx,1);
    // _saveToysToStorage(gToys);
}

function save(toy){
    if (toy._id) {
        return httpService.put('toy/' + toy._id, toy)
        // return axios.put(TOY_URL + toy._id, toy).then(res => res.data)
    } else {
        return httpService.post('toy', toy)
        // return axios.post(TOY_URL, toy).then(res => res.data)
    }

    // const savedToy = (toy._id) ? asyncStorageService.put(KEY, toy) : asyncStorageService.post(KEY, toy)
    // return savedToy;
    // if(newToy._id){
    //     const idx = gToys.find(toy => toy._id === newToy._id);
    //     if(idx<0) return;
    //     gToys.splice(idx,1,newToy);
    // }else{ 
    //     newToy._id = utilService.makeId();
    //     gToys.unshift(newToy);}
    // _saveToysToStorage(gToys);
}

function getEmptyToy(){
    return { 
        name: '', 
        price: 0,
        type: null, 
        createdAt: null, 
        inStock: true
    }
}

function getToyById(id){
    return httpService.get('toy/' + id)
    // return axios.get(TOY_URL + id).then(res => res.data)
    // return asyncStorageService.get(KEY, id)
    // return gToys.find(toy => toy._id === toyId)
}

function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    // let toys = storageService.load(TODO_KEY);
    if (!toys || !toys.length) {
        toys = [
            {
                "_id": utilService.makeId(),
                "name": "nec eget",
                "price": 60,
                "type": "Educational",
                "createdAt": 152347895021110,
                "inStock": false
                },
                {
                "_id": utilService.makeId(),
                "name": "dui ac",
                "price": 8,
                "type": "Funny",
                "createdAt": 152347895032643,
                "inStock": false
                },
                {
                "_id": utilService.makeId(),
                "name": "massa et",
                "price": 96,
                "type": "Educational",
                "createdAt": 152347895034643,
                "inStock": false
                },
                {
                    "_id": utilService.makeId(),
                    "name": "consequat curabitur",
                    "price": 58,
                    "type": "Funny",
                    "createdAt": 152347892032643,
                    "inStock": false
                    },
        ];
        localStorage.setItem(KEY, JSON.stringify(toys))

    }
    // _saveToysToStorage(toys)
    return toys;
}


// function _saveToysToStorage(value){
//     storageService.store(TODO_KEY, value);
// }
