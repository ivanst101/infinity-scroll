
const imageContainer = document.getElementById("image-container");


let photosArray = [];
const count = 5;
const apiKey = 'wQoa2sq-1MTeDEZxVLXXjXlnUXaxIJWh-lMt7H-V8uU';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayData(){
    photosArray.forEach(element => {
        const img = document.createElement("img");
        img.setAttribute("src", element.urls.regular);
        img.setAttribute("alt", element.alt_description);

        imageContainer.appendChild(img);
    });
}


async function getPhotos() {
    try{
    const res = await fetch(apiURL);
    photosArray = await res.json();
    displayData();
    }catch(err){
        console.error(err);
    }
}


window.addEventListener("scroll", function(){
    if(this.window.innerHeight + this.window.scrollY >= this.document.body.offsetHeight - 1000){
        getPhotos();
    }
});


// On load
getPhotos();