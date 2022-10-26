// Set up state variables for our book data.
let bookData, userInput;

// variable for api key
const apiKey = 'AIzaSyBoGmNgzAJ-VEJYNN5PVRkZqEYJskVEGP4'

// variable for base url
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'

// store DOM variables

const $headingDiv = document.getElementById('heading')
const $fullDiv = document.getElementById('full')
const $authorDiv = document.getElementById('author')
const $descDiv = document.getElementById('desc')
const $pageDiv = document.getElementById('page')
const $img = document.getElementById('img')
const $input = $('#input')


// Store a reference to the input element

$('form').on('submit', getSubject);

// function that does book autobiography search
function getSubject(event) {
  event.preventDefault();

  // Assign value from input to userInput variable and use that value to modify AJAX request
  userInput = $input.val();
  console.log(userInput)

  // make initial request
  $.ajax({
    url: `${baseURL}q=intitle:${userInput}+subject:fantasy&key=${apiKey}`
  }).then(
    (data) => {
      console.log(data)
      bookData = data
      render()
    },
    (error) => {
      console.log('bad request', error)
    }
  )
  
}
  
// Create render function to transfer the data on line 2 to the DOM

function render() {
  $headingDiv.text(`Book Title: ` + userInput);
  $fullDiv.text(`Full Title: ` + bookData.items.title)
  $authorDiv.text(`Author: ` + bookData.items.author)
  $descDiv.text(`Summary: ` + bookData.items.description)
  $pageDiv.text(`Page Count: ` + bookData.items.pageCount)
  

}





// q=+subject:&key=apikeyvariable(use string interpolation)

// What do I do with the book image