#!/usr/bin/env node

const CLIProcessor = require("../dist/CLIProcessor");
new CLIProcessor.default().execute(process.argv);