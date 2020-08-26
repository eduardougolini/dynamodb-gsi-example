var AWS = require('aws-sdk');
var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('model.json', 'utf8'));

AWS.config.update({region: 'localhost', endpoint: 'http://localhost:8000', accessKeyId: 'access_key_id', secretAccessKey: 'secret_access_key'});
var client = new AWS.DynamoDB();

obj.map((params) => {
    client.createTable(params, (tableErr, tableData) => {
        if (tableErr) {
            console.error("Error JSON:", JSON.stringify(tableErr, null, 2));
        } else {
            console.log("Created table successfully!");
        }
    })
});