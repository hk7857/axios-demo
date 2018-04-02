const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log('Server Response: ', resp);
}).catch( err => {
    console.log('There was an error: ', err.message);
});

const newItem = {
    title: 'Hanna new item - Cool!',
    details: 'details go here'
};

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then( resp => {
//     console.log('Add Response: ', resp);
// });

const itemId = '5ac278a9329150131fbbff64';

// http://api.reactprototypes.com/todos/5ac278a9329150131fbbff64?key=testuser1234
// http://api.reactprototypes.com/todos/id?key=testuser1234

axios.get(`${BASE_URL}/todos/${itemId + API_KEY}`).then( resp => {
    console.log('Single item resp: ', resp);
})