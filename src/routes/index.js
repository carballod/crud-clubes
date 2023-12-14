const { Router } = require("express");
const router = Router();
const multer = require("multer"); 
const { getTeams, getTeam, getFormCreateTeam, createTeam, updateTeam, deleteTeam } = require("../controllers/crud-controller");


router.get("/", getTeams);

router.get("/details-team/:id", getTeam);

router.get("/create-team", getFormCreateTeam);
router.post("/create-team", createTeam);

router.put("/update-team/:id", updateTeam);

router.delete("/delete-team/:id", deleteTeam);

module.exports = router;
