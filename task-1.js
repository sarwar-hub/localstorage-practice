// Task - 1 (i)

// set to local storage
localStorage.setItem('Name', 'Sarwar');
localStorage.setItem('Age', '23');

// get from local storage
const name = localStorage.getItem('Age');
const age = localStorage.getItem('Name');
//console.log(name);
//console.log(age);



// set to localstorage an object
const mySelf = {name: 'Sarwar', age: 23, color: 'black'};
const JSONmySelf = JSON.stringify(mySelf); 
localStorage.setItem('mySelf', JSONmySelf);



// get from localstorage an object
const info = localStorage.getItem('mySelf');
const infoParsed = JSON.parse(info);
//console.log(infoParsed);

/*----------------------------------------------------------------------------------------*/
 



// Task - 1 (ii)

let count = 0;
const fromStorage = () => {
    let stringValue = localStorage.getItem('count');
    let value = parseInt(stringValue);
    count = value;
    
}
fromStorage();
// up
const up = () => {
    count = count + 1;
    
    // set to localstorage
    localStorage.setItem('count', count);
    getNset();
}


// down
const dn = () => {
    count = count - 1;

    // set to localstorage
    localStorage.setItem('count', count);
    getNset();
}




// get N set from localstorage
const getNset = () => {

    // catch container
    let countFromStorage = localStorage.getItem('count');

    // set
    const container = document.getElementById('value');
    container.innerText = countFromStorage;

}
getNset();


/*----------------------------------------------------------------------------------------*/






