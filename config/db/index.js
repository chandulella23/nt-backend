const mongoose = require('mongoose')

mongoose.connect('mongodb://chandu:chandu23@ds157956.mlab.com:57956/nt-backend', {
    useNewUrlParser: true
},
    (err, db) => {
        if (!err) {
            console.log('Database connected successfully');
        } else {
            console.log('mongoose connection failed')
        }
    });
mongoose.set('debug', true);
