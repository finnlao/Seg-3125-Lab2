function submit(){
    var patientName = document.getElementById("patientName");
    var DOB = document.getElementById("DOB");
    var errorMessage = "";
    var DOBRegex = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    var nameRegex = /([A-Za-z\-])$/;

    if(patientName.value == "" || patientName.style.color == "red"){
        patientName.style.color = "red";
        patientName.value = "Required";
        errorMessage += "Patient Name is empty \n";
    } else if (!patientName.value.match(nameRegex)){
        errorMessage += "Inappropriate characters/symbols in the Patient's name \n";
    }

    if(DOB.value == "" || DOB.style.color == "red"){
        DOB.style.color = "red";
        DOB.value = "Required";
        errorMessage += "Date of Birth is empty \n";
    } else if(!DOB.value.match(DOBRegex)){
        errorMessage += "Incorrect Formatting for Date of Birth \n";
    } else {
        var dateOfBirth = DOB.value.split("/");
        if(parseInt(dateOfBirth[0])> 12 || parseInt(dateOfBirth[0]) < 1){
            errorMessage += "Invalid Month entered for Date of Birth \n"
        }

        if(parseInt(dateOfBirth[1]) > 31 || parseInt(dateOfBirth[1]) < 1){
            errorMessage += "Invalid Day entered for Date of Birth \n";
        }

        if(parseInt(dateOfBirth[2]) < 1 || parseInt(dateOfBirth[2]) > 2018){
            errorMessage += "Invalid Year entered for Date of Birth \n";
        }
    }

    if(errorMessage != ""){
        alert("The following errors: \n" + errorMessage);
    } else {
        window.location.replace("ResultsPage.html");
    }


}

function revertErrorHandling(inputField){
    if(inputField.style.color == "red"){
        inputField.style.color = "black";
        inputField.value = "";
    }
}