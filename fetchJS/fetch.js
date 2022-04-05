window.addEventListener("load", () => {

    //Capture Body
  const body = document.querySelector("#containerFlex");

  //Create Buttons
  const btn = document.createElement("button");
  btn.id = "create";
  btn.textContent = "crear";

  const btn25 = document.createElement("button");
  btn25.id = "w25";
  btn25.textContent = "Width 25%";

  const btn10 = document.createElement("button");
  btn10.id = "w10";
  btn10.textContent = "Width 10%";

  const btn50 = document.createElement("button");
  btn50.id = "w50";
  btn50.textContent = "Width 50%";

  const withOutClass = document.createElement("button");
  withOutClass.id = "withOutClass";
  withOutClass.textContent = "Sin Clases";

  //Asignation button to container
  body.appendChild(btn);
  body.appendChild(btn25);
  body.appendChild(btn10);
  body.appendChild(btn50);
  body.appendChild(withOutClass);

  //Capture TAG IMG
  var images=document.querySelectorAll("img");
  var classNameCurrent=" ";

  //Craete Events clicks from buttons
  btn.addEventListener("click", (e) => {
    getGif();
  });

  btn25.addEventListener("click", (e) => {
    images=document.querySelectorAll("img");
    toggleClass(images,"w25");
    classNameCurrent="w25";
  });
  
  btn10.addEventListener("click", (e) => {
    images=document.querySelectorAll("img");
    toggleClass(images,"w10");
    classNameCurrent="w10";
  });

  btn50.addEventListener("click", (e) => {
    images=document.querySelectorAll("img");
    toggleClass(images,"w50");
    classNameCurrent="w50";
  });

  withOutClass.addEventListener("click", (e) => {
    images=document.querySelectorAll("img");
    toggleClass(images,"");
    classNameCurrent="";
  });
});

//Function to assing the class CSS
function toggleClass(element, cssClass) {
  element.forEach((e) => e.className=cssClass);
}


async function getGif(clss) {
  const key = "k6IIDAnBJImfXovgGBTFDWLRwDfyXpnt";
  const request = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${key}`
  );
  const { data } = await request.json();
  const { url } = data.images.original;

  const imagen = document.createElement("img");
  const container = document.querySelector("#containerFlex");
  imagen.style.display = "block";
  imagen.src = url;
  imagen.className=clss;
  imagen.loading="lazy";


  container.appendChild(imagen);
}
