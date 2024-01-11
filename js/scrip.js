// Variable para almacenar la fila seleccionada
var selectedRow = null;

// Función para mostrar alertas
function showAlert(message, className) {
  // Crear un elemento div para la alerta
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));

  // Insertar la alerta antes del elemento con la clase 'main' dentro del elemento con la clase 'container'
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  // Eliminar la alerta después de 3000 milisegundos (3 segundos)
  setTimeout(() => div.remove(), 3000);
}

// Función para limpiar todos los campos del formulario
function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}

// Evento para agregar datos al formulario
document.querySelector("#worker_form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  // Validar los campos del formulario
  if (firstName === "" || lastName === "" || rollNo === "") {
    showAlert("Valide sus datos", "danger");
  } else {
    // Si no hay una fila seleccionada, agregar una nueva fila a la tabla
    if (selectedRow === null) {
      const list = document.querySelector("#worker-list");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
        <td>
          <a href="#" class="botn_td btn btn-warning btn-sm edit">Edit</a>
          <a href="#" class="botn_td btn btn-danger btn-sm delete">Delete</a>
        </td>
      `;

      list.appendChild(row);
      selectedRow = null;
      showAlert("Elemento agregado", "success");
    } else {
      // Si hay una fila seleccionada, editar la información de esa fila
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = rollNo;
      selectedRow = null;
      showAlert("Información editada", "info");
    }

    // Limpiar los campos del formulario después de agregar/editar
    clearFields();
  }
});

// Evento para editar datos al hacer clic en el botón "Edit"
document.querySelector("#worker-list").addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("edit")) {
    // Al hacer clic en "Edit", seleccionar la fila y llenar el formulario con la información de esa fila
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#firstName").value = selectedRow.children[0].textContent;
    document.querySelector("#lastName").value = selectedRow.children[1].textContent;
    document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
  }
});

// Evento para eliminar datos al hacer clic en el botón "Delete"
document.querySelector("#worker-list").addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete")) {
    // Al hacer clic en "Delete", eliminar la fila y mostrar una alerta
    target.parentElement.parentElement.remove();
    showAlert("Datos Eliminados", "danger");
  }
});
