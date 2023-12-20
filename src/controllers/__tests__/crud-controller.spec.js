const crudController = require("../crud-controller");
const Team = require("../../models/team");

describe("crudController", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        id: 99,
        area: { id: 2072, name: "TEST" },
        name: "TEST",
        shortName: "TST",
        tla: "TST",
        crestUrl: "F210q6mbYAAGPO3.jpeg",
        address: "TEST ADDRESS 123",
        phone: "12231313",
        website: "http://www.tests.com.ar",
        email: "TEST@google.com",
        founded: "192323",
        clubColors: "TEST, TEST",
        venue: "Stadium Tests",
        lastUpdated: "2023-12-15T18:25:12.275Z",
      },
    };
    res = {
      render: jest.fn(),
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getTeams", () => {
    it("should render teams view with dataTeams", () => {
      crudController.getTeams(req, res);
      expect(res.render).toHaveBeenCalledWith("teams", {
        dataTeams: expect.any(Array),
      });
    });
  });

  describe("getTeam", () => {
    it("should render details-team view with dataTeamId", () => {
      req.params = { id: 57 };
      crudController.getTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("details-team", {
        dataTeamId: expect.any(Object),
      });
      expect(res.render).toHaveBeenCalled();
    });

    it("should respond with 404 if team not found", () => {
      req.params = { id: 999 };
      crudController.getTeam(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith("Team not found");
    });
  });

  describe("getFormCreateTeam", () => {
    it("should render create view", () => {
      crudController.getFormCreateTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("create");
    });
  });

  describe("createTeam", () => {
    it("should render teams view with updated dataTeams", () => {
      req.file = { filename: "nombre_del_archivo.png" };
      crudController.createTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("teams", {
        dataTeams: expect.any(Array),
      });
    });
  });

  describe("getFormUpdateTeam", () => {
    it("should render update view with dataTeamId", () => {
      req.params = { id: 57 };
      crudController.getFormUpdateTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("update", {
        dataTeamId: expect.any(Object),
      });
      expect(res.render).toHaveBeenCalled();
    });

    it("should respond with 404 if team not found", () => {
      req.params = { id: 999 };
      crudController.getFormUpdateTeam(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith("Team not found");
    });
  });

  describe("updateTeam", () => {
    it("should render teams view with updated dataTeams", () => {
      req.params = { id: 57 };
      crudController.updateTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("teams", {
        dataTeams: expect.any(Array),
      });
    });
  });

  describe("getDeleteTeam", () => {
    it("should render delete view with dataTeamId", () => {
      req.params = { id: 22 };
      crudController.getDeleteTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("delete", {
        dataTeamId: expect.any(Object),
      });
      expect(res.render).toHaveBeenCalled();
    });

    it("should respond with 404 if team not found", () => {
      req.params = { id: 999 };
      crudController.getDeleteTeam(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith("Team not found");
    });
  });

  describe("deleteTeam", () => {
    it("should render teams view with updated dataTeams", () => {
      req.params = { id: 57 };
      crudController.deleteTeam(req, res);
      expect(res.render).toHaveBeenCalledWith("teams", {
        dataTeams: expect.any(Array),
      });
    });
  });

});
