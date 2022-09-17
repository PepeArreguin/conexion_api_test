console.log("Entro al main.js");

const imgRandom = document.getElementById('imgRandom');
const URL = "https://picsum.photos/200/300";

const randomImage = () => {
    console.log("entro a la funcion randomImage");
    //Es una promesa
    fetch(URL)
        .then((data) => {
            console.log(data);
            imgRandom.src = data.url;
            })
        .catch((error) => {
            console.log("error");
            });

}