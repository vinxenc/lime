import * as express from 'express';
import * as ParseDashboard from 'parse-dashboard';
import { ParseServer } from 'parse-server';
import { 
    PARSE_SERVER_PROPERTY, 
    PARSE_DASHBOARD_PROPERTY, 
    PARSE_DASHBOARD_OPTIONS 
} from '../settings/parse';

const app = express();

app.get('/', function (_: express.Request, res: express.Response) {
    res.send('Permission denied')
})

const api = new ParseServer(PARSE_SERVER_PROPERTY);
const dashboard = new ParseDashboard(
    PARSE_DASHBOARD_PROPERTY, 
    PARSE_DASHBOARD_OPTIONS
);

console.log(PARSE_DASHBOARD_PROPERTY, PARSE_DASHBOARD_OPTIONS)

// Serve the Parse API on the /parse URL prefix
app.use('/api', api);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

app.listen(process.env.PORT || 1337, function () {
    console.log('parse-server-example running on port 1337.');
});
