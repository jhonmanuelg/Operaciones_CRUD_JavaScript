var selecteRow = null;

// show Alerts

function shoWAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}

// add data
document.querySelector("#worker_form").addEventListener("submit", (e) => {
  e.preventDefault();

  //get form calues

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  //validate
  if (firstName == "" || lastName == "" || rollNo == "") {
    shoWAlert(" Valide seu datos", "danger");
  } else {
    if (selecteRow == null) {
      const list = document.querySelector("#worker-list");
      const row = document.createElement("tr");
      row.innerHTML = `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
        <td>
          <a href="#" class="botn_td btn btn-warning btn-sm edit" >Edit</a>
          <a href="#" class="botn_td btn btn-danger btn-sm btn-smdelete delete" >Delete</a>
        </td>
        </tr>
      `;

      list.appendChild(row);
      selecteRow = null;
      shoWAlert("Elento agregado", "success")
    }
    else{
      selecteRow.children[0].textContent = firstName;
      selecteRow.children[1].textContent = lastName;
      selecteRow.children[2].textContent = rollNo;
      selecteRow= null;
      shoWAlert("Informação editada", "info");
    }

    clearFields();
  }
});

// Edit data
document.querySelector("#worker-list").addEventListener("click", (e) =>{
  target = e.target;
  if (target.classList.contains("edit")){
    selecteRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value = selecteRow.children[0].textContent;
    document.querySelector("#lastName").value = selecteRow.children[1].textContent;
    document.querySelector("#rollNo").value = selecteRow.children[2].textContent;
  }
})




//Delete data
document.querySelector("#worker-list").addEventListener("click", (e) => {
  // mira aqui
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    shoWAlert("Dotos Eliminado", "danger");
  }
});
