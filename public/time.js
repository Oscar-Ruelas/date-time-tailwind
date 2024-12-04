const theClockApp = () => {
    const timeNow = new Date();
    let gotHours = timeNow.getHours();
    let gotMinutes = timeNow.getMinutes();
    let gotSeconds = timeNow.getSeconds();

    const gotAmOrPM = gotHours >= 12 ? 'PM' : 'AM';
    gotHours = gotHours % 12 || 12;

    const hoursTens = Math.floor(gotHours / 10);
    const hoursUnits = gotHours % 10;
    const minutesTens = Math.floor(gotMinutes / 10);
    const minutesUnits = gotMinutes % 10;
    const secondsTens = Math.floor(gotSeconds / 10);
    const secondsUnits = gotSeconds % 10;

    const hoursTensElem = document.querySelector(".hours.tens");
    const hoursUnitsElem = document.querySelector(".hours.units");
    const minutesTensElem = document.querySelector(".minutes.tens");
    const minutesUnitsElem = document.querySelector(".minutes.units");
    const secondsTensElem = document.querySelector(".seconds.tens");
    const secondsUnitsElem = document.querySelector(".seconds.units");
    const amOrPMElem = document.querySelector(".amOrPM");

    // Update hours tens place
    if (hoursTensElem.innerText !== `${hoursTens}`) {
        hoursTensElem.innerText = hoursTens;
        hoursTensElem.classList.add('animate-flip');
        setTimeout(() => hoursTensElem.classList.remove('animate-flip'), 600);
    }

    // Update hours units place
    if (hoursUnitsElem.innerText !== `${hoursUnits}`) {
        hoursUnitsElem.innerText = hoursUnits;
        hoursUnitsElem.classList.add('animate-flip');
        setTimeout(() => hoursUnitsElem.classList.remove('animate-flip'), 600);
    }

    // Update minutes tens place
    if (minutesTensElem.innerText !== `${minutesTens}`) {
        minutesTensElem.innerText = minutesTens;
        minutesTensElem.classList.add('animate-flip');
        setTimeout(() => minutesTensElem.classList.remove('animate-flip'), 600);
    }

    // Update minutes units place
    if (minutesUnitsElem.innerText !== `${minutesUnits}`) {
        minutesUnitsElem.innerText = minutesUnits;
        minutesUnitsElem.classList.add('animate-flip');
        setTimeout(() => minutesUnitsElem.classList.remove('animate-flip'), 600);
    }

    // Update seconds tens place
    if (secondsTensElem.innerText !== `${secondsTens}`) {
        secondsTensElem.innerText = secondsTens;
        secondsTensElem.classList.add('animate-flip');
        setTimeout(() => secondsTensElem.classList.remove('animate-flip'), 600);
    }

    // Update seconds units place
    if (secondsUnitsElem.innerText !== `${secondsUnits}`) {
        secondsUnitsElem.innerText = secondsUnits;
        secondsUnitsElem.classList.add('animate-flip');
        setTimeout(() => secondsUnitsElem.classList.remove('animate-flip'), 600);
    }

    // Update AM or PM
    if (amOrPMElem.innerText !== gotAmOrPM) {
        amOrPMElem.innerText = gotAmOrPM;
        amOrPMElem.classList.add('animate-flip');
        setTimeout(() => amOrPMElem.classList.remove('animate-flip'), 600);
    }
};

setInterval(theClockApp, 1000);
