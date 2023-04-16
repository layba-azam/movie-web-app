// const genreSelect = document.getElementById('genre');
// function running() {
//     console.log("running")
// }
// running()
(async function () {
    const response = await fetch("data.json")
    const movies = await response.json()

    const moviePoster = document.getElementById("moviePoster")
    const movielist = document.getElementById("movielist")



    const genreSelect = document.getElementById('genre');
    const yearSelect = document.getElementById('year');

    
    function updateMovieList() {
        const genresel = genreSelect.value;
        const yearsel = yearSelect.value;
        const movieList = document.getElementById('movielist');
        // console.log(genresel)

        // Clear the current movie list
        movieList.innerHTML = '';

        // Filter the movie data based on the selected genre
        const filteredMovies = movies.filter(function(movie){
            return ((genresel==="all"?true: movie.genres.includes(genresel)) )
        }) ;
        
        // Update the movie list with the filtered movies
        filteredMovies.forEach(movie => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            li.textContent = movie.title;
            img.src="https://www.themoviedb.org/t/p/w92" + movie.poster_path;
            movieList.appendChild(li);
            movieList.appendChild(img);
        });
    }
    genreSelect.addEventListener('change', () => {
        updateMovieList();
    });

    //     const genreSelect = document.getElementById('genre');

    //     genreSelect.addEventListener('change', () => {
    //         updateMovieList();
    //     });
    //     function updateMovieList() {
    //         const selectgenre = genreSelect.value;
    //         const movieList = document.getElementById('movielist');

    //         // Clear the current movie list
    //         movieList.innerHTML = '';

    //         // Filter the movie data based on the selected genre
    //         if (selectgenre === 'all') {
    //             return true;
    //           }

    //           // Otherwise, show only the movies with the selected genre
    //           return movies.genre === selectgenre;
    //         // const filteredMovies = movies.filter(movie => movie.genre === selectgenre || genre === 'all');
    //         displayMovies(filteredMovies);
    //         // Update the movie list with the filtered movies
    //         // filteredMovies.forEach(movie => {
    //         //     const li = document.createElement('li');
    //         //     li.textContent = movie.title;
    //         //     movieList.appendChild(li);
    //         // });
    //     }
    //     // Get a reference to the movie list element
    // const movieList = document.getElementById('movielist');

    // function displayMovies(movies) {
    //   // Clear the movie list
    //   movieList.innerHTML = '';

    //   // Loop through the movies and create an li element for each one
    //   movies.forEach(movie => {
    //     const li = document.createElement('li');
    //     li.textContent = movie.title;
    //     movieList.appendChild(li);
    //   });
    // }



    // function showAction(){
    //     const data=action.value
    //     console.log(data)
    //     const result=movies.filter(function(movie){
    //         return (movie.genres.join(" ").includes(data))
    //     })
    //     console.log(result)
    // }
    // // action.addEventListener("click",()=>{
    // //     console.log("runn")
    // // })


    // function displayMovie(result){
    //     movielist.innerHTML=""
    //     result.forEach(function (movie) {      //this will call for each data
    //         const li = document.createElement("li")
    //         li.innerHTML = movie.title
    //         movielist.appendChild(li)
    //     })
    // }
})()