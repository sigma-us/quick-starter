const express = require('express');
const path = require('path');
const app = express();

//app.use(require('./app/config/static.files'))

app.use('./public', express.static(path.join(__dirname, 'public'), {
    fallthrough: false
}));
app.get('*', function (req, res) {
    res.sendFile('sf.code/quick-node/public/index.html', {
        root: path.join(__dirname, '../..')
    });
})



//app.use(require('./app/routes'));


app.listen('8080', () => {
    console.log('Magic is happening on port 8080');
});
