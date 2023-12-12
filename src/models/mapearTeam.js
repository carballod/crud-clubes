const Team = require("./team");

function mapearTeam(teamDataJson) {

  // console.log("teamDataJson:", teamDataJson);

  const teamsMapeados = teamDataJson.map( (team) => {
    return new Team(
      team.id,
      team.name,
      team.area.name,
      team.crestUrl,
      team.address,
      team.website,
      team.founded,
      team.clubColors,
      team.venue,
      team.lastUpdated
    );
  });

   // console.log("teamsMapeados:", teamsMapeados);

  return teamsMapeados;

}

module.exports = mapearTeam;
