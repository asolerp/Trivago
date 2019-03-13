
import mockAxios from "axios";
import apiBack from "../../src/api/apiBack";

it("Call axios return an array  of wines", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data:  [{title: 'wine'}]
    })
  );

  // work
  const wines = await apiBack.getAllWines();



  // // assertions / expects
  expect(wines).toEqual({data: [{title: 'wine'}]});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
  "http://localhost:5000/wines");
});