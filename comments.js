// Create web server with Node.js
// 1. Create a new project folder
// 2. Create a new file named comments.js
// 3. Write the following code:
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// 4. Save the file
// 5. Open the terminal
// 6. Run the file with the following command:
// node comments.js
// 7. Open the browser and go to http://localhost:3000
// 8. You should see the message: Hello World!
// 9. To stop the server, press Ctrl + C in the terminal
