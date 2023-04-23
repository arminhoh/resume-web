'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

const resumeUrl = "https://gitlab.com/vaskosdune/resume/-/raw/master/resume.json"

let dataCache = {}
let cached = false

module.exports = function fetchResume() {
    if(!cached) {
        dataCache = fetchJsonData();
        //cached = true;
    }
    return dataCache;
};

async function fetchJsonData() {
    const response = await fetch(resumeUrl);
    const jsonData = await response.json();
    return jsonData;
}

