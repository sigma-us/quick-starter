const router = require("express").Router();
const path = require('path');


router.get('*', function (req, res) {
    res.sendFile('public/index.html', {
        root: path.join(__dirname, '../..')
    });
})

router.use(function (err, req, res, next) {
    // If the error object doesn't exists
    if (!err) {
        return next();
    }

    // Log it
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
});

module.exports = router;