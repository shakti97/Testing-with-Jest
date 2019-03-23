const fetch=require('node-fetch');
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>response.json())
        .then(json=>callback(json))
}
function callback(data){
    console.log(data);
}


module.exports=fetchData;