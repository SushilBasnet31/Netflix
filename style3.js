
// higher order function


// console.log("hello babe")

//  async function getdata(){
//     const fetcheddata = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // const data = await fetcheddata.json()
//     console.log(fetcheddata)
// }
// getdata()

// console.log("byee")


// arr = [1,2,3,4,5]

//  let a = arr.map((e)=>{     // .map() le arr ko harek element ma funciton le garne kaam garxa

//     console.log(e)           //  palai palo arr ko element lai print garxa


//     // return e*e  !=9         // yesle  paile harek element ko square calculate garxa ani 9 snga equal xa kinai bhanera herxa ani bool value nikalxa

//     return e*6
// })

// console.log(a)

// let n = "Sushil"

// console.log(`My name is ${n}`)  // this is called string interpolation method to show output


const  form = document.querySelector(".moviefinder")
const movieContainer = document.querySelector(".movieContainer")
const APIKEY = '3986353e'

form.addEventListener("submit" , async(e)=>{

    e.preventDefault()  

    const movieName = document.querySelector(".movieInput").value.trim()
    
    if ( movieName  === ""){
        alert("Please enter the movie name")
        return
    }
  
  try { 


    const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${APIKEY} `)

    const data = await response.json()
    console.log(data)

    if(data.Response === "True" ){
        movieContainer.innerHTML = data.Search.map((movie)=>{
            return `<div class="movie-card">
                <img src = "${movie.Poster!== 'N/A' ? movie.Poster: "https://via.placeholder.com/150" }"  alt = "movie"/>
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>    
            </div>`

        }) .join("")

        
    }
     else {
        movieContainer.innerHTML = `<h2 class="error">Movie not found</h2>`
    }
}

    catch (error) {
        console.error("Error fetching data:", error);
        movieContainer.innerHTML = `<h2 class="error">Something went wrong. Please try again later.</h2>`;
    }

    

})









