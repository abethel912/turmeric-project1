// Set up state variables for our book data.
let bookData, userInput;

// variable for api key
const apiKey = 'AIzaSyBoGmNgzAJ-VEJYNN5PVRkZqEYJskVEGP4'

// variable for base url
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'

// store DOM variables

const $headingDiv = $('#heading')
const $imgDiv = $('#img')
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
  $('#search').empty();

  // Assign value from input to userInput variable and use that value to modify AJAX request
  userInput = $input.val();
  console.log(userInput)

  // make initial request
  $.ajax({
    url: `${baseURL}q=intitle:${userInput}+subject:fantasy&printType=books&key=${apiKey}&maxResults=40`
  }).then(
    (data) => {
      console.log(data)
      bookData = data
      for (let i = 0; i < data.items.length; i++) {
        console.log(data.items[i].volumeInfo)
        $('#search').append(`<h1>${data.items[i].volumeInfo.title}</h1>`)
        $('#search').append(`<div class='thumbnail'><img class='thumbnail 'src=${bookData.items[i].volumeInfo.imageLinks.smallThumbnail}></img></div>`)
        $('#search').append(`<p> Author: ${data.items[i].volumeInfo.authors}</p>`)
        $('#search').append(`<p> Summary: ${data.items[i].volumeInfo.description}</p>`)
        $('#search').append(`<p> Page Count: ${data.items[i].volumeInfo.pageCount}</p>`)
      }

      
      $imgDiv.attr(
        'src',
        true
          ? bookData.items[0].volumeInfo.imageLinks.smallThumbnail
          : 'https://res.cloudinary.com/jerrick/image/upload/v1610450296/5ffd857883f7a1001c77a8bf.jpg'
      )
      $fullDiv.text(bookData.items[0].volumeInfo.title)
      $authorDiv.text(bookData.items[0].volumeInfo.authors)
      $descDiv.text(bookData.items[0].volumeInfo.description)
      $pageDiv.text( bookData.items[0].volumeInfo.pageCount)
    },
    (error) => {
      console.log('bad request', error)
    }
  )
  
}
  










// q=+subject:&key=apikeyvariable(use string interpolation)

// What do I do with the book image