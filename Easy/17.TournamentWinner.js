/*
Algo tournament
round boin
home and away team
two teams compete each other and all compete
only one winner(3pts) and loose(0pts), no ties
competitions:[[home,away],[home,away],[home,away]]
results:[0,1,0]
winner:[away,home,away] -> away:6pts home:3pts -> home
*/

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];

const results = [0, 0, 1];

// function addToLeaderBoard(winner,board){
//   if(winner in board){
//     board[winner]=+board[winner]+3
//   }else{
//     board[winner]=3
//   }
// }

// function findTheWinner(board){
//   let lead=-Infinity
//   let leader=null
//   for(let team in board){
//     if(board[team]>lead){
//       leader=team
//       lead=board[team]
//     }
//   }
//   return leader
// }

function tournamentWinner(competitions, results) {
  // Write your code here.
  // create hashmap of winner
  // const leaderBoard = {};
  // for (let round in competitions) {
  //   let winner = null;
  //   if (results[round] == 0) {
  //     winner = competitions[round][1];
  //   } else {
  //     winner = competitions[round][0];
  //   }
  //   addToLeaderBoard(winner,leaderBoard)
  // }
  // // find the winner from hash map
  // return findTheWinner(leaderBoard)
  
  // -----------
  
  function upateLeaderboard(team,points,leaderboard){
    if(team in leaderboard){
      leaderboard[team]+=3
    }else{
      leaderboard[team]=3
    }
  }
  
  const HOME_TEAM_WON=1
  let leadingTeam=''
  const leaderboard={[leadingTeam]:0}
  for(let round in competitions){
    const [home_team,away_team]=competitions[round]
    const winner=results[round]==HOME_TEAM_WON?home_team:away_team
    upateLeaderboard(winner,3,leaderboard)
    if(leaderboard[winner]>leaderboard[leadingTeam]){
      leadingTeam=winner
    }
  }
  return leadingTeam
}

tournamentWinner(competitions, results);
