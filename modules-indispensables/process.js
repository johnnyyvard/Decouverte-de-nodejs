
// Environnement

// process.stdin.on(name, callback);

// Std
// process.stdout.write('Bonjour \n', () => console.log('Message affiché'));
// process.stderr.write('Erreur \n', () => console.log('Message affiché'));

// Events

function beforeExitCallback(code) {
    console.log('About to exit with code ' + code);
    setTimeout(() => console.log('Last async action.'), 1000);
}

process.on("beforeExit", beforeExitCallback);

console.log('starting');