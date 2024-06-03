const path = require('path');
const express = require('express');

const configStaticFiles = (app) => {
    app.use(express.static(path.join(__dirname, '../public')));
};

module.exports = configStaticFiles;