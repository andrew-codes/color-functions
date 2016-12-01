process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

module.exports = function(wallaby) {
    return {
        files: [
            {pattern: 'src/**'},
            {pattern: '!src/**/*.spec.js'}
        ],
        tests: [
            {pattern: 'src/**/*.spec.js'}
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'mocha',
        bootstrap: function(wallaby) {
            wallaby.testFramework.ui('tdd');
        },
        debug: true
    };
};
