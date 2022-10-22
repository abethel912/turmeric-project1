// variable for api key
const apiKey = 'AIzaSyBoGmNgzAJ-VEJYNN5PVRkZqEYJskVEGP4'

// variable for base url
const baseURL = 'https://www.googleapis.com/books/v1/volumes?'

function getSubject() {

}

$.ajax(
  `${baseURL}q=open%20book+subject:autobiography&key=${apiKey}`
).then((data) => {
  console.log(data)
})


// q=+subject:&key=apikeyvariable(use string interpolation)