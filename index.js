function adddata(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var birthday=document.getElementById("birthday").value;
    var number=document.getElementById("number").value;
    var gender=document.getElementById("gender").value;
    var email=document.getElementById("email").value;
    var link=document.getElementById("link").value;
    var link_one=document.getElementById("link_one").value;

     // Create a new row
     var newRow = document.createElement('tr');

     // Add cells to the row
     var cellName = document.createElement('td');
     cellName.textContent = name;
     newRow.appendChild(cellName);

     var cellAge = document.createElement('td');
     cellAge.textContent=age;
     newRow.appendChild(cellAge);

     var cellbirthday = document.createElement('td');
     cellbirthday.textContent = birthday;
     newRow.appendChild(cellbirthday);

     var cellnumber = document.createElement('td');
     cellnumber.textContent = number;
     newRow.appendChild(cellnumber);

     var cellgender = document.createElement('td');
     cellgender.textContent = gender;
     newRow.appendChild(cellgender);

     var cellemail = document.createElement('td');
     cellemail.textContent = email;
     newRow.appendChild(cellemail);

     var celllink = document.createElement('td');
     celllink.textContent = link;
     newRow.appendChild(celllink);

     var celllink_one = document.createElement('td');
     celllink_one.textContent = link_one;
     newRow.appendChild(celllink_one);

     document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(newRow);

     document.getElementById("myform").reset();
}