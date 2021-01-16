const fs = require('fs');

const bigFileWatcher = fs.watch('../async-io/bigfile');
bigFileWatcher.on("change", (changeType) => console.log(changeType));