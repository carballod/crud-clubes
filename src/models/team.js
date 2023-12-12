class Team {
    constructor(id, name, country, image, adress, website, founded, clubColors, venue, lastUpdated ) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.image = image;
        this.adress = adress;
        this.website = website;
        this.founded = founded;
        this.clubColors = clubColors;
        this.venue = venue;
        this.lastUpdated = lastUpdated;
    }
}

module.exports = Team;