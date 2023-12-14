const mapearTeam = require("../models/mapearTeam");
const jsonDataTeams = require("../../data/equipos.json");
const Team = require("../models/team");
const fs = require("fs");
const path = require('path');

const crudController = {};
const dataTeams = mapearTeam(jsonDataTeams);

crudController.getTeams = (req, res) => {
  res.render("teams", { dataTeams });
};


crudController.getTeam = (req, res) => {
  const { id } = req.params;
  const dataTeamId = dataTeams.find( (team) => team.id == parseInt(id) );
  
  if ( !dataTeamId ) {
    res.status(404).send("Team not found");
    return;
  }

  res.render("details-team", { dataTeamId });
};


crudController.getFormCreateTeam = (req, res) => {
  res.render("create");
};


crudController.createTeam = (req, res) => {
  const { name, country, shortName, tla, address, phone, website, email, founded, clubColors, venue } = req.body;
  const id = dataTeams.length + 1;
  const lastUpdated = new Date().toISOString();
  const crestUrl = `${req.file.filename}`;

  const newTeam = new Team( 
    id, { id: 2072, name: country }, name, shortName, tla, crestUrl, address, phone, website, email, founded, clubColors, venue, lastUpdated 
  ); 
  dataTeams.push( newTeam );

  const filePath = path.resolve(__dirname, '../../data/equipos.json');
  fs.writeFileSync( filePath, JSON.stringify(dataTeams) );

  res.render("teams", { dataTeams });
};


crudController.updateTeam = (req, res) => {
  res.render("update");
};

crudController.deleteTeam = (req, res) => {
  res.render("delete");
};


module.exports = crudController;