var pokemon = ["Zubat", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle",
  "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
  "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran",
  "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff",
  "Wigglytuff"
];

var num_one, name_one, image_one, num_two, name_two, image_two,
  num_three, name_three, image_three, num_four, name_four, image_four,
  winner_number, winner_name, question_text, score, count;

score = 0;
count = 0;

var onscreen = [];

function animation() {
  $("#animation-script").toggleClass("home-animation-click");
  setTimeout(function() {
    location.replace("assets/quiz.html")
  }, 5000);
}

function images() {
  one = Math.round(Math.random() * 30);
  two = Math.round(Math.random() * 30);
  if (two == one) {
    two = Math.round(Math.random() * 30);
  }
  three = Math.round(Math.random() * 30);
  if (three == two || three == one) {
    three = Math.round(Math.random() * 30);
  }
  four = Math.round(Math.random() * 30);
  if (four == three || four == two || four == one) {
    four = Math.round(Math.random() * 30);
  }

  image_one = "images/" + one + "-min.png";
  name_one = pokemon[one];
  onscreen.push(name_one);

  $("#image-one").attr("src", image_one);

  image_two = "images/" + two + "-min.png";
  name_two = pokemon[two];
  onscreen.push(name_two);

  $("#image-two").attr("src", image_two);

  image_three = "images/" + three + "-min.png";
  name_three = pokemon[three];
  onscreen.push(name_three);

  $("#image-three").attr("src", image_three);

  image_four = "images/" + four + "-min.png";
  name_four = pokemon[four];
  onscreen.push(name_four);

  $("#image-four").attr("src", image_four);

  questionGenerator();

}

function questionGenerator() {


  winner_number = Math.round(Math.random() * 3);
  winner_name = onscreen[winner_number];
  question_text = " Who is " + winner_name + " ? "
  $("#question").html(question_text);

  switch (winner_number) {
    case 0:
      $("#button-one").attr("onclick", "correctAnswer()")
      break;
    case 1:
      $("#button-two").attr("onclick", "correctAnswer()")
      break;
    case 2:
      $("#button-three").attr("onclick", "correctAnswer()")
      break;
    case 3:
      $("#button-four").attr("onclick", "correctAnswer()")
      break;

  }

}

function reload() {

  onscreen = [];

  $("#button-one").attr("onclick", "wrongAnswer()")
  $("#button-two").attr("onclick", "wrongAnswer()")
  $("#button-three").attr("onclick", "wrongAnswer()")
  $("#button-four").attr("onclick", "wrongAnswer()")

  images();
}

function correctAnswer() {
  if (count < 25) {
    $("#score-kepper").append("<td> <p class='right'> <i class='far fa-check-circle'></i> </p> </td>");
    score++;
    count++;
    console.log("count : " + count);
    reload();
  } else {
    $("#quiz-animation").toggleClass("home-animation-click");
    $("#score-text").html(score);
  }
}

function wrongAnswer() {
  if (count < 25) {
    $("#score-kepper").append("<td> <p class='wrong'> <i class='far fa-times-circle'></i> </p> </td>");
    count++;
    console.log("count : " + count);
    reload();
  } else {
    $("#quiz-animation").toggleClass("home-animation-click");
    $("#score-text").html(score);
  }

}
