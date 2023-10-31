const apiKey = 'dce2b457';
const movieService = new MovieService(apiKey);
const domService = new DOMService();

document.getElementById('search-button').addEventListener('click', async () => {
  const title = document.getElementById('search-input').value;
  domService.showLoadingIcon();

  try {
    const movies = await movieService.search(title);
    domService.displayMovies(movies);
  } catch (error) {
    console.error(error);
    domService.hideLoadingIcon();
  }
});

document.getElementById('more-button').addEventListener('click', async () => {
  domService.showLoadingIcon();

  try {
    const movies = await movieService.getNextPage();
    domService.displayMovies(movies);
  } catch (error) {
    console.error(error);
    domService.hideLoadingIcon();
  }
});

document.getElementById('movie-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('details-button')) {
    const imdbID = event.target.dataset.imdbid;
    domService.showMovieDetails(imdbID);
  }
});

document.getElementById('close-button').addEventListener('click', () => {
  domService.closeMovieDetails();
});
