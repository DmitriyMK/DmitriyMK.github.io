
function PlayVideoFunc(){
    var $video = $('#track-1'),
    src = $video.attr('src');
    $video.attr('src', src + '?&autoplay=1');
}
document.getElementById("play").onclick = PlayVideoFunc;

function PauseVideoFunc(){
    var $video = $('#track-1'),
    src = $video.attr('src');
    $video.attr('src', src - '?&autoplay=1');
}
document.getElementById("pause").onclick = PauseVideoFunc;