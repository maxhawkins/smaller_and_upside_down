var playButton = document.getElementById('play-button');
var overlay = document.getElementById('player-overlay');
var closeButton = document.getElementById('close-button');    

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'lNq8hQnbk-c',
    playsinline: 0, // full screen on iOS
  });
}

function showPlayer() {
  overlay.className = 'active';
  player.playVideo();
}

function hidePlayer() {
  overlay.className = '';
  player.stopVideo();
}

playButton.addEventListener('click', showPlayer, false);
overlay.addEventListener('click', hidePlayer, false);
closeButton.addEventListener('click', hidePlayer, false);

var titleDiv = document.getElementById('title');
titleDiv.style.height = window.innerHeight + 'px';

