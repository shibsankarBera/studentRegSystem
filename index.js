//selecting elements
const form = document.getElementById("form");

let stID = document.getElementById("stID");
let stEmail = document.getElementById("stEmail");
let stContact = document.getElementById("stContact");
var stname = document.getElementById("stname");
var submibutton = document.getElementById("submitbutton");

// showing record on page load
let students = [];
if (localStorage.getItem("students")) {
  students = JSON.parse(localStorage.getItem("students"));
}
displayStudents();

////submit event handler
 let editIndex=-1;
submibutton.addEventListener("click", () => {

  //extract values
  let Name = stname.value.trim(),
    ID = stID.value.trim(),
    Email = stEmail.value.trim(),
    Contact = stContact.value.trim();

  //create object to store valid inputs
  let student = { Name, ID, Email, Contact };
  // Validate form
  let isvalidform = validateInputs(Name, ID, Email, Contact);
  if (isvalidform) {
     if(editIndex==-1){
      students.push(student);//add record
     alert("record added sucessfull");
     clearForm();
    }else{///edit exixting record
      students[editIndex]=student;
    alert("record Edit sucessfull");
    editIndex=-1;
    clearForm();
    }  
  }
saveToLocalStorage();
  displayStudents();

});

// ===================================form validation start========================

const validateInputs = function (Name, ID, Email, Contact) {
  ///Check all empty fields (ONE condition)
  if (Name == "" || ID == "" || Email == "" || Contact == "") {
    console.log("id empty");
    alert("all fields are mandatory");
    return false;
  }
  //Individual validations
  if (!isValidName(stname, Name)) return false;
  if (!isValidStudentId(stID, ID)) return false;
  if (!isValidEmail(stEmail, Email)) return false;
  if (!isValidateContact(stContact, Contact)) return false;

  //  If everything is correct
  console.log("All fields are valid");
  return true;
};

// 1------------------studentName validation--------
function isValidName(nameInput, name) {
  if (name.length <= 3) {
    setError(nameInput, "Name must be more than 3 characters");
    return false;
  }

  for (let i = 0; i < name.length; i++) {
    if (
      !(name[i] >= "A" && name[i] <= "Z") &&
      !(name[i] >= "a" && name[i] <= "z") &&
      name[i] !== " "
    ) {
      setError(nameInput, "Only letters allowed");
      return false;
    }
  }

  setSucess(nameInput);
  return true;
}

// 2--------------------studentId validatin----------

function isValidStudentId(idInput, id) {
  for (let i = 0; i < id.length; i++) {
    if (id[i] == " ") {
      setError(idInput, "Space not allowed");
      return false;
    }

    if (!(id[i] >= "0" && id[i] <= "9")) {
      setError(idInput, "Student ID must contain only numbers");
      return false;
    }
  }

  setSucess(idInput);
  return true;
}

// 3--------------------email validation-----------
function isValidEmail(emailInput, email) {
  let atIndex = -1;
  let dotIndex = -1;

  for (let i = 0; i < email.length; i++) {
    // allow only small letters, numbers, @ and .
    if (
      !(email[i] >= "a" && email[i] <= "z") &&
      !(email[i] >= "0" && email[i] <= "9") &&
      email[i] !== "@" &&
      email[i] !== "."
    ) {
      setError(emailInput, "Only lowercase letters allowed");
      return false;
    }

    if (email[i] === "@") atIndex = i;
    if (email[i] === ".") dotIndex = i;
  }

  // @ must exist and come before .
  if (atIndex === -1 || dotIndex === -1 || atIndex > dotIndex) {
    setError(emailInput, "Enter valid Email");
    return false;
  }

  setSucess(emailInput);
  return true;
}

// 4-----------------------contact validation---------------

function isValidateContact(contactInput, contact) {
  if (contact.length !== 10) {
    contact.length > 10
      ? setError(contactInput, "Contact number shoud less than 10 digits")
      : setError(contactInput, "Contact number must be exactly 10 digits");
    return false;
  }

  setSucess(contactInput);
  return true;
}

// ===================================Helper function ========================

//--------- set success & eror mesagess------helper function

let setSucess = function (input) {
  //add succes class
  const inputcotrol = input.parentElement;
  inputcotrol.className = "input-control success";
};

let setError = function (input, message) {
  //add error class
  const inputcontrol = input.parentElement;
  inputcontrol.className = "input-control error";
  //change inner text of small tag
  let small = inputcontrol.querySelector(".small");
  small.innerHTML = message;
};


// -----------------clear input form------------
function clearForm(){
  stID.value= "";
  stEmail.value ="";
  stContact.value = "";
   stname.value ="";
}
// ===================================form validation END ========================

// // ===================================Display section========================

function displayStudents(){
 tBody = document.getElementById("display-items");
 tBody.innerHTML="";
  for (i = 0; i < students.length; i++) {
    const row = document.createElement("tr");//create row
    // row.classList.add("input-row");
    row.innerHTML = ` 
                <td>${i+1}</td>
                <td>${students[i].Name}</td>
                <td>${students[i].ID}</td>
                <td>${students[i].Email}</td>
                <td>${students[i].Contact}</td>
                <td>
                  <button onclick="deleteStudent(${i})" class="delete">
                    <i class="ri-delete-bin-line"></i>
                  </button>
                </td>
                <td>
                  <button onclick="editStudent(${i})" class="edit"><i class="ri-edit-2-line"></i></button>
                </td>
              
              `
              tBody.appendChild(row);

  }
 
  
}

//displayStudents();
 
// --------------------delete student details-----------
function deleteStudent(index){
   students.splice(index, 1);
    saveToLocalStorage();
    displayStudents()
}
// --------------------Edit student details-----------
function editStudent(index){
  editIndex=index;
  console.log("edit button clicked")
  let student=students[index];
  stID.value= student.ID;
  stEmail.value =student.Email;
  stContact.value = student.Contact;   stname.value =student.Name;
  
}

// =============================Dynamic ScrollBar================
  const cont =document.getElementById("box");
  const tabl=document.getElementById("tabl");
  
  function dynamicScroll(){
    if (cont.offsetHeight<tabl.offsetHeight){
       cont.style.overflowY="scroll";
    }else{
      cont.style.overflowY="hidden";
    }
    
  }  
   dynamicScroll();
  
  


  // =============================save local storage================
    function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
  
}

 