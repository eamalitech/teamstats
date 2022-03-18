const team = {
  _players: [
    {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
    },
  ],
  
  _games: [
    {opponent: "Doug",
    teamPoints: 33,
    opponentPoints: 52},
    {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
    },
  ],
  //getter methods
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer (firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
           age: age
           };
    this._players.push(player);
  },
  
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints};
    this._games.push(game);
  },
  
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Outlaws', 1, 3);
team.addGame('Gladiators', 3, 1);
team.addGame('Mayhem', 3, 0);

console.log(team.players);

