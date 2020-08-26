var AWS = require('aws-sdk');

AWS.config.update({region: 'localhost', endpoint: 'http://localhost:8000', accessKeyId: 'access_key_id', secretAccessKey: 'secret_access_key'});

var inserts = [
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '1'
      },
      "Score": {
        "N": '55'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '2'
      },
      "Score": {
        "N": '53'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '3'
      },
      "Score": {
        "N": '80'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '4'
      },
      "Score": {
        "N": '82'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '5'
      },
      "Score": {
        "N": '6'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '6'
      },
      "Score": {
        "N": '17'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '7'
      },
      "Score": {
        "N": '65'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '8'
      },
      "Score": {
        "N": '70'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
  {
    "TableName": "Leaderboard",
    "Item": {
      "Id": {
        "N": '9'
      },
      "Score": {
        "N": '65'
      },
      "LeagueId": {
        "N": '1'
      }
    }
  },
]

var dynamodb = new AWS.DynamoDB()

inserts.map((putItemInput) => {
  dynamodb.putItem(putItemInput).promise()
})