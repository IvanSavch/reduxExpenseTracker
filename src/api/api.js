import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export default {
    fetchCategories: () =>
        axios
            .get('/api/categories')
            .then(response => response.data)
            .catch(error => error),

    addBill: data =>
        axios
            .post('/api/addBill', { data })
            .then(response => response.data)
            .catch(error => error.response.data),

    fetchBills: () =>
        axios
            .get('/api/bills')
            .then(response => response.data)
            .catch(error => error),
}
