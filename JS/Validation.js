
document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault(); //Sets method from being getting deafult i.e get
    let num =/[0-9]/g; // for numbers validation
    let gChar = /[A-Z]/g; // for including all capital alphabets
    let sChar = /[a-z]/g; // for including all small alphabets
    let specialC = /[^a-zA-z\d]/g; // for including all special characters
 
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let pass = document.getElementById("pWord").value;
       
    if(!firstName.match(specialC) && !lastName.match(specialC)){ //Uername validation
        if (pass.match(num) && pass.match(gChar)  && pass.match(sChar)  && pass.match(specialC) && pass.length>=8 ) { //Password validation
            if(event.target.pWord.value === event.target.CWord.value){
                alert ("Successfully logged In");
                event.target.fName.value = "";
                event.target.lName.value = "";
                event.target.pWord.value = "";
                event.target.CWord.value = "";
                event.target.mail.value = "";
            }else{
                alert ("Password does not match the Confirm password")
            }
        } else {
            alert("Password must contain one special character one captial alphabet and one numeric digit followed by series of alphabets . Also the length of Password should be greater than 8")
        }
    }else{
        alert("Username cannot have Special charater");
    }
    //For cleaning the fields
    
})