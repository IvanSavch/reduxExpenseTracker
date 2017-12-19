import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';
let categories = [
    {id: 1, name: 'gifts', values: 'gifts'},
    {id: 2, name: 'food', values: 'food'},
    {id: 3, name: 'drinks', values: 'drinks'},
    {id: 4, name: 'cinema', values: 'cinema'}
];

let bills = [
    {id: '1', title: 'food1', category: 'food', description: 'desc1', amount: '55'} ,
    {id: '2', title: 'food2', category: 'food', description: 'desc2', amount: '63'}
];

export default {
    fetchCategories: () =>
        /*axios
            .get('/api/categories')
            .then(response => response.data)
            .catch(error => error),*/
        Promise.resolve({categories}),

    addBill: data =>
        axios
            .post('/api/addBill', { data })
            .then(response => response.data)
            .catch(error => error.response.data),

    fetchBills: () =>
        /*axios
            .get('/api/bills')
            .then(response => response.data)
            .catch(error => error),*/
        Promise.resolve({bills}),
}
