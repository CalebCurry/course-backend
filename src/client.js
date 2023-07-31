const http = require('http');

http.get('http://localhost:3000', (res) => {
    console.log('Status Code', res.statusCode);

    res.on('data', (chunk) => {
        const data = JSON.parse(chunk.toString());

        data.users.forEach((user) => {
            console.log('User info', user.name);
        });
    });
});
