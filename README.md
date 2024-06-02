# Project Setup

These steps set up a basic Node.js project with essential dependencies and configuration for starting the server and enabling automatic restarts during development.

## Steps to Initialize the Project

1. Initialize a new Node.js project with default settings:
    ```sh
    npm init -y
    ```

2. Install `nodemon` for automatic restarts during development:
    ```sh
    npm install nodemon
    ```

3. Install `express`, a web application framework for Node.js:
    ```sh
    npm install express
    ```

4. Install `dotenv` to manage environment variables:
    ```sh
    npm install dotenv
    ```

5. Install `mongoose` for MongoDB object modeling:
    ```sh
    npm install mongoose
    ```

6. Modify the `package.json` file to include start and development scripts:
    - Open the `package.json` file and add the following under the `scripts` section:
        ```json
        "scripts": {
            "start": "node index.js",
            "dev": "nodemon index.js"
        }
        ```

By following these steps, you will have a Node.js project set up with essential dependencies and configurations for development.

## Running the Project

- To start the application:
    ```sh
    npm start
    ```

- To start the application with automatic restarts during development:
    ```sh
    npm run dev
    ```
