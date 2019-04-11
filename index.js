var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    // TODO implement
    console.log("PARAMS---:"+parseInt(event.params.querystring.studentid));
    var params = {
        TableName: "Students",
        Key:{
            "studentid": parseInt(event.params.querystring.studentid)
        }
    };
    
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            //console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            callback(null, JSON.parse( JSON.stringify(data, null, 2)));
        }
    });
};
