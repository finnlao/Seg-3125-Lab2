function revertErrorHandling(inputField){
    if(inputField.style.color == "red"){
        inputField.style.color = "black";
        inputField.value = "";
    }
}

function submit(){

    var patientName = document.getElementById("patientName");
    var DOB = document.getElementById("DOB");
    var Address = document.getElementById("Address");
    var phoneNumber = document.getElementById("PhoneNumber");
    var healthConcerns = document.getElementById("HealthConcerns");
    var MedicationsTaken = document.getElementById("Medications");
    var emergencyName = document.getElementById("emergencyName");
    var emergencyPhone = document.getElementById("emergencyNumber");
    var errorMessage = "";

    var phoneRegex = /([0-9]){3}-([0-9]){3}-([0-9]){4}$/;


    if(patientName.value == "" || patientName.style.color == "red"){
        patientName.style.color = "red";
        patientName.value = "Required";
        errorMessage += "Patient Name is empty \n";
    }

    if(DOB.value == "" || DOB.style.color == "red"){
        DOB.style.color = "red";
        DOB.value = "Required";
        errorMessage += "Date of Birth is empty \n";
    }

    if(Address.value == "" || Address.style.color == "red"){
        Address.style.color = "red";
        Address.value = "Required";
        errorMessage += "Address is empty \n";
    }

    if(phoneNumber.value == "" || phoneNumber.style.color == "red"){
        phoneNumber.style.color = "red";
        phoneNumber.value = "Required";
        errorMessage += "Patient Phone Number is empty \n";
    } else if (!phoneNumber.value.match(phoneRegex)){
        errorMessage += "Invalid Phone Number format \n"
    }

    if(healthConcerns.value == "" || healthConcerns.style.color == "red"){
        healthConcerns.style.color = "red";
        healthConcerns.value = "Required";
        errorMessage += "Health Concerns is empty \n";
    }

    if(MedicationsTaken.value == "" || MedicationsTaken.style.color == "red"){
        MedicationsTaken.style.color = "red";
        MedicationsTaken.value = "Required";
        errorMessage += "Medications Taken is empty \n";
    }

    if(emergencyName.value == "" || emergencyName.style.color == "red"){
        emergencyName.style.color = "red";
        emergencyName.value = "Required";
        errorMessage += "Emergency Contact Name is empty\n";
    }

    if(emergencyPhone.value == "" || emergencyPhone.style.color == "red"){
        emergencyPhone.style.color = "red";
        emergencyPhone.value = "Required";
        errorMessage += "Emergency Phone Number is empty \n";
    } else if (!emergencyPhone.value.match(phoneRegex)){
        errorMessage += "Invalid Emergency Phone Number format \n"
    }

    if(errorMessage != ""){
        alert("The following errors: \n" + errorMessage);
    } else {
        window.location.replace("FollowUpPage.html");
    }
}