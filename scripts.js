//The user's total score
var score = 0;
//List of Mexican States with their corresponding capital city
var mexicoCapitalQuiz = [
  ["Tabasco", "VILLAHERMOSA"],
  ["Nuevo Leon", "MONTERREY"],
  ["Sinaloa", "CULIACAN"],
  ["Coahuila", "SALTILLO"],
  ["Baja California", "MEXICALI"],
  ["Durango", "DURANGO"],
  ["Tamaulipas", "CIUDAD VICTORIA"],
  ["Oaxaca", "OAXACA"],
  ["Chiapas", "TUXTLA GUITIERREZ"],
  ["San Luis Potosi", "SAN LUIS POTOSI"],
  ["Chihuahua", "CHIHUAHUA"],
  ["Michoacan", "MORELIA"],
  ["Nayarit", "TEPIC"],
  ["Estado de Mexico", "TOLUCA"],
  ["Zacatecas", "ZACATECAS"],
  ["Ciudad de Mexico", "DISTRITO FEDERAL"],
  ["Campeche", "CAMPECHE"],
  ["Veracruz", "XALAPA"],
  ["Puebla", "PUEBLA"],
  ["Hidalgo", "PACHUCA"],
  ["Morelos", "CUERNAVACA"],
  ["Yucatan", "MERIDA"],
  ["Queretaro", "QUERETARO"],
  ["Colima", "COLIMA"],
  ["Jalisco", "GUADALAJARA"],
  ["Baja California Sur", "LA PAZ"],
  ["Sonora", "HERMOSILLO"],
  ["Aguascalientes", "AGUASCALIENTES"],
  ["Guerrero", "CHILPANCIGO"],
  ["Quintana Roo", "CHETUMAL"],
  ["Guanajuato", "GUANAJUATO"]
]

//Button one to give the user instructions on how to play
function promptIntro(){
	alert("Welcome to the Capitals of Mexico Quiz! This is a quiz on the capitals of each of Mexico's 31 states. Simply type in your answer in the form field in the prompt. Proper spelling and accents are required to be correct! Click the next button on the home page to begin the quiz! The results of your quiz will display on another page upon completing the quiz. :) ");
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

						if (question.toUpperCase() === (quiz[i][1])){
							listHTML += '<li>' + 'Correct!  ' + '<b>' +  quiz[i][1] + '</b>' + ' is the capital of the state of ' + '<b>' + quiz[i][0] + '</b>' + '.' + ' Giving you one more point for a total of ' + (score += 1)  + '</li>';
						} else {
							listHTML += '<li>' + ' Sorry cabrón! You answered the capital of ' + '<b>' + quiz[i][0] + '</b>' + ' incorrectly. The correct answer was ' + '<b>' + quiz[i][1] + '</b>' +  '. Your score remains at ' + (score) + ' Better luck next time!';
						}
	   		}
      // Switched these two lines
    	listHTML += '</ol>';
      print(listHTML);
		  

//adding up the total number of questions answered correctly and telling the user how they did

//code was wrong, need to double-check the logic

if (score === 0){
  document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. Time for you to study up!</p>');
} else if (score >= 1 && score < 10){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. Decent job! With a little more hard work you\'ll be able to bring up your score in no time!</p>');
} else if (score >= 10 && score < 20){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. You\'re making good progress, but keep working hard!</p>');
} else if (score >= 20 && score < 25){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. Great job!</p>');
} else if (score >= 25 && score < 31){
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31. So close to perfection! You\'re right there!</p>');
} else {
    document.write('<p>You got ' + (score) + ' questions correct out of a total of 31!!! PERFECTION!!! Muy excellente amigo!!!</p>');
};

    document.write('<p>Refresh the page to return home</p>');
		}
		printQuiz(mexicoCapitalQuiz);
}

 //Code not used but saving ["Tabasco", "Villahermosa", "<img src='https://i.imgur.com/jv8yWZK.jpg'>"],




