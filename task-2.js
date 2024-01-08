// task - 2


// save

// save name
const saveName = () => {
    const nameField = document.getElementById('name-field');
    const name = nameField.value;

    localStorage.setItem('name', name);
    nameField.value = '';
}
// save email
const saveEmail = () => {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    localStorage.setItem('email', email);
    emailField.value = '';
}
// save phone
const savePhone = () => {
    const phoneField = document.getElementById('phone-field');
    const phone = phoneField.value;

    localStorage.setItem('phone', phone);
    phoneField.value = '';
}



// delete

// delete name
const deleteName = () => {
    localStorage.removeItem('name');

    document.getElementById('name-field').value = '';

}
// delete email
const deleteEmail = () => {
    localStorage.removeItem('email');

    document.getElementById('email-field').value = '';
}
// delete phone
const deletePhone = () => {
    localStorage.removeItem('phone');

    document.getElementById('phone-field').value = '';
}






// save all
const saveAll = () => {
    const name = document.getElementById('name-field').value;
    const email = document.getElementById('email-field').value;
    const phone = document.getElementById('phone-field').value;
    
    const info = {name: name, email: email, phone: phone};

    const infoStringified = JSON.stringify(info);

    localStorage.setItem('info', infoStringified);


    
    document.getElementById('name-field').value = '';
    document.getElementById('email-field').value = '';
    document.getElementById('phone-field').value = '';
}


// delete all
const deleteAll = () => {
    localStorage.clear();
    document.getElementById('name-field').value = '';
    document.getElementById('email-field').value = '';
    document.getElementById('phone-field').value = '';
}




// show data in field from storage
const editInfo = () => {

    const infoFromStorageString = localStorage.getItem('info');
    const infoFromStorage = JSON.parse(infoFromStorageString);

    if (infoFromStorage) {
        document.getElementById('name-field').value = infoFromStorage['name'];
        document.getElementById('email-field').value = infoFromStorage['email'];
        document.getElementById('phone-field').value = infoFromStorage['phone'];
    } else {

            
        const nameFromStorage = localStorage.getItem('name');
        const emailFromStorage = localStorage.getItem('email');
        const phoneFromStorage = localStorage.getItem('phone');

        document.getElementById('name-field').value = nameFromStorage;
        document.getElementById('email-field').value = emailFromStorage;
        document.getElementById('phone-field').value = phoneFromStorage;
    }
    
}
