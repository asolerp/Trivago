const axios = require('axios')

const imagesApi = {

    async getImagesOfWine(wine) {
        const query = wine;
        let config = {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
          },
          params: {
            count: 50,
            q: query,
            t: "images",
            safesearch: 1,
            locale: "en_US",
            uiv: 4
          }
        };
        return response = await axios.get("https://api.qwant.com/api/search/images", config)
    }

}

module.exports = imagesApi