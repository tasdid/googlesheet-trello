// trello api key     - 3825af717a53e4ac083a98d2f2a04032(this is false data)
// trello api token   - 255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2(this is false data)
// manage google sheet- https://developers.google.com/sheets/api/quickstart/nodejs
// API console        - https://console.developers.google.com/apis/dashboard?project=quickstart-1568460354723&authuser=0&pli=1
// enable power ups   - https://trello.com/power-ups/5a2de0c41ae4a1537bb0055d/read-me
//                    - https://trello.com/power-ups/admin
//                    - https://trello.com/power-ups/5d8c41ded14771703b014278/edit
//                    - https://tech.trello.com/power-up-tutorial-part-one/
//                    - https://trello.com/b/9Bjspx7g/welcome-board

// host on glitch 
// https://github.com/trello/glitch-trello-power-up
// https://knplabs.com/en/blog/how-we-extended-the-trello-experience-with-power-ups
// https://glitch.com/edit/#!/trello-power-up-skeleton?path=README.md:1:0

// ********** get card name ************
// var request = require("request");
// var options = {
//   method: 'GET',
//   url: 'https://api.trello.com/1/cards/F99xZ217/name',
//   qs: {key: '3825af717a53e4ac083a98d2f2a04032', token: '255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2'}
// };

// request(options, function (error, res, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// post comment in a card
// var request = require("request");
// var options = {
//   method: 'POST',
//   url: 'https://api.trello.com/1/cards/F99xZ217/actions/comments',
//   qs: {text: 'first comment after failure', key: '3825af717a53e4ac083a98d2f2a04032', token: '255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2'}
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// ********** get idList for zzz/in progress, idList is in fields property**********
// var request = require("request");

// var options = {
//   method: 'GET',
//   url: 'https://api.trello.com/1/cards/F99xZ217',
//   qs: {
//     fields: 'all',
//     key: '3825af717a53e4ac083a98d2f2a04032',
//     token: '255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2'
//   }
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });


//  **********post new card **********
// var request = require("request");

// var options = {
//   method: 'POST',
//   url: 'https://api.trello.com/1/cards',
//   qs: {
//     name: 'Second custom made card from nodeJS',
//     desc: '- manager do this \n- manager do that',
//     idList: '5d8b771e72d7092ab33b5cc7',
//     keepFromSource: 'all',
//     key: '3825af717a53e4ac083a98d2f2a04032',
//     token: '255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2'
//   }
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// ********** post a label **********
var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api.trello.com/1/boards/9Bjspx7g/labels',
  qs: {name: 'medusa', color: 'blue',
      key: '3825af717a53e4ac083a98d2f2a04032',
      token: '255b17a284de41f83eb17efc94b1ca510b4abedacb7c8d0fb0f0eefb8dbf66a2'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});