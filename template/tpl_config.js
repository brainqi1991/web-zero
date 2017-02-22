module.exports = `var env = process.env.NODE_ENV;

var allowEnvs = ['development','production','staging'];
if ( allowEnvs.indexOf(env) < 0 ) {
  // Invalidation env. Load with a default value:development.
  env = 'development';
}
console.log(' ---> 当前环境变量: NODE_ENV='+env);

var db = require('./db_'+env);

var config = {
  Qiniu: db.Qiniu,
  Mongo: db.Mongo,
  Redis: db.Redis,
  Mysql: db.Mysql,
  JzezMiddle: db.JzezMiddle
};

module.exports = config;
`