var path = require('path');
module.exports = {
    index: function(req, res) {
        res.sendFile('../dist/mysite/index.html');
    }
};