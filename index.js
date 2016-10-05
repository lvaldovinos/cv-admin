#!/usr/bin/env node

const program = require('commander');
const packageJson = require('./package.json');
const is = require('./lib/is');
const server = require('./server');
const config = require('my-config');
const client = require('./lib/be-client');
const winston = require('winston');

program
  .version(packageJson.version)
  .option('-e, --environment [value]', 'Application settings in speficic environment');

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
} else {
  if (!is.string(program.environment) && !(program.environment && program.environment.length)) {
    winston.error('Please provide an environment');
    process.exit(1);
  }

  const env = program.environment;
  const configuration = config.init({
    path: 'config.json',
    env,
  });

  if (!is.url(configuration.be)) {
    winston.error('Please provide a valid environment which exists in config.json');
    process.exit(1);
  }
  // save URL first
  client.setUrl(configuration.be);
  // create client instances and save them
  client.company = new client.Company();
  client.skill = new client.Skill();
  client.project = new client.Project();
  // starting server
  server.listen(configuration.port, (err) => {
    if (err) {
      winston.error(err.message, err);
      process.exit(1);
    }
    winston.info(`Listening on port ${configuration.port}`);
  });
}
