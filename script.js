/**
 * Calculates an approximate CO2 emission based on what transport 
 * and type of meat the user uses/eats the most
 */
function calculate(){
    var total = 0;
    var meatV = meat.value;
    var transV = transport.value;
    const beefV = 99.48;
    const porkV = 12.31;
    const chicV = 9.87;
    const carV = .150;
    const busV = .050;
    const trainV = .035;
    const walkV = 0;

    if (meatV == "beef"){
        total += 60*beefV;
    } else if (meatV == "pork"){
        total += 60*porkV;
    } else if (meatV == "chicken"){
        total += 60*chicV;
    }

    if (transV == "car"){
        total += 10000 * carV;
    } else if (transV == "bus"){
        total += 10000 * busV;
    } else if (transV == "train"){
        total += 10000 * trainV;
    } else {
        total += 0;
    }
    
    result.display = "none";
    result.innerHTML = "You approximately emit " + total + "kg of CO2 per year";
    result.innerHTML += `<br>`;
    result.innerHTML += "The average person emits 4500kg of CO2 per year"
    animateResult();
};

/**
 * Changes the image of the type of meat displayed
 * based on what the user has chosen
 */
function meatChange(){
    var meatV = meat.value;

    if(meatV == "beef"){
        meatImg.src = 'images/beef.jpg';
    } else if (meatV == "pork"){
        meatImg.src = 'images/pork.jpg';
    } else if (meatV == "chicken"){
        meatImg.src = 'images/chick.jpg';
    }
}

/**
 * Changes the image of the type of transport displayed
 * based on what the user has chosen
 */
function transportChange(){
    var transV = transport.value;

    if (transV == "car"){
        transImg.src = 'images/car.jpg';
    } else if (transV == "train"){
        transImg.src = 'images/train.jpg';
    } else if (transV == "walk"){
        transImg.src = 'images/walk.jpg';
    } else if (transV == "bus"){
        transImg.src = 'images/bus.jpg';
    }
}

/**
 * Validates login info
 * Empty passwords and empty usernames are invalid
 */
function validateLogin(){
    var user = username.value;
    var pass = password.value;

    if (user == ""){
        alert("username should not be empty");
        return;
    }

    if (pass == ""){
        alert ("password should not be empty");
        return;
    }

    alert("username and password are valid");
    return;
}

/**
 * Animates the home text on the home page
 */
function animateHome(){
    var pos = 0;
    var temp = null;
    var el = document.getElementById('homeText');
    el.style.top = '0px';
    clearInterval(temp);
    temp = setInterval(frame, 15);
    function frame(){
        if (pos == 35){
            clearInterval(temp);
        } else {
            pos++;
            el.style.top = pos + 'vh';
        }
    }
}

/**
 * Animates the result from the calculations on the tracker page
 */
function animateResult(){
    var pos = 0;
    var temp = null;
    var el = document.getElementById('result');
    el.style.left = '0px';
    clearInterval(temp);
    temp = setInterval(frameRes, 5);
    function frameRes(){
        if (pos == 35){
            clearInterval(temp);
        } else {
            pos++;
            el.style.left = pos + 'vw';
        }
    }
}