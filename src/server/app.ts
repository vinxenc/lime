import * as express from 'express';
import { ParseServer } from 'parse-server';

const app = express();

// @ts-ignore
const api = new ParseServer({
    databaseURI: '', // Connection string for your MongoDB database
    // cloud: './cloud/main.js', // Path to your Cloud Code
    appId: 'myAppId',
    masterKey: 'myMasterKey', // Keep this key secret!
    fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function () {
    console.log('parse-server-example running on port 1337.');
});
