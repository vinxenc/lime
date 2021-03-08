import * as express from 'express';
import { ParseServer } from 'parse-server';
import { PARSE_SERVER_PROPERTY } from '../settings/parse';

const app = express();

const api = new ParseServer(PARSE_SERVER_PROPERTY);

// Serve the Parse API on the /parse URL prefix
app.use('/api', api);

app.listen(process.env.PORT || 1337, function () {
    console.log('parse-server-example running on port 1337.');
});
