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
    let age = document.getElementById("inputAge").value;
    let email = document.getElementById("inputEmail").value;
    let country = document.getElementById("countySel").value;
    let state = document.getElementById("stateSel").value;
    let city = document.getElementById("citySel").value;

    if (first_name == "" || last_name == "" || email == "" || country == "" || state == "" || city == "") {
        document.getElementById('firstnamecheck').innerHTML = "Please Enter First Name";
        document.getElementById('lastnamecheck').innerHTML = "Please Enter Last Name";
        document.getElementById('emailcheck').innerHTML = "Please Enter Email";
        document.getElementById('country-error').innerHTML = "Please Select Country";
        document.getElementById('state-error').innerHTML = "Please Select State";
        document.getElementById('city-error').innerHTML = "Please Select City";
        document.getElementById('ageerror').innerHTML = "Please Enter Age";
        return false;
    }
    else {

        let displayData = document.getElementById("displayTable");

        let newRow = displayData.insertRow(row);
        let cell = newRow.insertCell(0);
        let cell1 = newRow.insertCell(1);
        let cell2 = newRow.insertCell(2);
        let cell3 = newRow.insertCell(3);
        let cell4 = newRow.insertCell(4);
        let cell5 = newRow.insertCell(5);
        let cell6 = newRow.insertCell(6);

        cell.innerHTML = first_name;
        cell1.innerHTML = last_name;
        cell2.innerHTML = age;
        cell3.innerHTML = email;
        cell4.innerHTML = country;
        cell5.innerHTML = state;
        cell6.innerHTML = city;

        row++;
        return true;
    }
}

// function deleteData() {
//     let rowcount = 1;
//     for (i = 1; i < rowcount; i++) {
//         document.getElementById("displayTable").deleteRow(rowcount[i]);
//     }
// }


function checkNumber() {
    let checkValue = document.getElementById("inputAge").value;
    var x = /\D/;
    if (checkValue.match(x)) {
        ageerror.innerHTML = "Error: Expecting Digits";
    }
    else if (checkValue < 18 || checkValue > 100) {
        ageerror.innerHTML = "Error: Expecting Age 18-99";
    }
    else {
        ageerror.innerHTML = "Good";
    }
}

function checkCharFN() {
    let checkCharacters = document.getElementById("inputFirstName").value;
    if (checkCharacters.length <= 0) {
        firstnamecheck.innerHTML = "Error: Expecting at least 2 Characters"
    }
    else {
        firstnamecheck.innerHTML = "Good";
    }
}

function checkCharLN() {
    let checkCharacters = document.getElementById("inputLastName").value;
    if (checkCharacters.length <= 0) {
        lastnamecheck.innerHTML = "Error: Expecting at least 2 Characters"
    }
    else {
        lastnamecheck.innerHTML = "Good";
    }
}

function emailvalidation() {
    let e = document.getElementById('inputEmail').value;
    let emailformat = /^[a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3}$/;
    if (!e.match(emailformat)) {
        document.getElementById("emailcheck").innerHTML = "Please fill valid email address";
        return false;
    }
    else {
        document.getElementById("emailcheck").innerHTML = "Good";
    }
}


window.onload = function () {

    let displayData = document.getElementById("displayTable");

    let newRow = displayData.insertRow(1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6)
    cell1.innerHTML = "Parth";
    cell2.innerHTML = "Pujari";
    cell3.innerHTML = "20";
    cell4.innerHTML = "test@gmail.com";
    cell5.innerHTML = "India";
    cell6.innerHTML = "Maharashtra";
    cell7.innerHTML = "Pune";

    let newRow2 = displayData.insertRow(2);
    let cell12 = newRow2.insertCell(0);
    let cell22 = newRow2.insertCell(1);
    let cell32 = newRow2.insertCell(2);
    let cell42 = newRow2.insertCell(3);
    let cell52 = newRow2.insertCell(4);
    let cell62 = newRow2.insertCell(5);
    let cell72 = newRow2.insertCell(6);
    cell12.innerHTML = "Parth";
    cell22.innerHTML = "Pujari";
    cell32.innerHTML = "25";
    cell42.innerHTML = "test@gmail.com";
    cell52.innerHTML = "India";
    cell62.innerHTML = "Maharashtra";
    cell72.innerHTML = "Pune";

    let newRow3 = displayData.insertRow(3);
    let cell13 = newRow3.insertCell(0);
    let cell23 = newRow3.insertCell(1);
    let cell33 = newRow3.insertCell(2);
    let cell43 = newRow3.insertCell(3);
    let cell53 = newRow3.insertCell(4);
    let cell63 = newRow3.insertCell(5);
    let cell73 = newRow3.insertCell(6);
    cell13.innerHTML = "Parth";
    cell23.innerHTML = "Pujari";
    cell33.innerHTML = "25";
    cell43.innerHTML = "test@gmail.com";
    cell53.innerHTML = "India";
    cell63.innerHTML = "Maharashtra";
    cell73.innerHTML = "Pune";

    let newRow4 = displayData.insertRow(4);
    let cell14 = newRow4.insertCell(0);
    let cell24 = newRow4.insertCell(1);
    let cell34 = newRow4.insertCell(2);
    let cell44 = newRow4.insertCell(3);
    let cell54 = newRow4.insertCell(4);
    let cell64 = newRow4.insertCell(5);
    let cell74 = newRow4.insertCell(6);
    cell14.innerHTML = "Parth";
    cell24.innerHTML = "Pujari";
    cell34.innerHTML = "25";
    cell44.innerHTML = "test@gmail.com";
    cell54.innerHTML = "India";
    cell64.innerHTML = "Maharashtra";
    cell74.innerHTML = "Pune";

    let newRow5 = displayData.insertRow(5);
    let cell15 = newRow5.insertCell(0);
    let cell25 = newRow5.insertCell(1);
    let cell35 = newRow5.insertCell(2);
    let cell45 = newRow5.insertCell(3);
    let cell55 = newRow5.insertCell(4);
    let cell65 = newRow5.insertCell(5);
    let cell75 = newRow5.insertCell(6);
    cell15.innerHTML = "Parth";
    cell25.innerHTML = "Pujari";
    cell35.innerHTML = "25";
    cell45.innerHTML = "test@gmail.com";
    cell55.innerHTML = "India";
    cell65.innerHTML = "Maharashtra";
    cell75.innerHTML = "Pune";

}

