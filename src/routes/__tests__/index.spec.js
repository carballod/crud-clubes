const {
  getTeams,
  getTeam,
  getFormCreateTeam,
  createTeam,
  getFormUpdateTeam,
  updateTeam,
  getDeleteTeam,
  deleteTeam,
} = require("../../controllers/crud-controller");

describe("Routes", () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      render: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  it("should render teams view with dataTeams", () => {
    getTeams(req, res);
    expect(res.render).toHaveBeenCalledWith("teams", {
      dataTeams: expect.any(Array),
    });
  });

  it("should render details-team view with dataTeamId", () => {
    req.params.id = 22;
    getTeam(req, res);
    expect(res.render).toHaveBeenCalledWith("details-team", {
      dataTeamId: expect.any(Object),
    });
  });

  it('should render create view', () => {
    getFormCreateTeam(req, res);
    expect(res.render).toHaveBeenCalledWith('create');
  });


  it('should render teams view with updated dataTeams', () => {
    req.file = { filename: 'nombre_del_archivo.png' };
    createTeam(req, res);
    expect(res.render).toHaveBeenCalledWith('teams', {
      dataTeams: expect.any(Array),
    });
  });

  it('should render update view with dataTeamId', () => {
    req.params.id = 22;
    getFormUpdateTeam(req, res);
    expect(res.render).toHaveBeenCalledWith('update', {
      dataTeamId: expect.any(Object),
    });
  });

  it('should render teams view with updated dataTeams', () => {
    req.params.id = 22;
    updateTeam(req, res);
    expect(res.render).toHaveBeenCalledWith('teams', {
      dataTeams: expect.any(Array),
    });
  });

  it('should render delete view with dataTeamId', () => {
    req.params.id = 22;
    getDeleteTeam(req, res);
    expect(res.render).toHaveBeenCalledWith('delete', {
      dataTeamId: expect.any(Object),
    });
  });

  it('should render teams view without deleted team', () => {
    req.params.id = 22;
    deleteTeam(req, res);
    expect(res.render).toHaveBeenCalledWith('teams', {
      dataTeams: expect.any(Array),
    });
  });

  
});
