const myButton = document.getElementById("BotonClick");
const myUl = document.getElementById("cont");
const liReferences = [];
let cont = 1;
myButton.onclick = (event) => {
  const miLi =  document.createElement("li");
  miLi.innerText = `Numero #${cont}`;
  liReferences.push(miLi);
  myUl.appendChild(miLi);
  const seconButton = document.createElement("button")
  seconButton.innerText= `x`;
  miLi.appendChild(seconButton);
  seconButton.onclick = (event) => {
    myUl.removeChild(miLi);
    cont--;
  } 
  cont++;
} 