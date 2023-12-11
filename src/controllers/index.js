
const indexCtrl = {};

indexCtrl.getTeams = (req, res) => {
  res.render("teams");
};

indexCtrl.getTeam = (req, res) => {
  res.render("details");
};

indexCtrl.createTeam = (req, res) => {
  res.render("create");
};

indexCtrl.updateTeam = (req, res) => {
  res.render("update");
};

indexCtrl.deleteTeam = (req, res) => {
  res.render("delete");
};

module.exports = indexCtrl;