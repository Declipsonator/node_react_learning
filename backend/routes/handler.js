const express = require('express');
const router = express.Router();
let tweets = [
    {
        "name": "Codr Kai",
        "msg": "This is my first tweet!",
        "username": "codrkai"
    },
    {
        "name": "Samantha Kai",
        "msg": "React JS is so simple!",
        "username": "samanthakai"
    },
    {
        "name": "John K",
        "msg": "Sweep the leg!",
        "username": "johnk"
    }
];
router.get('/tweets', (req, res) => {
    res.end(JSON.stringify(tweets));
});

router.post('/addTweet', (req, res) => {
    let json = req.body;
    console.log(json)
    if(json.name == null || json.msg == null || json.username == null) {
        res.status(400).send('Bad Request');
        return;
    }
    tweets.unshift({"name": json.name, "msg": json.msg, "username": json.username})
});

module.exports = router;