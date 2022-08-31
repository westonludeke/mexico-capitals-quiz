let userScore = 0;

var mexicoCapitalQuiz = [
  ["Tabasco", "VILLAHERMOSA"],
  ["Nuevo León", "MONTERREY"],
  ["Sinaloa", "CULIACÁN"],
  ["Coahuila", "SALTILLO"],
  ["Baja California", "MEXICALI"],
  ["Durango", "DURANGO"],
  ["Tamaulipas", "CIUDAD VICTORIA"],
  ["Oaxaca", "OAXACA"],
  ["Chiapas", "TUXTLA GUTIÉRREZ"],
  ["San Luis Potosí", "SAN LUIS POTOSÍ"],
  ["Chihuahua", "CHIHUAHUA"],
  ["Michoacán", "MORELIA"],
  ["Nayarit", "TEPIC"],
  ["Estado de Mexico", "TOLUCA"],
  ["Zacatecas", "ZACATECAS"],
  ["Distrito Federal (answer in Spanish)", "CIUDAD DE MÉXICO"],
  ["Campeche", "CAMPECHE"],
  ["Veracruz", "XALAPA"],
  ["Puebla", "PUEBLA"],
  ["Hidalgo", "PACHUCA"],
  ["Morelos", "CUERNAVACA"],
  ["Tlaxcala", "TLAXCALA"],
  ["Yucatán", "MÉRIDA"],
  ["Querétaro", "QUERÉTARO"],
  ["Colima", "COLIMA"],
  ["Jalisco", "GUADALAJARA"],
  ["Baja California Sur", "LA PAZ"],
  ["Sonora", "HERMOSILLO"],
  ["Aguascalientes", "AGUASCALIENTES"],
  ["Guerrero", "CHILPANCINGO"],
  ["Quintana Roo", "CHETUMAL"],
  ["Guanajuato", "GUANAJUATO"]
]

function promptIntro(){
	alert("Welcome to the Capitals of Mexico Quiz! This is a quiz on the capitals of each of Mexico's 31 states, plus the DF. Simply type in your answer in the form field in the prompt. Proper spelling and accents are required to be correct. Click the next button on the home page to begin the quiz! :) ");
}

function promptMe(){
	function print(message) {
	  document.write(message);
	}
		function printQuiz(quiz) {
			var listHTML = '<ol>';
      for (var i = 0; i < quiz.length; i += 1){
					var question = prompt("What is the capital of the state of " + quiz[i][0] + "?");
						if (question.toUpperCase() === (quiz[i][1])){
						  alert('That is correct! ' + quiz[i][1] + ' is the capital of ' + quiz[i][0] + '. You scored one more point for a total of ' + (userScore += 1) + ' points.');
            } else {
						  alert('Sorry, that\'s incorrect! The correct capital of ' + quiz[i][0] + ' is ' + quiz[i][1] + '. Your score remains at ' + (userScore) + '.');
            }
	   		}
    	listHTML += '</ol>';
      print(listHTML);
		  
if (userScore === 0){
  document.write('<p>You got ' + (userScore) + ' questions correct out of a total of 32. Time for you to study up!</p>');
} else if (userScore >= 1 && userScore < 10){
    document.write('<p>You got ' + (userScore) + ' questions correct out of a total of 32. Decent job! With a little more hard work you\'ll be able to bring up your score in no time!</p>');
} else if (userScore >= 10 && userScore < 20){
    document.write('<p>You got ' + (userScore) + ' questions correct out of a total of 32. You\'re making good progress, but keep working hard!</p>');
} else if (userScore >= 20 && userScore < 25){
    document.write('<p>You got ' + (userScore) + ' questions correct out of a total of 32. Great job, you\'re almost there!</p>');
} else if (userScore >= 25 && userScore < 32){
    document.write('<p>You got ' + (userScore) + ' questions correct out of a total of 32. ¡¡¡MUY EXCELLENTE!!! So close to perfection! Try again for that 100%!</p>');
} else {
    document.write('<p>You got ' + (userScore) + ' questions correct out of a total of 32!!! ¡¡¡PERFECTION!!! ¡¡¡VIVA MÉXICO CABRÓNES!!!</p>');
};

    document.write('<p>Refresh the page to return home</p>');
		}
		printQuiz(mexicoCapitalQuiz);
}




