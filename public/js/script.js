const pay = document.querySelector("#payBtn")
const about = document.querySelector("#aboutBtn")
const home = document.querySelector("#homeBtn")
const payCon = document.querySelector("#client")
const aboutCon = document.querySelector("#about")
const item = document.getElementsByClassName("item")
const selectImg = document.querySelector("#selectImg")
const selectPrice = document.querySelector("#pri")

let source = ""
let justPrice = ""
let count = ""

Array.from(item).forEach(function(element, i) {
  element.addEventListener('click', function() {
    const price = item[i].querySelector("h2").textContent
    const itemImage = item[i].querySelector("img").src
    selectImg.src = itemImage
    selectPrice.textContent = price
    source = itemImage.slice(22, itemImage.length)
    justPrice = item[i].querySelector("h2").textContent
    count = item[i].querySelector("h3").textContent
  })

})

// pay.addEventListener("click", function(e){
//   payCon.style.display = "grid"
//   aboutCon.style.display = "none"
// })

home.addEventListener("click", function(e) {
  payCon.style.display = "grid"
  aboutCon.style.display = "none"
})

about.addEventListener("click", function(e) {
  aboutCon.style.display = "grid"
  payCon.style.display = "none"
})

pay.addEventListener('click', function() {
  console.log(selectPrice.value)
  fetch('messages', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'image': source,
        'count': Number(count)
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
});
