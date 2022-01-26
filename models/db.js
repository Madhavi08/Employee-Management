const mongoose = require('mongoose');
const dburl='mongodb+srv://Madhavi:Madhavi@cluster0.zduls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dburl, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');