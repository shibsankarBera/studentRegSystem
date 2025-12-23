//selecting elements
const form = document.getElementById("form");

let stID = document.getElementById("stID");
let stEmail = document.getElementById("stEmail");
let stContact = document.getElementById("stContact");
var stname = document.getElementById("stname");
var submibutton = document.getElementById("submitbutton");

////submit event handler

submibutton.addEventListener("click", () => {
  console.log("not submitted");
  validateInputs();
});

// form validation
const validateInputs = function () {
    ///alll field are empty
  if (
    stname.value == "" ||
    stID.value == "" ||
    stEmail.value == "" ||
    stContact.value == ""
  ) {
    console.log("id empty");
    alert("all fields are mandatory");
    return false;
  } else {  
    console.log("all are fullfild");

    //name validation
    if   (stname.value.length >= 3)  {
      if(isNaN(stname.value))  {
        
        setSucess(stname);
       
      } else {
        setError(stname,"plese enter valid name");
        console.log("plese enter valid name");
      }
    } else {
        // add error class
      console.log("* name should be at least 3 char");
    }

    ///student id validation

  }
};

//seterror validation

//setSuccess

let setSucess = function (input) {
     //add succes class
   const inputcotrol=input.parentElement;
   inputcotrol.className="input-control success";
};

let setError=function(input,message){
    //add error class
    const inputcontrol=input.parentElement;
    inputcontrol.className= "input-control error";
    //change inner text of small tag
    let small=inputcontrol.querySelector(".small");
    small.innerHTML=message;

}