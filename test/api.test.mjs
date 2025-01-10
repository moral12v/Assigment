import { expect } from "chai";
import axios from "axios";

describe("API Test Suite for JSONPlaceholder", () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  // Test Case 1: Verify the API returns a 200 OK
  it("should return status 200 OK", async function () {
    this.timeout(5000);
    const response = await axios.get(baseURL);
    expect(response.status).to.equal(200);
  });

  // Test Case 2: validate Response body structure.
  it("should return response with userId, id, title, and body fields", async () => {
    const response = await axios.get(baseURL);
    expect(response.data[0]).to.have.all.keys("userId", "id", "title", "body");
  });

  // Test Case 3: Verify that the fields in the response have correct data types
  it("should return userId as a number, id as a number, title as a string, and body as a string", async () => {
    const response = await axios.get(baseURL);
    const post = response.data[0];

    expect(post.userId).to.be.a("number");
    expect(post.id).to.be.a("number");
    expect(post.title).to.be.a("string");
    expect(post.body).to.be.a("string");
  });

  // Test Case 4: Handle Unauthorized Error (Mocked)
  it("should return 401 Unauthorized when invalid token is used", async () => {
    try {
      await axios.get(baseURL, {
        headers: { Authorization: "Bearer invalid_token" },
      });
    } catch (error) {
      expect(error.response.status).to.equal(401);
      expect(error.response.data.error).to.equal("Unauthorized");
    }
  });

  // Test Case 5: Test for missing required parameter (edge case)
  it("should return a 400 error for missing required query parameters", async () => {
    try {
      await axios.get(baseURL, { params: {} });
    } catch (error) {
      expect(error.response.status).to.equal(400);
    }
  });

  // Test Case 6: Validate Response Time (Performance Test)
  it("should return the response within 2 seconds", async () => {
    const start = Date.now();
    const response = await axios.get(baseURL);
    const duration = Date.now() - start;
    expect(duration).to.be.lessThan(2000);
  });
});
