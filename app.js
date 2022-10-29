// Set up state variables for our book data.
let bookData, userInput, getAuthor;

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
    url: `${baseURL}q=intitle:${userInput}&key=${apiKey}`
  }).then(
    (data) => {
      console.log(data)
      bookData = data
      for (let i = 0; i < data.items.length; i++) {
        console.log(data.items[i].volumeInfo)

        $('#search').append(`<h1>${data.items[i].volumeInfo.title}</h1>`)
        $('#search').append(
          `<div class='thumbnail'><img class='thumbnail 'src=${bookData.items[i].volumeInfo.imageLinks.smallThumbnail? bookData.items[i].volumeInfo.imageLinks.smallThumbnail: 'https://img.freepik.com/premium-photo/opened-book-bible-background_112554-164.jpg?w=360'}></img></div>`
        )
        $('#search').append(
          `<p> Author: ${data.items[i].volumeInfo.authors?data.items[i].volumeInfo.authors: 'N/A'}</p>`
        )
        $('#search').append(
          `<p> Summary: ${data.items[i].volumeInfo.description?data.items[i].volumeInfo.description: 'N/A'}</p>`
        )
        $('#search').append(
          `<p> Page Count: ${data.items[i].volumeInfo.pageCount?data.items[i].volumeInfo.pageCount: 'N/A'}</p>`
        )        
      }

      $imgDiv.attr('src',bookData.items[0].volumeInfo.imageLinks.smallThumbnail)
      $fullDiv.text(bookData.items[0].volumeInfo.title)
      $authorDiv.text(bookData.items[0].volumeInfo.authors)
      $descDiv.text(bookData.items[0].volumeInfo.description? bookData.items[0].volumeInfo.description: 'N/A')
      
      bookData.items[0].volumeInfo.pageCount ? $pageDiv.text(bookData.items[0].volumeInfo.pageCount) : 'N/A'

      // function noDisplay() {
      //   if (bookData.items[0].volumeInfo.pageCount === undefined) {
      //     return 'Page Count Not Found'
      //   }
      // }
      // noDisplay()
    },

    

    (error) => {
      console.log('bad request', error)
    }
  )
  
}
  






// ;`url: ${baseURL}q=intitle:${userInput}printType=books&key=${apiKey}&maxResults=40`



// q=+subject:&key=apikeyvariable(use string interpolation)

// What do I do with the book image