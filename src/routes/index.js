const { Router } = require("express");
const router = Router();
const { getTeams, getTeam, getFormCreateTeam, createTeam, getFormUpdateTeam, updateTeam, deleteTeam } = require("../controllers/crud-controller");


router.get("/", getTeams);

router.get("/details-team/:id", getTeam);

router.get("/create-team", getFormCreateTeam);
router.post("/create-team", createTeam);

router.get("/update-team/:id", getFormUpdateTeam);
// metodo put (middleware method-override) ?
router.post("/update-team/:id", updateTeam);

router.delete("/delete-team/:id", deleteTeam);

module.exports = router;
