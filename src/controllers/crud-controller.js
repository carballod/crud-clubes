const mapearTeam = require("../models/mapearTeam");
const jsonDataTeams = require("../../data/equipos.json");

const crudController = {};
const dataTeams = mapearTeam(jsonDataTeams);

crudController.getTeams = (req, res) => {
  res.render("teams", { dataTeams });
};

crudController.getTeam = (req, res) => {
  const { id } = req.params;
  const dataTeamId = dataTeams.find( (team) => team.id == parseInt(id) );
  
  if ( !dataTeamId ) {
    res.status(404).send("Equipo no encontrado");
    return;
  }

  res.render("details-team", { dataTeamId });
};

crudController.createTeam = (req, res) => {
  res.render("create");
};

crudController.updateTeam = (req, res) => {
  res.render("update");
};

crudController.deleteTeam = (req, res) => {
  res.render("delete");
};


module.exports = crudController;