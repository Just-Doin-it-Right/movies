let serarchResult = document.getElementById('searchresult')
let allCards = document.querySelector('.allcards')
let cardContainer = document.querySelector('.card_container')
const body = document.body
let serarchbtn = document.getElementById('searchbtn')
serarchbtn.addEventListener('click', () => {

  let searchtxt = serarchResult.value
  let url = `http://www.omdbapi.com/?apikey=caf49d7e&s=${searchtxt}&plot=Short`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.Search.forEach(value => {
        let url2 = `http://www.omdbapi.com/?apikey=caf49d7e&i=${value.imdbID}`
        fetch(url2)
          .then((result) => result.json())
          .then((thedata) => {
            console.log(thedata)
              let hi = document.createElement('div')
              hi.innerHTML = ` <div class="col">
            <div class="card border-dark bg-transparent">
              <img src="${value.Poster}" onerror="this.onerror=null;this.src='images/imageError.jpg';" alt="${value.Title} img">
              <div class="card-body bg-dark text-light h-100">
                <h5 class="card-title">${value.Title}</h5>
                <p class="card-text">Year: ${value.Year}</p>
                <p class="badge bg-primary text-wrap">${thedata.Ratings[0].Value}</p>
                <p class="card-text">${thedata.Rated}</p>
              </div>
            </div>
          </div>`
              cardContainer.append(hi)
          })


      });
    })
    .catch((error) => console.log("error", error))
})
