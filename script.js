/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  if (confirm("DO YOU WANT TO PLAY A GAME")) {
    txt = "You pressed OK!";
    play(GAMES_TO_PLAY);
  } else {
    alert("bye");
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
var score = 0;
var time = 0;

function play(count) {
  score = 0;
  time = new Date();
  for (let i = 0; i < count; i++) {
    ask();
  }
  time = new Date() - time;
  time /= 10;
  time = Math.round(time);
  time /= 100;
  console.log(time);
  alert(
      "You played "+count+" rounds\n" +
      "You scored "+score+" correct\n" +
      "This took "+time+" seconds\n" +
      "You took an average of "+time/count +" seconds per question" );
    start();
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  var type = randomNumber(1, 4);
  var a, b, c, q;
  switch (type) {
    case 1:
      a = randomNumber(1, 100);
      b = randomNumber(1, 100);
      c = a + b;
      q = a + " + " + b + " = ?";
      break;
    case 2:
      a = randomNumber(1, 100);
      b = randomNumber(1, 100);
      c = a - b;
      q = a + " - " + b + " = ?";
      break;
    case 3:
      a = randomNumber(1, 10);
      b = randomNumber(1, 10);
      c = a * b;
      q = a + " * " + b + " = ?";
      break;
    case 4:
      b = randomNumber(1, 10);
      a = randomNumber(1, 10) * b;
      c = a / b;
      q = a + " / " + b + " = ?";
      break;

    default:
      break;
  }
  var ans = prompt(q, 0);

  if (ans === null || ans === "") {
    console.log("Question skipped");
  } else if (ans === "" + c) {
    console.log(ans + " is correct");
    score++;
  } else {
    console.log(ans + " is WRONG - the right answer is " + c);
  }

}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();