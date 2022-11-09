const card=document.querySelector('.card')

const runPorgram=async ()=>{
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/books')
      const books = await response.json()
      .then((books)=>{
        console.log(books)
        card.innerHTML=''
        books.forEach(book => {
           console.log(books)
           card.innerHTML+=`
           <div class="container mt-5">
           <div class="row">
               <div class="col">
           <div class="card">
               <img src="${book.img}" class="card-img-top" alt="..." style="width:200px; height: 200px;">
               <div class="card-body">
                 <h5 class="card-title"> Title: ${book.title}</h5>
                 <p class="card-text">ID:${book.asin}</p>
                 <p>Price:${book.price}</p>
                 <p>Category:${book.category}</p>
                 <button id="addbuttn">Add to cart</button>
                 <button id="addbuttn">skip</button>
               </div>
               </div>
               </div>
             </div> `
        });
   })
    } catch (error) {
      console.error(error)
    }
}
runPorgram()



