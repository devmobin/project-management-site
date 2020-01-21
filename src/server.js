const app = require('./app');
const { Port } = require('./config/config');

app.listen(Port, () => {
  console.clear();
  console.log('app is running on port ' + Port);
});
