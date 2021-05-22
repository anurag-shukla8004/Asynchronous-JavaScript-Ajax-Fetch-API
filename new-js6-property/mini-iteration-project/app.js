const data = [{
  name:'Anurag shukla',
  age: 19,
  gender: 'male',
  lookingfor: 'femail',
  location: 'kanupur',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdFmiVkj5zX8AaXSVQaiaJWE9Kzl5NYOxOg&usqp=CAU'
},
{
  name:'kartik',
  age: 20,
  gender: 'male',
  lookingfor: 'femail',
  location: 'kanupur',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdFmiVkj5zX8AaXSVQaiaJWE9Kzl5NYOxOg&usqp=CAU'
},
{
  name:'Pratham mishra',
  age: 18,
  gender: 'male',
  lookingfor: 'femail',
  location: 'kanupur',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdFmiVkj5zX8AaXSVQaiaJWE9Kzl5NYOxOg&usqp=CAU'
}
]

// Iterator

let profiles = profielIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);


function nextProfile(){

  const currentprofile = profiles.next().value;
  console.log(currentprofile);

  document.getElementById('profileDisplay').innerHTML = `
  <ul class"list-group">
  <li class"list-group-item">Name: ${currentprofile.name} </li>
  <li class"list-group-item">Age: ${currentprofile.age} </li>
  <li class"list-group-item">Gender: ${currentprofile.gender} </li>
  <li class"list-group-item">Location: ${currentprofile.location} </li>
  <li class"list-group-item">Lookingfor: ${currentprofile.lookingfor} </li>
  </ul>`;

  document.getElementById('imageDisplay').innerHTML = `
  <img src="${currentprofile.image}">
  `;
}

function profielIterator(profiles){
  let index = 0;

  return{
    next: function(){
      return index < profiles.length ? 
      {value: profiles[index++], done: false}:
      {done: true}
    }
  };
}