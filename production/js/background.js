var landscapeImages=["fabianpoels_latelier_flo.jpg","fabianpoels_rienztal.jpg","fabianpoels_yves_freyr_manhattantransfer.jpg","fabianpoels_lesimoust.jpg"],portraitImages=["fabianpoels_ciastlins.jpg","fabianpoels_ailefroide_boulder.jpg","fabianpoels_matthiasschiestl_stohlwond_bockhaus.jpg","fabianpoels_lesimoust_02.jpg"],mq=window.matchMedia("(max-width: 1080px)");function setBackground(e){e.matches?$("body").css({background:"url(images/covers/"+portraitImages[Math.floor(Math.random()*Math.floor(portraitImages.length))]+") no-repeat center center fixed","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"}):$("body").css({background:"url(images/covers/"+landscapeImages[Math.floor(Math.random()*Math.floor(landscapeImages.length))]+") no-repeat center center fixed","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"})}setBackground(mq),mq.addListener(setBackground);