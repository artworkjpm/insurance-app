import { compute } from "./forceNumberZero";
import products from "../assets/SingularCoverData/InsurProducts.json";

describe("getting data sorting kinds", () => {
  //test we get the data from the json file
  it("gets the insurance products", () => {
    expect(products[0].name).toBe("Casa mia!");
  });

  //check we have 7 kinds of products
  it("no duplicates in kind of products", () => {
    let removeDuplicates = products.filter(
      (v, i, a) => a.findIndex(t => t.kind === v.kind) === i
    );
    //there are 7 total kinds, check we have 7
    expect(removeDuplicates.length).toBe(7);
  });
});

describe("adding to favourites", () => {
  //when adding to favourites, never show -1 for removing favourite click
  it("should return 0 if input is negative", () => {
    let counter = 1;
    counter--;
    counter--;
    console.log(counter);
    const result = compute(counter);
    expect(result).toBe(0);
  });
});
