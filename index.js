const card=document.querySelector('.row')

const runPorgram=async ()=>{
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/books')
      const books = await response.json()
        console.log(books)
        card.innerHTML=''
        books.forEach(book => {
           console.log(books)
           card.innerHTML+=`<div id="cardcontent" class="col-4">
           <div class="card mt-3">
               <img src="${book.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">Tittle${book.title}</h5>
                 <p class="card-text">ID:${book.asin}</p>
                 <p>Price:$ ${book.price}</p>
                 <p>Category:${book.category}</p>
                 <a href="#" id='addbutton'onclick='addCart()' class="btn btn-primary">Add to cart</a>
                 <a href="#" class="btn btn-primary">skip</a>
               </div>
             </div>
         </div>`
    });
    } catch (error) {
      console.error(error)
    }
}
const carousel=document.querySelector('.carousel-inner')
const carouselPic=async ()=>{
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/books')
      const books = await response.json()
        console.log(books)
        carousel.innerHTML=''
        books.forEach(book => {
           console.log(books)
           carousel.innerHTML+=`
              <div class="carousel-item active">
                <img src="${book.img}" class="d-block w-100" alt="...">
              </div>`
    
    });
    } catch (error) {
      console.error(error)
    }
}

carouselPic()
window.onload=runPorgram

function addCart(){
 const ul=document.querySelector('#cartAdd')
 ul.innerHTML+=`<div id="cardcontent" class="col-4">
 <div class="card mt-3">
     <img src="${book.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Tittle${book.title}</h5>
       <p class="card-text">ID:${book.asin}</p>
       <p>Price:$ ${book.price}</p>
       <p>Category:${book.category}</p>
       <a href="#" id='addbutton'class="btn btn-primary">Add to cart</a>
       <a href="#" class="btn btn-primary">skip</a>
     </div>
   </div>
</div>`
}

