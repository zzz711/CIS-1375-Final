//Clears form on page refresh
window.onload = function() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('dob').value = "";
  document.getElementById('phone').value = "";
}

//Gets data from the form on submit and creates a row in the table
function insertRow() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('dob').value;
  let phone = document.getElementById('phone').value;

  let table = document.getElementById('table');
  let rowCount = document.querySelectorAll('tr').length;

  let row = table.insertRow(rowCount.length);
  let nameCell = row.insertCell(0);
  nameCell.innerHTML = name;

  let emailCell = row.insertCell(1);
  emailCell.innerHTML = email;

  let dateCell = row.insertCell(2);
  dateCell.innerHTML = date;

  let phoneCell = row.insertCell(3);
  phoneCell.innerHTML = phone;

  //only need to make the table visible if it has two rows (header row and row of data)
  if(document.querySelectorAll('tr').length === 2)    
    document.getElementById('tableDiv').hidden = false;
  

  //clear form after data is inserted into the table
  clearForm();
}

//Clears the from
function clearForm() {
  //form.reset() does not seem to work outside of a field set

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('dob').value = new Date();
  document.getElementById('phone').value = '';
}

//Clears the table when if the clear button is pressed
function clearTable() {
  let rowCount = document.querySelectorAll('tr').length;

  //console.log(rowCount);

  //Row one is the header row
  if (rowCount > 1) {
    let table = document.getElementById('table');


    //loop backwards through the rows removing them in the order they were inserted into the table
    for (let i = rowCount-1; i >= 1; i--) {
      //console.log(i);
      
      table.deleteRow(i);
    }
  }
}