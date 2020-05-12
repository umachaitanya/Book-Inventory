var selectedRow= null;
function onClickAdd(){
    var formData = readFormData();
    if(selectedRow == null){
        insertNewBook(formData);
    }
    else{
        updateRecord(formData)
    }
    resetForm();
}
function readFormData(){
    var formData ={};
    formData["title"] = document.getElementById("title").value;
    formData["genre"] = document.getElementById("genre").value;
    formData["quantity"] = document.getElementById("quantity").value;
    return formData;
}
function insertNewBook(data){
   var table = document.getElementById("bookList").getElementsByTagName("tbody")[0];
   var newRow = table.insertRow(table.length);
   cell1= newRow.insertCell(0);
   cell1.innerHTML = data.title;
   cell2= newRow.insertCell(1);
   cell2.innerHTML = data.genre;
   cell3= newRow.insertCell(2);
   cell3.innerHTML = data.quantity;
   cell3= newRow.insertCell(3);
   cell3.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                     <a onClick = "onDelete(this)">Delete</a>`;
}
function resetForm(){
    document.getElementById("title").value="";
    document.getElementById("genre").value="";
    document.getElementById("quantity").value="";
    var selectedRow= null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData){
     selectedRow.cells[0].innerHTML = formData.title; 
     selectedRow.cells[1].innerHTML = formData.genre; 
     selectedRow.cells[2].innerHTML = formData.quantity; 
}
function onDelete(td){
    if(confirm("Are u sure u want to delete this record?")){
    row = td.parentElement.parentElement;
    document.getElementById("bookList").deleteRow(row.rowIndex);
    resetForm();
    }
}