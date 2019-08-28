if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/mathtest.min');
}else{
    module.exports = require('./dist/mathtest');
}