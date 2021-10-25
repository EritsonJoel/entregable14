
const url = "https://jsonplaceholder.typicode.com/users"


let datos = []


$.get("https://jsonplaceholder.typicode.com/users"  , (respuesta, estado) =>{

datos = respuesta

datos.forEach((d) =>{
    $('ul').append(
   
        `
     <li>
     <h3>${d.name}</h3>
     <h3>${d.email}</h3>
     </li>
        
        `


    )

})

})