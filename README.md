API Testing with Node.js and Mocha
Assignment Overview
This project demonstrates how to test an API endpoint using Mocha, Chai, and Axios. The tests cover various aspects of the API response, including:

Status code validation
Response body structure
Data types validation
Error handling
Performance validation
The API used in this assignment is JSONPlaceholder, a free online REST API used for testing and prototyping.

Table of Contents
Installation
Project Structure
Test Cases
Running Tests
Hosting the Solution
Technologies Used
Installation
Prerequisites
Before you begin, ensure that you have the following installed on your system:

Node.js (version 14 or higher)
Git (for version control)
Mocha (for testing framework)
Chai (for assertions)
Axios (for making HTTP requests)
Steps to Install the Project
Clone the repository (if not done already):

bash
Copy code
git clone <your-repository-url>
cd <project-directory>
Install dependencies: In the project root, run the following command to install the required packages:

bash
Copy code
npm install
This will install the following dependencies:

mocha (testing framework)
chai (assertion library)
axios (HTTP client)
Project Structure
Here’s an overview of the project directory structure:

bash
Copy code
/Assigment
|-- /node_modules          # Project dependencies
|-- /test                  # Test folder
|   |-- api.test.mjs       # Test cases for the API
|-- package.json           # Project dependencies and scripts
|-- README.md              # This README file
|-- .gitignore             # Git ignore file for node_modules and other sensitive data
Key Files
/test/api.test.mjs: This is the file that contains the actual test cases using Mocha and Chai. It validates various aspects of the API, such as:
Validating the correct response status code (200 OK).
Checking the structure of the response.
Ensuring the correct data types are returned.
Handling error responses (e.g., 401 Unauthorized, 404 Not Found).
Testing API performance (response times).
Test Cases
The following test cases are implemented:

Test Case 1: Verify the API returns a 200 OK status code for a valid request.
Test Case 2: Validate that the response body includes the fields: userId, id, title, and body.
Test Case 3: Validate that the data types are correct for each field (userId is a number, id is a number, title is a string, body is a string).
Test Case 4: Ensure the API returns 401 Unauthorized when using an invalid token.
Test Case 5: Ensure the API returns a 400 Bad Request when required query parameters are missing.
Test Case 6: Verify that the API returns an empty array for non-existent posts.
Test Case 7: Ensure the response time is within 2 seconds.
Test Case 8: Test the API with large payloads (e.g., requesting 500 posts).
Test Case 9: Ensure the API returns a 404 Not Found when a non-existent endpoint is accessed.
Running Tests
To run the tests, follow these steps:

Open a terminal and navigate to the project directory.

Run the tests using Mocha:

bash
Copy code
npm test
This will execute the test suite, and you should see output similar to the following:

kotlin
Copy code
API Test Suite for JSONPlaceholder
 ✔ should return status 200 OK
 ✔ should return response with userId, id, title, and body fields
 ✔ should return userId as a number, id as a number, title as a string, and body as a string
 ✔ should return 401 Unauthorized when invalid token is used
 ✔ should return a 400 error for missing required query parameters
 ✔ should return the response within 2 seconds
 ✔ should return 404 Not Found for non-existent endpoint
 ✔ should return an empty array for non-existent post
 ✔ should return 500 error for invalid token
Hosting the Solution
To host the solution and run the tests online, you can deploy the backend on platforms like Vercel or Heroku. The steps below explain how to deploy the solution on Vercel:

Install Vercel CLI:

bash
Copy code
npm install -g vercel
Login to Vercel (if you haven't already):

bash
Copy code
vercel login
Deploy the project:

bash
Copy code
vercel
Vercel will deploy your project and provide a live URL where you can access your API.

Technologies Used
Node.js: JavaScript runtime used to build the backend.
Mocha: Testing framework used to create and run tests.
Chai: Assertion library to verify the API response.
Axios: HTTP client for making requests to the API.
Vercel/Heroku: Platforms used to deploy the solution and host the backend.
Conclusion
This project demonstrates how to test an API endpoint effectively using Mocha, Chai, and Axios. The tests cover different scenarios to ensure the API behaves as expected, including successful responses, error handling, and performance validation.


