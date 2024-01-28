const awilix = require('awilix');
const path = require('path');
const glob = require('glob');

const container = awilix.createContainer();

container.loadModules(
    [
        './services/**/*.js',
        './controllers/**/*.js'
    ],
    {
        cwd: __dirname,
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: awilix.Lifetime.SINGLETON,
            register: awilix.asClass,
        },
    },
);


module.exports = container;