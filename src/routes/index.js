const { Router } = require("express");
const router = Router();
const { getTeams, getTeam, createTeam, updateTeam, deleteTeam } = require("../controllers/index");

router.get("/", getTeams);

router.get("/team", getTeam);

// post
router.post("/create-team", createTeam);

// put
router.put("/update-team", updateTeam);

// delete
router.delete("/delete-team", deleteTeam);

module.exports = router;
