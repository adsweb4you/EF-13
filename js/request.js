


 

    // load blog
    
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data =>  {
//      for (let s = 0; s < data.length; s++) {
//         const dat = data[s];
//         document.querySelector(".row").innerHTML += `
//         <div class="col-md-4 mb-3">
//         <div class="card" ">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${dat.title}</h5>
//           <p class="card-text">${dat.body}</p>
//           <a href="blogdetals.html" class="btn btn-primary road"  data-id="${dat.id}">სრულეად ნახვა</a>
//         </div>
//       </div>
//       </div>`
// }
    
// let allroad = document.querySelectorAll(".road");

// for (let s = 0; s < allroad.length; s++) {
//     const clk = allroad[s];
//     clk.addEventListener("click", function (e) {
     
//   let id  =   this.getAttribute('data-id');
  
//   localStorage.setItem('id', id);

        
//     })
// }
//     }

//     )


 
 



// let vews  = document.querySelector('.blogviews');

// vews.addEventListener("click", function (e) {
//     e.preventDefault();

//     loads();
 


 
// })  

 
  let jsons  = '{"name":"gio", "age":"25", "role":{"role1":"admin", "role2":"User"}}';
// let jsonarray   = '["name1", 25, "sadd"]';

// let User = {
//     name:"admins",
//     age:45,
//     role:"admin1"
// }


// let stringefuser = JSON.stringify(User);



//  let parsedjson = JSON.parse(stringefuser);


fetch('https://fakestoreapi.com/products')
.then(resp => resp.json())
.then(resp => {
    for (let i = 0; i < resp.length; i++) {
        const obj = resp[i];
        document.querySelector(".row").innerHTML += `
        <div class="col-md-4 mb-3">
        <div class="card" ">
        <img src="${obj.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${obj.title}</h5>
          <p class="card-text">${obj.description}</p>
           
          <p class="card-text text-success">${obj.price} ₾</p>
          <a href="blogdetals.html" class="btn btn-primary road"  data-id="${obj.id}">კალათაში დამატება</a>
        </div>
      </div>
      </div>`
    }
    let idarray = [];
let allroad = document.querySelectorAll(".road");

for (let s = 0; s < allroad.length; s++) {
    const clk = allroad[s];
    clk.addEventListener("click", function (e) {
     e.preventDefault();
  let id  =   this.getAttribute('data-id');
  
  this.innerHTML = "დამატებულია";
  this.setAttribute('disabled', 'disabled');
  this.classList.add('btn-danger');
  this.classList.remove('btn-primary');
  idarray.push(id);

  let idjson = JSON.stringify(idarray);

  localStorage.setItem('ids', idjson)

//   let lastarray = idarray; 

  //console.log(idarray)
        
    })
}

})

// console.log(parsedjson);

 