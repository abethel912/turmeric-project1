// Set up state variables for our book data.
let bookData, userInput;

// variable for api key
const apiKey = 'AIzaSyBoGmNgzAJ-VEJYNN5PVRkZqEYJskVEGP4'

// variable for base url
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'

// store DOM variables

const $headingDiv = $('#heading')
const $fullDiv = $('#full')
const $authorDiv = $('#author')
const $descDiv = $('#desc')
const $pageDiv = $('#page')
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
      bookData = data;
      for (let i = 0; i < bookData.length; i++) {
        console.log(i)
      }
      
      $headingDiv.text(userInput);
      $fullDiv.text(bookData.items[0].volumeInfo.title)
      $authorDiv.text(bookData.items[0].volumeInfo.authors)
      $descDiv.text(bookData.items[0].volumeInfo.description)
      $pageDiv.text(`Page Count: ` + bookData.items[0].volumeInfo.pageCount)

    
    },
    (error) => {
      console.log('bad request', error)
    }
  )
  
}
  
// Create render function to transfer the data on line 2 to the DOM









// q=+subject:&key=apikeyvariable(use string interpolation)

// What do I do with the book image