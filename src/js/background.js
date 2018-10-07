var images = ['fabianpoels_latelier_flo.jpg', 'fabianpoels_rienztal.jpg', 'fabianpoels_yves_freyr_manhattantransfer.jpg'];
var imageUrl = 'url(images/covers/' + images[Math.floor(Math.random() * Math.floor(images.length))] + ')';
$('body').css({
  'background-image': imageUrl
});
