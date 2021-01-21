const helper = require('./async');

test('async test example', (done) => {
    function callback(data) {
        expect(typeof data).toBe('string');
        done();
    }
    helper.asyncData(callback);
})