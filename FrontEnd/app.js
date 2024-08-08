document.addEventListener("DOMContentLoaded", () => {
  
// Buttons
const $buttonAddMedication = document.getElementById('fetch-add-medication-button');
const $buttonGetAllMedications = document.getElementById('fetch-all-medications-button');
const $buttonUpdateStock = document.getElementById('fetch-update-stock-button');
const $buttonDeleteExpired = document.getElementById('fetch-delete-expirated-button');

// Events ----------

  //Event consultar todos los medicamentos
  $buttonGetAllMedications.addEventListener("click", () => {
    fetchAllMedications();
  });

  //Event eliminar todos los medicamentos caducados
  $buttonDeleteExpired.addEventListener("click", async () => {
    await deleteAllExpiredMedications();
  })
  
// Inputs values
const nameMedication = document.getElementById('name-medication').value;
const medicationQuantity = document.getElementById('medication-quantity').value;
const medicationExpirationDate = document.getElementById('medication-expiration-date').value;
const medicationPrice = document.getElementById('medication-price').value;
const newStock = document.getElementById("new-stock").value;

// Functions ---------

  // Definimos la funcion para el fetch de todos los medicamentos
  function fetchAllMedications() {
    //Hacemos la peticion fetch a la api}
    fetch("http://localhost:3000/api/medications")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Respuesta dice peticion no esta ok: " + response.statusText
          );
        }
        //Si la peticion es ok, parseamos el json
        return response.json();
      })
      .then((dataMedications) => {
        showMedications(dataMedications.medications);
      })
      .catch((err) => {
        //Renderizar errores
        displayError(err);
      });
  }

  async function deleteAllExpiredMedications() {

    try {
      const deleteAllExpiredMedicamentosRequest = fetch("http://localhost:3000/api/medications/all-expired", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json" 
        }
      })

      const response = await deleteAllExpiredMedicamentosRequest;

      if (!response.ok) {
        throw new Error(
          "Respuesta dice peticion no esta ok: " + response.statusText
        );
      }

      const deletedResults = await response.json();

      console.log(deletedResults)

      if(!deletedResults.deleted_registers){
        alert("Ningun medicamento ha caducado: O eliminados")
        return;
      }

      alert(`Medicamentos caducados eliminados: ${deletedResults.deleted_registers}\nRecarga el sitio para tener las opciones actualizadas`);

    } catch (err) {
      //Renderizar errores
      displayError(err);
    }

  }

  //Funcion para mostrar los productos
  const showMedications = (medications) => {
    console.log(medications);
    //obtenemos la tabla donde se mostrara la informacion
    const $tableBody = document.getElementsByTagName("table")[0];
    // console.log($tableBody);
    //Iniciamos el contenido con las cabeceras
    $tableBody.innerHTML = /*html*/ `
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Expiration Date</th>
          <th>Price</th>
        </tr>
      `;

    //Insertamos el contenido por medio del Foreach
    medications.forEach((medication) => {

      //Creamos las filas para cada producto
      const $row = document.createElement("TR");

      //Creamos y llenamos las celdas para cada dato
      const $tdName = document.createElement("TD");
      $tdName.textContent = medication.name;

      const $tdQuantity = document.createElement("TD");
      $tdQuantity.textContent = medication.quantity;

      const $tdExpirationDate = document.createElement("TD");
      $tdExpirationDate.textContent = medication.expiration_date;

      const $tdPrice = document.createElement("TD");
      $tdPrice.textContent = `$${medication.price}`;
      
      //añadimos la info a la fila
      $row.appendChild($tdName);
      $row.appendChild($tdQuantity);
      $row.appendChild($tdExpirationDate);
      $row.appendChild($tdPrice);

      //añadimos la fila a la tabla
      $tableBody.appendChild($row);
    });
  };

//Funcion para mostrar errores
  const displayError = function (error) {
    const $showErrorMessage = document.getElementById("error-message");
    $showErrorMessage.textContent = `Throw Error: ${error.message}`;
  };

  //Cargar select con todas las opciones disponibles

function loadSelectOptions(){
  fetch("http://localhost:3000/api/medications")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Respuesta dice peticion no esta ok: " + response.statusText
          );
        }
        //Si la peticion es ok, parseamos el json
        return response.json();
      })
      .then((dataMedications) => {
        if(!dataMedications.medications.length){
          return;
        }

        // Select
        const $selectMedication = document.getElementById('select-medication');

        dataMedications.medications.forEach((medication) => {
          const $Opt = document.createElement("OPTION");
          // console.log($Opt)
          $Opt.value = medication.id;
          $Opt.innerHTML = medication.name

          // Insertamos la opcion en el select
          $selectMedication.appendChild($Opt)
        })

        // console.log($selectMedication);

      })
      .catch((err) => {
        //Renderizar errores
        displayError(err);
      });
}

loadSelectOptions()

});

