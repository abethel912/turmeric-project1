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
const $genreDiv = document.getElementById('genre')
const $pageDiv = document.getElementById('page')
const $input = $('#input')

// Store a reference to the input element

$('form').on('submit', getSubject);

// function that does book autobiography search
function getSubject(event) {
  console.log(event)
  event.preventDefault();

  // Assign value from input to userInput variable and use that value to modify AJAX request
  userInput = $input.val();
  console.log(userInput)

  // make initial request
  $.ajax({
    url: `${baseURL}q=${userInput}&key=${apiKey}`,
  })
    .then(
    (data) => {
      console.log(data)
      bookData = data;
      render();
    },
      (error) => {
        console.log('bad request', error);
}
  )
    // render the data
}
  
// Create render function to transfer the data on line 2 to the DOM

// function render() {
//   $headingDiv.text(`Book Title: ` + userInput);
//   $fullDiv.text(`Full Title: ` + bookData.items.title)

// }





// q=+subject:&key=apikeyvariable(use string interpolation)

// What do I do with the book image