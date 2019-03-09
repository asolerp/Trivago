const axios = require("axios");
const Parser = require("rss-parser");
const parser = new Parser();
const Wine = require("../../models/Wine");
const imagesAPI = require("./imagesAPI");

const rssWine = {
  rss: "https://www.winespectator.com/rss/rss?t=dwp",
  imagesWine: [
    "https://www.bodegascasaprimicia.com/src/uploads/2014/09/calados22.jpg",
    "https://www.webtenerife.com/es/que-hacer/comer-y-beber/bodegas/publishingimages/bodegas1-sb.jpg",
    "https://content.gnoss.ws/lrt/imagenes/Documentos/imgsem/ee/eefb/eefbf0c5-3cb5-4e01-8eb6-28566098b9a3/37910a6e-9468-3d59-e621-f0b8f8156832.jpg",
    "http://f99b3f666472f32e9593-321d259a3c496f8fa2f55e617c4e84d7.r79.cf1.rackcdn.com/309/1/large.jpg",
    "http://www.grupobodegaspalacio.es/media/1387/vinamayor_6.jpg"
  ],

  sayHello: () => {
    console.log("hola");
  },

  getListOfWines() {
    parser
      .parseURL(this.rss)
      .then(feed => {
        let wineFeedArray = [];

        feed.items.forEach(async item => {

          let wineTitleClean = item.title.substr(0, item.title.indexOf("$"));

          const {
            link,
            pubDate,
            author,
            content,
            contentSnippet,
            guid,
            categories,
            isoDate
          } = item;

          // const wineImage =  image.data.data.result.items[0].media

          let wineItem = {
            title: wineTitleClean,
            price: Number(this.getPriceOfWine(item.title)),
            image: this.imagesWine[Math.floor(Math.random() * this.imagesWine.length)],
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
          .catch(err => console.log("Something went wrong.", err));
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
