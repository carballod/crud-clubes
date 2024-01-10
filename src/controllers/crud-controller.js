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


crudController.getFormUpdateTeam = (req, res) => {
  const { id } = req.params;
  const dataTeamId = dataTeams.find( (team) => team.id == parseInt(id) );
  
  if ( !dataTeamId ) {
    res.status(404).send("Team not found");
    return;
  }

  res.render("update", { dataTeamId });
};


crudController.updateTeam = (req, res) => {
  const { id } = req.params;
  const { name, country, shortName, tla, address, phone, website, email, founded, clubColors, venue } = req.body;
  const lastUpdated = new Date().toISOString();

  // si no se sube una imagen se mantiene la que ya estaba
  let crestUrl = '';
  if (req.file) {
    crestUrl = `${req.file.filename}`;
  } else {
    const existingTeam = dataTeams.find((team) => team.id === parseInt(id));
    crestUrl = existingTeam ? existingTeam.crestUrl : '';
  }


  const newTeam = new Team( 
    parseInt(id), { id: 2072, name: country }, name, shortName, tla, crestUrl, address, phone, website, email, founded, clubColors, venue, lastUpdated 
  ); 

  // busca el indice del equipo a actualizar y lo reemplaza
  const indexTeam = dataTeams.findIndex( (team) => team.id == parseInt(id) );
  dataTeams[indexTeam] = newTeam;

  const filePath = path.resolve(__dirname, '../../data/equipos.json');
  fs.writeFileSync( filePath, JSON.stringify(dataTeams) );

  res.render("teams", { dataTeams });
};

crudController.getDeleteTeam = (req, res) => {
  const { id } = req.params;
  const dataTeamId = dataTeams.find( (team) => team.id == parseInt(id) );
  
  if ( !dataTeamId ) {
    res.status(404).send("Team not found");
    return;
  }

  res.render("delete", { dataTeamId });
};


crudController.deleteTeam = (req, res) => {
  const { id } = req.params;
  const indexTeam = dataTeams.findIndex( (team) => team.id == parseInt(id) );
  if (indexTeam !== -1) dataTeams.splice(indexTeam, 1);

  const filePath = path.resolve(__dirname, '../../data/equipos.json');
  fs.writeFileSync( filePath, JSON.stringify(dataTeams) );

  res.render("teams", { dataTeams });
};


module.exports = crudController;