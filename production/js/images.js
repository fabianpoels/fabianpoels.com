let images=[{name:"fabianpoels_climbing_finale_lubna",description:"Lubna, Grotta dell'Edera, Finale (ITALY)",width:360,heigth:540},{name:"fabianpoels_landscape_langkofel",description:"Langkofel, Dolomites (ITALY)",width:809,heigth:540},{name:"fabianpoels_landscape_airplane",description:"Airplane",width:360,heigth:540},{name:"fabianpoels_landscape_val_badia",description:"Val Badia, Dolomites (ITALY)",width:809,heigth:540},{name:"fabianpoels_climbing_cikola",description:"Nina Landekar on 'Grenguar', Čikola (CROATIA)",width:809,heigth:540},{name:"fabianpoels_landscape_krka",description:"Krka national park (CROATIA)",width:809,heigth:540},{name:"fabianpoels_landscape_frost",description:"Frost",width:361,heigth:540},{name:"fabianpoels_landscape_lagodigarda",description:"Sunset on Lago di Garda (ITALY)",width:361,heigth:540},{name:"fabianpoels_landscape_autumntrees",description:"Autumn trees",width:809,heigth:540},{name:"fabianpoels_portrait_italianguy",description:"Italian guy",width:809,heigth:540},{name:"fabianpoels_climbing_finale_roccadicorno",description:"Rombo di Vento, Rocca di Corno, Finale (ITALY)",width:361,heigth:540},{name:"fabianpoels_landscape_lightning",description:"Lightning",width:808,heigth:540},{name:"fabianpoels_climbing_lumignano_boomerang",description:"Cody Roth on Boomerang, Lumignano (ITALY)",width:361,heigth:540},{name:"fabianpoels_portrait_lithuanian_girl",description:"Lithuanian girl",width:361,heigth:540},{name:"fabianpoels_landscape_rain",description:"Rain",width:808,heigth:540},{name:"fabianpoels_climbing_menhir",description:"Thomas Prenn on Menhir, Passo Gardena, Dolomites (ITALY)",width:361,heigth:540},{name:"fabianpoels_portrait_italianbride",description:"Italian bride",width:361,heigth:540}],counter=0;function image_loaded(e){e.removeEventListener("load",image_loaded),++counter===images.length&&show_gallery()}let currentIndex=images.length;for(;0!=currentIndex;){let e=Math.floor(Math.random()*currentIndex);currentIndex--,[images[currentIndex],images[e]]=[images[e],images[currentIndex]]}let article=document.getElementById("gallery");function show_gallery(){article.style.display="block",$("#gallery").justifiedGallery({rowHeight:270,lastRow:"nojustify",waitThumbnailsLoad:!1,margins:20,captions:!1}),Fancybox.bind('[data-fancybox="gallery"]',{Thumbs:!1,Toolbar:{display:{left:[],middle:[],right:["fullscreen","close"]}},on:{"Carousel.ready Carousel.settle":e=>{var e=e.getSlide();e&&e.src&&(e=e.src.split("fabianpoels_")[1].split(".jpg")[0],gtag("event","view_image_"+e,{image_name:e}))},"Carousel.click":e=>{var e=e.getSlide();e&&e.src&&(e=e.src.split("fabianpoels_")[1].split(".jpg")[0],gtag("event","click_image_"+e,{image_name:e}))}}})}images.forEach(e=>{(a_el=document.createElement("a")).setAttribute("href","#"),a_el.setAttribute("data-src",`images/${e.name}.jpg`),a_el.setAttribute("data-fancybox","gallery"),a_el.setAttribute("data-caption",e.description);var a=new Image(e.width,e.heigth);a.addEventListener("load",image_loaded(a)),a.setAttribute("alt",e.description),a.setAttribute("class","thumbnail"),a.src=`images/${e.name}_thumb.jpg`,a_el.appendChild(a),article.appendChild(a_el)});