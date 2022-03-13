const searchSongs = () => {
  const searchText = document.getElementById("search-field").value;
  const url = `https://api.lyrics.ovh/suggest/${searchText}`;
  // load data
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySongs(data.data))
    .catch((error) =>
      displayError("Something Went Wrong!! Please try again later!")
    );
  document.getElementById("search-field").value = "";
};

const displaySongs = (songs) => {
  document.getElementById("song-container").innerHTML = "";
  songs.forEach((song) => {
    const songContainer = document.getElementById("song-container");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card h-100">
                <img src="${song.album.cover_big}" class="card-img" alt="...">
                <div class="card-body">
                <h3 class="card-title">${song.title}</h3>
                  <p class="card-text">Album by ${song.artist.name}</p>
                  <audio controls class="audio">
                  <source src="${song.preview}" type="audio/mpeg">
                   </audio>
                </div>`;
    songContainer.appendChild(div);
  });
};
