//Enable taking medication text through clicking the yes radio btn
function medicationText() {
    let yesMeds = document.getElementById('takingMeds');
    let noMeds = document.getElementById('noMeds');
if (yesMeds.checked === true) {
    document.getElementById('yourText').removeAttribute('disabled');
} else if (noMeds.checked === true) {
    document.getElementById('yourText').disabled = true;
    document.getElementById('yourText').value = "";  //Also Clears Text Form if No is Clicked
}
};


// Submit to Local Storage 
let checkUpForms = localStorage.getItem('CheckUpForm') ? JSON.parse(localStorage.getItem('CheckUpForm')) : [];

const addCheckForm = (event) => {
    event.preventDefault();
    let checkUpForm = {
        firstName : document.getElementById('firstName').value,
        middleName : document.getElementById('middleName').value,
        lastName : document.getElementById('lastName').value,
        address : document.getElementById('address').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        contactNum: document.getElementById('contactNum').value,
        Male: document.getElementById('genderBtn').checked,
        Female: document.getElementById('genderBtn2').checked,
        asthma : document.getElementById('Asthma').checked,
        cancer : document.getElementById('Cancer').checked,
        cardiac : document.getElementById('Cardiac-Disease').checked,
        hypertension : document.getElementById('Hypertension').checked,
        psychiatricDisorder : document.getElementById('PsychiatricDisorder').checked,
        epilepsy : document.getElementById('Epilepsy').checked,
        otherDiseases : document.getElementById('Others').checked,
        symptoms: document.getElementById('symptoms').value,
        takingMed: document.getElementById('takingMeds').checked,
        noMed : document.getElementById('noMeds').checked,
        medication: document.getElementById('yourText').value
    }
    checkUpForms.push(checkUpForm);

    console.table(checkUpForm)
    localStorage.setItem('CheckUpForm',JSON.stringify(checkUpForms));
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', addCheckForm);
})
//localStorage to get First name


//Enable Submit if necessary values are achieved 

function submitOn() {
        let fName = document.getElementById('firstName').value;
        //let mName = document.getElementById('middleName').value;
        let lName = document.getElementById('lastName').value;
        let address = document.getElementById('address').value;
        let dateOfBirth= document.getElementById('dateOfBirth').value;
        let contactNum= document.getElementById('contactNum').value;
        let Male= document.getElementById('genderBtn').checked;
        let Female= document.getElementById('genderBtn2').checked;
        // let asthma = document.getElementById('Asthma');
        // let cancer = document.getElementById('Cancer');
        // let cardiac = document.getElementById('Cardiac-Disease');
        // let hypertension = document.getElementById('Hypertension');
        // let psychiatricDisorder = document.getElementById('PsychiatricDisorder');
        // let epilepsy = document.getElementById('Epilepsy');
        // let otherDiseases = document.getElementById('Others');
        // let symptoms= document.getElementById('symptoms');
        let takingMed= document.getElementById('takingMeds').checked;
        let noMed = document.getElementById('noMeds').checked;
        // let medication= document.getElementById('yourText');

        if (fName.trim() != ''&& lName.trim() != '' && address.trim() != '' && dateOfBirth != '' && contactNum != '' && (Male != '' || Female != '' ) && (takingMed != '' || noMed != '')) {
            document.getElementById('submitBtn').removeAttribute('disabled');
        } else {
            document.getElementById('submitBtn').disabled = true;
        }
}


//Form Complete Modal 
let submitModal = document.getElementById('submitModal');
let submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function() {
    submitModal.style.display = "block";
}


// Form Conditions