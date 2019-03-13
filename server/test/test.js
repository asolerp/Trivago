process.env.NODE_ENV = "test";


//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const expect = chai.expect;



chai.use(chaiHttp);
  
/*
   * Test the /GET route
   */

  describe("/Get all wines of database", () => {
    it("it should GET all wines", done => {
        chai
          .request(server)
          .get("/wines")
          // use a correct ID from the DB
          .send({})
          .end((err, res) => {

            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            // res.body.should.be.a("object");
            done();
          });
      })
  });

