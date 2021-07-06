'use strict'

let form = document.getElementById('form');
let table = document.getElementById('parent')
let allMoives = [];


// Constructor
function Movie(image, name, release) {
    this.movieImage = image;
    this.movieName = name;
    this.dateRelease = release;
    allMoives.push(this);
}

function updateStorage() {
    let storageString = JSON.stringify(allMoives);
    localStorage.setItem('moive', storageString);

}

function reternStorage() {
    let data = localStorage.getItem('moive');
    let storgaeParsing = JSON.parse(data);
    if (storgaeParsing) {
        for (let i = 0; i < storgaeParsing.length; i++) {
            let newMoiveOb = new Movie(storgaeParsing[i].movieImage, storgaeParsing[i].movieImage, storgaeParsing[i].dateRelease)
            newMoiveOb.render();
        }
    }

}

Movie.prototype.render = function () {

    // Stretch Goals
    let tableRow = document.createElement('tr')
    table.appendChild(tableRow);

    let tableHead1 = document.createElement('th')
    tableRow.appendChild(tableHead1)
    tableHead1.textContent = 'Iamge'

    let tableHead2 = document.createElement('th')
    tableRow.appendChild(tableHead2)
    tableHead2.textContent = 'Movie Name'

    let tableHead3 = document.createElement('th')
    tableRow.appendChild(tableHead3)
    tableHead3.textContent = 'Release Date'



    // DOM
    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let tdElement1 = document.createElement('td');
    trElement.appendChild(tdElement1);
    tdElement1.textContent = this.movieImage;

    let tdElement2 = document.createElement('td');
    trElement.appendChild(tdElement2);
    tdElement2.textContent = this.movieName;

    let tdElement3 = document.createElement('td');
    trElement.appendChild(tdElement3);
    tdElement3.textContent = this.dateRelease;


}


// Add Event Listener
form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault()
    console.log(event);
    let addedMovieImage = event.target.movieImage.value;
    let addedMoive = event.target.movieName.value;
    let addeddateRelease = event.target.dateRelease.value;

    let newMovie = new Movie(addedMovieImage, addedMoive, addeddateRelease)
    newMovie.render();
    
    updateStorage();
}
reternStorage();