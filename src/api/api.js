import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

let categories = [
    {id: 1, name: 'gifts', values: 'gifts'},
    {id: 2, name: 'food', values: 'food'},
    {id: 3, name: 'drinks', values: 'drinks'},
    {id: 4, name: 'cinema', values: 'cinema'},
    { id: 5, name: 'salary', values: 'salary' },
    { id: 6, name: 'bonus', values: 'bonus' }
];

let transactions = [
    {id: '1', category: 5, description: 'First salary', amount: '22000',  date: 123456, type: 'income'},
    { id: '2', category: 6, description: 'Best bonus', amount: '5200', date: 123456, type: 'income'},
    { id: '3', category: 4, description: 'Film in cinema', amount: 210, date: 456123, type: 'expense'},
    { id: '4', category: 3, description: 'Coctail in bar', amount: 156, date: 789456, type: 'expense'}
];

export default {
    fetchCategories: () =>
        /*axios
            .get('/api/categories')
            .then(response => response.data)
            .catch(error => error),*/
        Promise.resolve({ categories }),

    addBill: data =>
        /*axios
            .post('/api/addBill', { data })
            .then(response => response.data)
            .catch(error => error.response.data),*/
        Promise.resolve({ status: 1 }),

    fetchTransactions: () =>
        /*axios
            .get('/api/bills')
            .then(response => response.data)
            .catch(error => error),*/
        Promise.resolve({ transactions }),

    editBill: (data) => Promise.resolve({ status: 1 }),
}
