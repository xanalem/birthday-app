var button = document.getElementById('enterBday');
button.addEventListener("click", () => {
    document.getElementById("result").textContent = checkDate();
});

function checkDate() {
    var input = document.getElementById("inputNum").value;
    if (input.length !== 10) {
        return "Sorry, but you did not enter a date in the correct format.";
    } else if (input.substring(2, 3) !== '/' && input.substring(5, 6) !== '/') {
        return "Sorry, but you did not enter a date in the correct format.";
    } else {
        return getSign();
    }
}

//------------Zodiac Sign Function--------//
function getSign() {
    var inputb = document.getElementById("inputNum").value;
    var birth = new Date(inputb);
    var month = birth.getMonth() + 1;
    var day = birth.getDay();

    console.log(birth);

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Your sign is Capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Your sign is Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Your sign is Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Your sign is Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Your sign is Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Your sign is Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Your sign is Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Your sign is Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Your sign is Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Your sign is Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Your sign is Scorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Your sign is Sagittarius";
    }
}

function displayGetSign() {
    var input = document.getElementById('inputNum').value;
    var result = getSign(input);
    if (result == "Capricorn") {
        document.getElementById('result').textContent = "Your sign is Capricorn";
    } else if (result == "Aquarius") {
        document.getElementById('result').textContent = "Your sign is Aquarius";
    } else if (result == "Pisces") {
        document.getElementById('result').textContent = "Your sign is Pisces";
    } else if (result == "Aries") {
        document.getElementById('result').textContent = "Your sign is Aries";
    } else if (result == "Taurus") {
        document.getElementById('result').textContent = "Your sign is Taurus";
    } else if (result == "Gemini") {
        document.getElementById('result').textContent = "Your sign is Gemini";
    } else if (result == "Cancer") {
        document.getElementById('result').textContent = "Your sign is Cancer";
    } else if (result == "Leo") {
        document.getElementById('result').textContent = "Your sign is Leo";
    } else if (result == "Virgo") {
        document.getElementById('result').textContent = "Your sign is Virgo";
    } else if (result == "Libra") {
        document.getElementById('result').textContent = "Your sign is Libra";
    } else if (result == "Scorpio") {
        document.getElementById('result').textContent = "Your sign is Scorpio";
    } else if (result == "Sagittarius") {
        document.getElementById('result').textContent = "Your sign is Sagittarius";
    }
}



//------------return age Function--------//

function age(input) {
    var today = new Date();
    var birth = new Date(input);
    var years = Math.floor((today.getTime() - birth.getTime()) / 31536000000);
    return years;
}


//------------days until bday Function--------//

function birthdayCountDown(happybirthday) {
    var today = new Date();

    var myBirthday = new Date(happybirthday);

    myBirthday.setFullYear(today.getFullYear());

    if (today.getTime() > myBirthday.getTime()) {

        myBirthday.setFullYear(today.getFullYear() + 1);
    }

    var days_exact = ((myBirthday.getTime() - today.getTime()) / 86400000);

    var days = Math.floor(days_exact);

    var hours = Math.floor((days_exact % days) * 24);

    var minutes = Math.floor((((days_exact % days) * 24) % hours) * 60);

    return "My birthday is " + days + " days, " + hours + " hours, and " + minutes + " minutes away! </br> </br>";


}
