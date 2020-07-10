const testsContext = require.context(".", true, /test\.js[x]?$/);
testsContext.keys().forEach(testsContext);