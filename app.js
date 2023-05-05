//fetch data from an external api
//consume promise
//convert json
//loop
//append

fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json();
})
    .then(data => {
        data.forEach(user => {
            const markdown = `<li>${user.name}</li>`
            const markdown2 = `<li>${user.email}</li>`
            document.querySelector('ul').insertAdjacentHTML('beforeend', markdown)
            document.querySelector('ul').insertAdjacentHTML('beforeend', markdown2)
            
    })
    })
.catch(error => console.log(error))