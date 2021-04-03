import * as express from 'express';
import * as ParseDashboard from 'parse-dashboard';
import { ParseServer } from 'parse-server';
import * as path from 'path';
import { 
    PARSE_DASHBOARD_OPTIONS, 
    PARSE_DASHBOARD_PROPERTY, 
    PARSE_SERVER_PROPERTY 
} from './settings/parse';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (_: express.Request, res: express.Response) {
//     res.send('Permission denied')
// })

const api = new ParseServer(PARSE_SERVER_PROPERTY);
const dashboard = new ParseDashboard(
    PARSE_DASHBOARD_PROPERTY, 
    PARSE_DASHBOARD_OPTIONS
);

// Serve the Parse API on the /parse URL prefix
app.use('/api', api);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

app.use('*', (_: express.Request, res: express.Response) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(process.env.PORT || 1337, () => {
    // tslint:disable-next-line
    console.log('parse-server-example running on port 1337.');
});
