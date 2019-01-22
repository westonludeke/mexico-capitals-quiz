//List of Mexican States with their corresponding capital city
var mexicoCapitalQuiz = [
  
//The next two lines are testing to see if it's possible to have an image display in the prompt.
  //["Tabasco", "Villahermosa", "Tabasco.jpg"],
  //["Tabasco", "Villahermosa", "<img src='https://i.imgur.com/jv8yWZK.jpg'>"],
  // ["Nuevo Leon", "Monterrey"],

  // ["Sinaloa", "Culiacan"],
  // ["Coahuila", "Saltillo"],
  // ["Baja California", "Mexicali"],
  // ["Durango", "Durango"],
  // ["Tamaulipas", "Ciudad Victoria"],
  // ["Oaxaca", "Oaxaca"],
  // ["Chiapas", "Tuxtla Guitierrez"],
  // ["San Luis Potosi", "San Luis Potosi"],
  // ["Chihuahua", "Chihuahua"],
  // ["Michoacan", "Morelia"],
  // ["Nayarit", "Tepic"],
  // ["Estado de Mexico", "Toluca"],
  // ["Zacatecas", "Zacatecas"],
  // ["Ciudad de Mexico", "Distrito Federal"],
  // ["Campeche", "Campeche"],
  // ["Veracruz", "Xalapa"],
  // ["Puebla", "Puebla"],
  // ["Hidalgo", "Pachuca"],
  // ["Morelos", "Morelia"],
  // ["Yucatan", "Merida"],
  // ["Queretaro", "Queretaro"],
  // ["Colima", "Colima"],
  // ["Jalisco", "Guadalajara"],
  // ["Baja California Sur", "La Paz"],
  // ["Sonora", "Hermosillo"],
  // ["Aguascalientes", "Aguascalientes"],
  // ["Guerrero", "Chilpancingo"],
  // ["Quintana Roo", "Chetumal"],
  // ["Guanajuato", "Guanajuato"]
]

//Button one to give the user instructions on how to play
function promptIntro(){
	alert("Welcome to the Capitals of Mexico Quiz! We are about to prompt you to name the capital of each of Mexico's 31 states. Simply type in your answer in the form field in the prompt. Proper spelling and accents are required to be correct! Click the next button on the home page to begin the quiz! :) ");
}

//Quiz function to ask user for the capital of each state in Mexico
function promptMe(){
	function print(message) {
	  document.write(message);
	}
		function printQuiz(quiz) {
			var listHTML = '<ol>';
			for (var i = 0; i < quiz.length; i += 1){
				
					var question = prompt("What is the capital of the state of " + quiz[i][0] + "? " + quiz[i][2] );

						if (question === (quiz[i][1])){
							listHTML += '<li>' + 'Great job, that is correct!  ' + '<b>' +  quiz[i][1] + '</b>' + ' is the capital of the state of ' + '<b>' + quiz[i][0] + '</b>' + "." + '</li>';
						} else {
							listHTML += '<li>' + ' Sorry cabrón! You answered the capital of ' + '<b>' + quiz[i][0] + '</b>' + ' incorrectly. The correct answer was ' + '<b>' + quiz[i][1] + '</b>' +  '. Better luck next time!';
						}
				}
			
			listHTML += '</ol>';
			print(listHTML);
		}
		printQuiz(mexicoCapitalQuiz);

}





