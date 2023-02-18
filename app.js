const express = require('express');
const winston = require('./startup/logging');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const bp = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(logger('combined', {
	stream: fs.createWriteStream('./logging.log', {flags: 'a'})
}));

app.use(logger('combined'));
app.use(helmet());
app.use(cors());
app.use(compression({level: 9}));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname,'views')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./startup/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}`));