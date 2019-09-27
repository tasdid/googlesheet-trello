const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const request = require("request");
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = 'token.json';

fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), listMajors);
});
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}
function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1X5NksxOJpUu3WTIjnWtkGWkscgZBQEzS3vW17HWfUTw',
    range: 'Class Data!A2:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    // console.log(res.data.values); console.log("\n");
    // send sheet data to trello
    const rows = res.data.values;
    const data = rows.map((r) => r[0]); console.log(data);
    const options = {
        method: 'POST',
        url: 'https://api.trello.com/1/cards',
        qs: {
          name: 'Final custom made card from nodeJS',
          desc: `${data}`,
          idList: '5d8b771e72d7092ab33b5cc7',
          keepFromSource: 'all',
          key: '3825af717a53e4ac083a98d2f2a04032',
          token: '255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2'
        }
      }
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
      })
  });
}