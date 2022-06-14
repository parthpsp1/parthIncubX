let row = 1;

function dropdownCountry() {
    var d1 = document.getElementById('countySel');
    var d2 = document.getElementById('stateSel');

    d2.innerHTML = '';

    if (d1.value == 'India') {
        var statelist = ['', 'Maharashtra', 'Gujrat'];
    }
    else if (d1.value == 'UK') {
        var statelist = ['', 'Essex County', 'Blaine County']
    }
    for (var i = 0; i < statelist.length; i++) {
        var newoption = document.createElement('option');
        newoption.value = statelist[i];
        newoption.innerHTML = statelist[i];
        d2.options.add(newoption);
    }
}

function dropdownState() {
    var d1 = document.getElementById('stateSel');
    var d2 = document.getElementById('citySel');
    d2.innerHTML = '';
    if (d1.value == 'Maharashtra') {
        var statelist = ['Pune', 'Mumbai'];
    }
    else if (d1.value == 'Gujrat') {
        var statelist = ['Surat', 'Ahemdabad']
    }
    else if (d1.value == 'Essex County') {
        var statelist = ['Essex City', 'Sharon Town']
    }
    else if (d1.value == 'Blaine County') {
        var statelist = ['Blaine City', 'Delight Town']
    }

    for (var i = 0; i < statelist.length; i++) {
        var newoption = document.createElement('option');
        newoption.value = statelist[i];
        newoption.innerHTML = statelist[i];
        d2.options.add(newoption);
    }
}

function getDetails() {
    let first_name = document.getElementById("inputFirstName").value;
    let last_name = document.getElementById("inputLastName").value;
    let email = document.getElementById("inputEmail").value;
    let country = document.getElementById("countySel").value;
    let state = document.getElementById("stateSel").value;
    let city = document.getElementById("citySel").value;

    let displayData = document.getElementById("displayTable");

    let newRow = displayData.insertRow(row);
    let cell = newRow.insertCell(0);
    let cell1 = newRow.insertCell(1);
    let cell2 = newRow.insertCell(2);
    let cell3 = newRow.insertCell(3);
    let cell4 = newRow.insertCell(4);
    let cell5 = newRow.insertCell(5);
    let cell6 = newRow.insertCell(6);

    cell.innerHTML = row;
    cell1.innerHTML = first_name;
    cell2.innerHTML = last_name;
    cell3.innerHTML = email;
    cell4.innerHTML = country;
    cell5.innerHTML = state;
    cell6.innerHTML = city;

    row++;
}

// function deleteData() {
//     let rowcount = 1;
//     for (i = 1; i < rowcount; i++) {
//         document.getElementById("displayTable").deleteRow(rowcount[i]);
//     }
// }