console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogContainer = document.querySelector("div#dog-image-container")
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedDropdown = document.querySelector("#breed-dropdown")

fetch(imgUrl)
    .then(response => response.json())
    .then((imgArray) => {
    helperMethod(imgArray)
})
// write a helper method after the fetch
// pass in the JSON object as an argument
// call forEach() on the array (JSON object), then pull out each individual element
// create a new <img> tag
// assign the individual element as the src for the <img> tag
// add the new <img> element to the div for all the dogs
function helperMethod(imgArray) {
  imgArray.message.forEach((imgLink) => {
    let dogImg = document.createElement("img")
    dogImg.src = imgLink
    dogContainer.append(dogImg)
  })
}

fetch(breedUrl)
    .then(response => response.json())
    .then((breedObj) => {
    const breedArray = Object.keys(breedObj.message)
    const listTag = document.querySelector("#dog-breeds")
    //we are going iterate through elements
    //create <li></li>
    //put the dog text inside <li></li>
    //then we have to append that li into <ul></ul>
    breedArray.forEach((breed) => {
      const tagLi = document.createElement("li")
      tagLi.innerText = breed
      listTag.append(tagLi)
      tagLi.addEventListener("click", (evt) => {
        //use DOM style property to change the color
        tagLi.style.color = "purple"
      })
    })
})

breedDropdown.addEventListener("change", (evt) => {
  
})