const Team = require("./team");

function mapearTeam(teamDataJson) {

  // console.log("teamDataJson:", teamDataJson);

  const teamsMapeados = teamDataJson.map( (team) => {
    return new Team(
      team.id,
      team.area,
      team.name,
      team.shortName,
      team.tla,
      team.crestUrl,
      team.address,
      team.phone,
      team.website,
      team.email,
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
