var selectedRow = null;

// show alerts

function showAlert(message, classNome ){
    const div = document.createElement("div");
    div.className = `alert alert-${classNome}`;


    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container")
    const main = document.querySelector(".main")
    container.insertBefore(div, main);
    setInterval(() => document.querySelector(".alert").remove(), 3000);
}


// Clear All Fields


// Delete Data

document.querySelector("#worker-list").addEventListener("click", (e) => {
   target = e.target;
   if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("worker data deletad", "danger")
   }
});