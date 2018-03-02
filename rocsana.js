var button = document.getElementById('enterBday');
button.addEventListener("click", displayGetAge);
button.addEventListener("click", getSign);



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
		document.getElementById('result2').textContent = "You are " + result + " years of age!";
	}
