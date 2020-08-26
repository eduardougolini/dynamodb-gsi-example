var AWS = require('aws-sdk');

AWS.config.update({region: 'localhost', endpoint: 'http://localhost:8000', accessKeyId: 'access_key_id', secretAccessKey: 'secret_access_key'});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Leaderboard",
    IndexName: "LeaderboardIndex",
    FilterExpression: 'LeagueId = :league_id',
    KeyConditionExpression: "LeagueId = :league_id",
    ExpressionAttributeValues: {
        ":league_id": 1
    },
    ProjectionExpression: "Score, Id",
    ScanIndexForward: false
}

docClient.scan(params, (err, data) => {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
  }
});