function requestQuote (data) {
    localStorage.setItem('query-type', data);
}

function getQuote () {
    localStorage.getItem('query-type');
    console.log("testing the get function");
}