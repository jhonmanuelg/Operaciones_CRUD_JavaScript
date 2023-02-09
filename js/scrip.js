var selectedRow = null;

// show alerts

function showAlert(message, classNome) {
  const div = document.createElement("div");
  div.className = `alert alert-${classNome}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);
  setInterval(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields

function ClearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#RollNo").value = "";
}

// Add Data

document.querySelector("#worker_form").addEventListener("click", (e) => {
  e.preventDefault();

  //Get Form Values

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const RollNo = document.querySelector("#RollNo").value;

  // Validate

  if (firstName == "" || lastName == "" || RollNo == "") {
    showAlert("Please fill in all fields", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#worker-list");
      const row = document.createElement("tr");
      row.innerHTML = `
       <td>${firstName}</td>
       <td>${lastName}</td>
       <td>${RollNo}</td>
       <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>    
       <td>
       `;
      list.appendChild(row);
      selectedRow = null;
      showAlert("worker Added", "success");
    } else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = RollNo;
      selectedRow = null;
      showAlert("worker Info Edited", "info");
    }
    ClearFields();
  }
});

// Delete Data

document.querySelector("#worker-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent
        document.querySelector("#lastName").value = selectedRow.children[1].textContent
        document.querySelector("#RollNo").value = selectedRow.children[2].textContent
    }
})


document.querySelector("#worker-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("worker data deletad", "danger");
  }
});
