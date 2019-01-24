//The user's total score
var score = 0;
//List of Mexican States with their corresponding capital city
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
  ["Tlaxcala", "TLAXCALA"]
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

//Button one to give the user instructions on how to play
function promptIntro(){
	alert("Welcome to the Capitals of Mexico Quiz! This is a quiz on the capitals of each of Mexico's 31 states, plus the DF. Simply type in your answer in the form field in the prompt. Proper spelling and accents are required to be correct. Click the next button on the home page to begin the quiz! :) ");
}

//Quiz function to ask user for the capital of each state in Mexico
function promptMe(){
	function print(message) {
	  document.write(message);
	}
		function printQuiz(quiz) {
			var listHTML = '<ol>';
			for (var i = 0; i < quiz.length; i += 1){
				
					var question = prompt("What is the capital of the state of " + quiz[i][0] + "?");

//In this section I commented out the two lines of code that were logging the answers at the end of the quiz on another page.
//I decided that I prefer to alert the user to the correct or incorrect answers immediately after answering each question.

						if (question.toUpperCase() === (quiz[i][1])){
							//listHTML += '<li>' + 'Correct!  ' + '<b>' +  quiz[i][1] + '</b>' + ' is the capital of the state of ' + '<b>' + quiz[i][0] + '</b>' + '.' + ' Giving you one more point for a total of ' + (score += 1)  + '</li>';
						  alert('That is correct! ' + quiz[i][1] + ' is the capital of ' + quiz[i][0] + '. You scored one more point for a total of ' + (score += 1) + ' points.');
            } else {
							//listHTML += '<li>' + ' Sorry cabrón! You answered the capital of ' + '<b>' + quiz[i][0] + '</b>' + ' incorrectly. The correct answer was ' + '<b>' + quiz[i][1] + '</b>' +  '. Your score remains at ' + (score) + ' Better luck next time!';
						  alert('Sorry, that\'s incorrect! The correct capital of ' + quiz[i][0] + ' is ' + quiz[i][1] + '. Your score remains at ' + (score) + '.');
            }
	   		}
      // Switched these two lines
    	listHTML += '</ol>';
      print(listHTML);
		  

//adding up the total number of questions answered correctly and telling the user how they did
if (score === 0){
  document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. Time for you to study up!</p>');
} else if (score >= 1 && score < 10){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. Decent job! With a little more hard work you\'ll be able to bring up your score in no time!</p>');
} else if (score >= 10 && score < 20){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. You\'re making good progress, but keep working hard!</p>');
} else if (score >= 20 && score < 25){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. Great job!</p>');
} else if (score >= 25 && score < 31){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. So close to perfection! Try again for that 100%!</p>');
} else {
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31!!! PERFECTION!!! Muy excellente amigo (or amiga)!!!</p>');
};

    document.write('<p>Refresh the page to return home</p>');
		}
		printQuiz(mexicoCapitalQuiz);
}




