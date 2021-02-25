import * as express from 'express';

const app = express();

app.get('/heath-check', (req: express.Request, res: express.Response) => {
    res.json({
        result: "heath-check"
    })
});

app.listen(3000);