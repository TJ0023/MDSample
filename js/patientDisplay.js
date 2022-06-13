function retrieveFromLocal(e) {
    e.preventDefault(); //stops form submission
    // let arrayList = [];
    // arrayList = movieReviews;
    checkUpForms.forEach((element) => {
        let tableMovie = document.getElementById('patientForm');
        let tr = tableMovie.insertRow();
        let td1 = tr.insertCell(); //first
        let td2 = tr.insertCell(); //middle
        let td3 = tr.insertCell(); //last
        let td4 = tr.insertCell(); //address
        let td5 = tr.insertCell(); //birthday
        let td6 = tr.insertCell(); 
        let td7 = tr.insertCell(); 
        let td8 = tr.insertCell(); 
        let td9 = tr.insertCell(); 
        let td10 = tr.insertCell(); 
        let td11 = tr.insertCell(); 
        let td12 = tr.insertCell(); 
        let td13 = tr.insertCell(); 
        let td14 = tr.insertCell(); 
        let td15 = tr.insertCell(); 
        let td16 = tr.insertCell(); 
        let td17 = tr.insertCell(); 
        let td18 = tr.insertCell(); 

        td1.innerHTML = element.firstName;
        td2.innerHTML = element.middleName;
        td3.innerHTML = element.lastName;
        td4.innerHTML = element.address;
        td5.innerHTML = element.dateOfBirth;
        td6.innerHTML = element.contactNum;
        td7.innerHTML = element.Male;
        td8.innerHTML = element.Female;
        td9.innerHTML = element.cancer;
        td10.innerHTML = element.cardiac;
        td11.innerHTML = element.hypertension;
        td12.innerHTML = element.psychiatricDisorder;
        td13.innerHTML = element.epilepsy;
        td14.innerHTML = element.otherDiseases;
        td15.innerHTML = element.symptoms;
        td16.innerHTML = element.takingMed;
        td17.innerHTML = element.noMed;
        td18.innerHTML = element.medication;
    
    });
    
   
}

let checkUpForms = localStorage.getItem('CheckUpForm') ? JSON.parse(localStorage.getItem('CheckUpForm')) : [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-get').addEventListener('click', retrieveFromLocal)
})