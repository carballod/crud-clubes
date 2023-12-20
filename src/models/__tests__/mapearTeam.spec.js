const mapearTeam = require("../mapearTeam");
const Team = require("../team");

describe("mapearTeam", () => {
  it("should map team data to Team objects", () => {
    
    const teamDataJson = [
      {
        id: 1,
        area: { id: 2072, name: "TEST" },
        name: "TEST Team",
        shortName: "TT",
        tla: "TST",
        crestUrl: "F210q6mbYAAGPO3.jpeg",
        address: "TEST ADDRESS 123",
        phone: "12231313",
        website: "http://www.tests.com.ar",
        email: "test@google.com",
        founded: "192323",
        clubColors: "White, Grey",
        venue: "Stadium Tests",
        lastUpdated: "2023-12-15T18:25:12.275Z",
      },
    ];

    const mappedTeams = mapearTeam(teamDataJson);
    expect(mappedTeams).toHaveLength(teamDataJson.length);
    mappedTeams.forEach((team) => {
      expect(team).toBeInstanceOf(Team);
    });

  });
});
