//selecting elements
const form = document.getElementById("form");

let stID = document.getElementById("stID");
let stEmail = document.getElementById("stEmail");
let stContact = document.getElementById("stContact");
var stname = document.getElementById("stname");
var submibutton = document.getElementById("submitbutton");

const students = [];
console.log(students);

////submit event handler

submibutton.addEventListener("click", () => {
  console.log("not submitted");

  //extract values
  let Name = stname.value.trim(),
    ID = stID.value.trim(""),
    Email = stEmail.value.trim(""),
    Contact = stContact.value.trim("");

  //create object to store valid inputs
  let student = { Name, ID, Email, Contact };
  // Validate form
  let isvalidform = validateInputs(Name, ID, Email, Contact);
  if (isvalidform) {
    console.log("if valid", isvalidform);
    students.push(student);
    console.log("if part",students)
  } else {
    console.log("if not valid", isvalidform);
    console.log("ele part",students)
  }
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
// ===================================form validation END ========================
