document.getElementById("button1").addEventListener('click', getText);
document.getElementById("button2").addEventListener('click', getJson);
document.getElementById("button3").addEventListener('click', getApi);

function getText() {
    fetch('text.txt')
      .then(res => res.text())
      .then(data => {
        document.getElementById("output").innerHTML = data
      })
      .catch(err => err);
}
function getJson() {
    fetch('user.json')
      .then(res => res.json())
      .then(data => {
        let output = '<h3 class ="mb-3">Users</h3>'
        data.forEach(user => {
            output += `
              <ul class="list-group mb-5">
                  <li class="list-group-item">ID: ${user.id}</li>
                  <li class="list-group-item">Name: ${user.name}</li>
                  <li class="list-group-item">Eamil: ${user.email}</li>
              </ul>
            `
        });
        document.getElementById('output').innerHTML = output
      })
}

function getApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        let output = '<h2 class ="mb-4">Posts</h2>'
        data.forEach(post => {
            output += `
                <div class ="card card-body mb-3">
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
                </div>  
            `
        });
        document.getElementById('output').innerHTML = output
      })
}

//https://jsonplaceholder.typicode.com/photos


