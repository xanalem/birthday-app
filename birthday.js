var button = document.getElementById('enterBday');
button.addEventListener("click", () => {
    document.getElementById("result").textContent = checkDate();
});


// checkDate
function checkDate() {
    var input = document.getElementById("inputNum").value;
    if (input.length !== 10) {
        return "Sorry, but you did not enter a date in the correct format.";
    } else if (input.substring(2, 3) !== '/' && input.substring(5, 6) !== '/') {
        return "Sorry, but you did not enter a date in the correct format.";
    } else {
        return handle();
    }
}


// getSign
function getSign() {
    var inputb = document.getElementById("inputNum").value;
    var birth = new Date(inputb);
    var month = birth.getMonth() + 1;
    var day = birth.getDay();

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "your sign is Capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "your sign is Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "your sign is Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "your sign is Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "your sign is Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "your sign is Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "your sign is Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "your sign is Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "your sign is Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "your sign is Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "your sign is Scorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "your sign is Sagittarius";
    }
}


//getAge
function getAge(birthdate) {
    var birth = new Date(birthdate);
    var today = new Date();
    var age = Math.floor((today - birth) / (1000 * 60 * 60 * 24 * 365));
    return age;
}

function displayGetAge() {
    var textBox = document.getElementById("inputNum");
    var input = textBox.value;
    var result = getAge(input);
    return result;
}


//getCountdown
function birthdayCountDown(date) {
    var today = new Date();
    var birthday = new Date(date);
    var nextBday = new Date(date);
    nextBday.setFullYear((today.getFullYear() - birthday.getFullYear()) + 2000);
    var timeUntilBday = today - nextBday;
    if (timeUntilBday > 0) {
        nextBday.setFullYear((today.getFullYear() - birthday.getFullYear()) + 2001);
    }
    var bDays = (today.getTime() - nextBday.getTime()) / -86400000;

    return Math.floor(bDays);
}

function displayCountDown() {
    var input = document.getElementById('inputNum').value;
    var result = birthdayCountDown(input);

    return result;
}


// Handle
function handle() {
    var result1 = displayGetAge();
    var result2 = getSign();
    var result3 = displayCountDown();

    return "You are " + result1 + " years of age, " + result2 + ", and there are " + result3 + " days until your birthday!";

}
