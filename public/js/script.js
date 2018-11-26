const pay = document.querySelector("#payBtn")
const about = document.querySelector("#aboutBtn")
const home = document.querySelector("#homeBtn")
const payCon = document.querySelector("#client")
const aboutCon = document.querySelector("#about")
const item = document.getElementsByClassName("item")
const selectImg = document.querySelector("#selectImg")
const selectPrice = document.querySelector("#pri")

const avai = document.querySelector("#avai")
let totalView = document.querySelector("#totalView")

let source = ""
let justPrice = ""
let count = ""
let total = 0


Array.from(item).forEach(function(element, i) {
  // if item sold out
  if(Number(item[i].querySelector("h3").textContent) == 0){
    item[i].querySelector("img").src = "images/sold.jpg"
  }
  
  element.addEventListener('click', function() {
    const price = item[i].querySelector("h2").textContent
    let itemImage = item[i].querySelector("img").src
    // if the item is clicked and  is not sold out
    if(Number(item[i].querySelector("h3").textContent) > 0){
      selectImg.src = itemImage
      selectPrice.textContent = price
      source = itemImage.slice(22, itemImage.length)
      justPrice = item[i].querySelector("h2").textContent
      count = item[i].querySelector("h3").textContent
    }
  })
})

home.addEventListener("click", function(e) {
  payCon.style.display = "grid"
  aboutCon.style.display = "none"
})

about.addEventListener("click", function(e) {
  aboutCon.style.display = "grid"
  payCon.style.display = "none"
})


pay.addEventListener('click', function(e) {
  //cash float
  let mon = Number(justPrice.substr(1))
  total =+ mon
  totalView.value = total

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
