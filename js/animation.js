var paths = document.querySelectorAll('.header-image path');
var lines = document.querySelectorAll('.header-image line');
var ellipses = document.querySelectorAll('.header-image ellipse');
var totalPaths = paths.length;
var totalLines = lines.length;
var totalEllipses = ellipses.length;
var length;
var i;

for(i=0; i<totalPaths; i++) {
    length = paths[i].getTotalLength();
    // Clear any previous transition
    paths[i].style.transition = paths[i].style.transition = 'none';
    // Set up the starting positions
    paths[i].style.strokeDasharray = length + ' ' + length;
    paths[i].style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    paths[i].getBoundingClientRect();
    // Define our transition
    paths[i].style.transition = paths[i].style.transition = 'stroke-dashoffset 2s ease-in-out';
    // Go!
    paths[i].style.strokeDashoffset = '0';
}

for(i=0; i<totalLines; i++) {
    lines[i].style.transition = lines[i].style.transition = 'none';
    lines[i].style.opacity = 0.0;
    lines[i].getBoundingClientRect();
    lines[i].style.transition = lines[i].style.transition = 'opacity 1s 1s ease-in-out';
    lines[i].style.opacity = 1.0;
}

for(i=0; i<totalEllipses; i++) {
    ellipses[i].style.transition = ellipses[i].style.transition = 'none';
    ellipses[i].style.opacity = 0.0;
    ellipses[i].getBoundingClientRect();
    ellipses[i].style.transition = ellipses[i].style.transition = 'opacity 1s 1s ease-in-out';
    ellipses[i].style.opacity = 1.0;
}