let userScore = 0;

var mexicoCapitalQuiz = [
  ['Tabasco', 'Villahermosa'],
  ['Nuevo León', 'Monterrey'],
  ['Sinaloa', 'Culiacán'],
  ['Coahuila', 'Saltillo'],
  ['Baja California', 'Mexicali'],
  ['Durango', 'Durango'],
  ['Tamaulipas', 'Ciudad Victoria'],
  ['Oaxaca', 'Oaxaca'],
  ['Chiapas', 'Tuxtla Gutiérrez'],
  ['San Luis Potosí', 'San Luis Potosí'],
  ['Chihuahua', 'Chihuahua'],
  ['Michoacán', 'Morelia'],
  ['Nayarit', 'Tepic'],
  ['Estado de Mexico', 'Toluca'],
  ['Zacatecas', 'Zacatecas'],
  ['Distrito Federal (answer in Spanish)', 'Ciudad de México'],
  ['Campeche', 'Campeche'],
  ['Veracruz', "Xalapa"],
  ['Puebla', 'Puebla'],
  ['Hidalgo', 'Pachuca'],
  ['Morelos', 'Cuernavaca'],
  ['Tlaxcala', 'Tlaxcala'],
  ['Yucatán', 'Mérida'],
  ['Querétaro', 'Querétaro'],
  ['Colima', 'Colima'],
  ['Jalisco', 'Guadalajara'],
  ['Baja California Sur', 'La Paz'],
  ['Sonora', 'Hermosillo'],
  ['Aguascalientes', 'Aguascalientes'],
  ['Guerrero', 'Chilpancingo'],
  ['Quintana Roo', 'Chetumal'],
  ['Guanajuato', 'Guanajuato']
]

function promptIntro(){
	alert("Welcome to the Capitals of Mexico Quiz! This is a quiz on the capitals of each of Mexico's 31 states, plus the DF. Simply type in your answer in the form field in the prompt. Proper spelling and accents are required to be correct. Click the next button on the home page to begin the quiz!");
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




