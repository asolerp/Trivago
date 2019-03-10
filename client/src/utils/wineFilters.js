const moment = require("moment");
// const taday = new Date;

const wineFilters = {
  today: moment(new Date()).format("MMM Do YY"),
  wines: {
    todayWines: undefined,
    restWines: undefined
  },

  getWineDay(winesArray) {
    this.wines.todayWines = winesArray.filter(
      wine => moment(wine.pubDate).format("MMM Do YY") === this.today
    );
    this.wines.restWines = winesArray.filter(
      wine => moment(wine.pubDate).format("MMM Do YY") !== this.today
    );

    return this.wines;
  }
};

export default wineFilters;
