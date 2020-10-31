const app = require('./app');
const config = require('./config/port.config');



app.listen(config.get('port') || 3000, () => {
  console.log(`Connect in port 3000`);
});