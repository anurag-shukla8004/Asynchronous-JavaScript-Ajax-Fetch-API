document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExtermal);


// Local text file data

function getText(){
  fetch('text.txt')
  .then(function(res){
    console.log(res);
    return res.text();
  })
  .then(function(data){
   
    document.getElementById('output').innerHTML = data;
  })
}

// JSON text file data
 
function getJson(){
  fetch('customer.json')
  .then(function(res){

    return res.json();
  })
  .then(function(data){
    console.log(data);

    let output = '';
    data.forEach(function(post){
       output += `<li>${post.name}</li>`;
    })


    document.getElementById('output').innerHTML = output;
  })
}


// external API text file data
 
function getExtermal(){
  fetch('https://api.github.com/users')
  .then(function(res){

    return res.json();
  })
  .then(function(data){
    console.log(data);

    let outpu = '';
    data.forEach(function(user){
       outpu += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = outpu;
  })
}