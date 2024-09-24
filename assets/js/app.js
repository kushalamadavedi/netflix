var cl = console.log;  

const showModelBtn = document.getElementById('showModelBtn');
const backDrop = document.getElementById('backDrop');
const moviemodel = document.getElementById('moviemodel');
const closeModel =[...document.querySelectorAll('.closeModel')];

const movieForm =document.getElementById('movieForm');
const movieTitleControl =document.getElementById('movieTitle');
const movieurlControl =document.getElementById('movieurl');
const overviewControl =document.getElementById('overview');
const ratingControl =document.getElementById('rating');
let movieArr = [] ;

const movieModelToggle = () => {
    backDrop.classList.toggle('active');
    moviemodel.classList.toggle('active');
}



showModelBtn.addEventListener('click', movieModelToggle);
closeModel.forEach(ele => {
    ele.addEventListener('click',  movieModelToggle)
});

const onMovieAdd = (eve) => {
    eve.preventDefault();
    let newMovieObj = {
        title:movieTitleControl.value,
        movieurl:movieurlControl.value,
        overview:overviewControl.value,
        rating:ratingControl.value
    }
    onMovieAdd.push(newMovieObj);
    cl(movieArr);
}

movieForm.addEventListener('submit', onMovieAdd)

















// let numm="200"+null-10+10+true-"200"+"200"+"100";
// cl(numm);

// let c=1;
// let num= c++ + c++ + ++c + ++c + ++c;
// cl(num)