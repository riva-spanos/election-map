// TEST** U.S. Election Map
var createPolitician = function(name, shortName, partyColor){

  var politician = {}; // new blank object
  politician.name = name; // set name property to the value of the name parameter
  politician.shortName = shortName;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.tallyUpTotalVotes = function()
  {
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;

};
//Politicians' Names
var katara = createPolitician("Katara of the Southern Water Tribe", "Katara", [71, 81, 137]);

var toph = createPolitician("Toph Beifong of the Earth Kingdom", "Toph", [23, 107, 30]);

console.log(katara.name);
console.log(toph.shortName);

console.log("Water Tribe Party Color: " + katara.partyColor);
console.log("Earth Kingdom Party Color: " + toph.partyColor);

//Election Results
katara.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

toph.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

katara.electionResults[9] = 1;
toph.electionResults[9] = 28;

katara.electionResults[4] = 17;
toph.electionResults[4] = 38;

katara.electionResults[43] = 11;
toph.electionResults[43] = 27;

katara.electionResults[9] = 3;
toph.electionResults[9] = 26;


console.log("Katara's Election Results: " + katara.electionResults);
console.log("Toph's Election Results: " + toph.electionResults);

//State Results
var setStateResults = function(state)
{
  theStates[state].winner = null;

  if (katara.electionResults[state] > toph.electionResults[state])
  {
    theStates[state].winner = katara;
  } else if (toph.electionResults[state] > katara.electionResults[state]){
    theStates[state].winner = toph;
  }

  //State Colors on Mouseover (base on winner)
  var stateWinner = theStates[state].winner;

  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [206, 170, 138];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];


  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];

  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];

  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];

  var winnerName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;

  candidate1Name.innerText = katara.shortName;
  candidate2Name.innerText = toph.shortName;

  candidate1Results.innerText = katara.electionResults[state];
  candidate2Results.innerText = toph.electionResults[state];

  if (theStates[state].winner === null)
  {
    winnerName.innerText = "DRAW";
  } else {
    winnerName.innerText = theStates[state].winner.shortName;
  }

  console.log(stateName);
  console.log(abbrev);
  console.log(candidate1Name);
  console.log(candidate2Name);
  console.log(candidate1Results);
  console.log(candidate2Results);
  console.log(winnerName);
};

//Results: Total Votes Tally
katara.tallyUpTotalVotes();
toph.tallyUpTotalVotes();

console.log("Katara: " + katara.totalVotes);
console.log("Toph: " + toph.totalVotes);

//Results: Winner
var winner = "???";

if (katara.totalVotes > toph.totalVotes)
{
  winner = katara.name;
} else if (toph.totalVotes > katara.totalVotes)
{
  winner = toph.name;
} else
{
  winner = "DRAW"
};

console.log("And the winner is: " + winner + "!!!");

//Populate your top table announcing the winners
var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = katara.name;
row.children[1].innerText = katara.totalVotes;
row.children[2].innerText = toph.name;
row.children[3].innerText = toph.totalVotes;

row.children[5].innerText = winner;
