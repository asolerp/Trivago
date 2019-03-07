const axios = require("axios");
const Parser = require("rss-parser");
const parser = new Parser();
const Wine = require("../../models/Wine");


const rssWine = {

  rss: "https://www.winespectator.com/rss/rss?t=dwp",
    
  sayHello: () => {
    console.log("hola");
  },

  getListOfWines() {
    parser
      .parseURL(this.rss)
      .then(feed => {
        let wineFeedArray = [];

        feed.items.forEach(item => {

          const {
            title,
            link,
            pubDate,
            author,
            content,
            contentSnippet,
            guid,
            categories,
            isoDate
          } = item;

          let wineItem = {
            title,
            price: Number(this.getPriceOfWine(item.title)),
            link,
            pubDate,
            author,
            content,
            contentSnippet,
            guid,
            categories,
            isoDate
          };

          wineFeedArray.push(wineItem);
        });

        Wine.insertMany(wineFeedArray)
        .then(() => console.log("Wines list has been update"))
        .catch(err => console.log("Something went wrong.", err))
      })
      .catch(err => console.log("There was a problem with the feed", err));
  },

  getPriceOfWine: text => {
    const expresion = /\$[0-9]+/gi;
    let chain = text;
    return chain.match(expresion)[0].substr(1);
  }
};

module.exports = rssWine;
