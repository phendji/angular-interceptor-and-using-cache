'use strict';

const fs = require('fs');

module.exports.readContentJsonFile = (res, jsonFile) => {
    if(fs.existsSync(jsonFile)) {
        fs.readFile(jsonFile, (err, data) => {
            if (err) throw err;

            res.send(data.toString());
        })
    } else {
        res.status(404).send("Not found");
    }
}

function verifyUserAccount(datas, entryBody) {
    const jsonContent = JSON.parse(datas);
    if (jsonContent.length === 0) {
        return false;
    }

    for (let i = 0; i < jsonContent.length; i++) {
        if (jsonContent[i].email === entryBody.email && jsonContent[i].password === entryBody.password) {
            return true;
        }
    }

    return false;
}

function getSessionResponse() {
    return {
        jsessionId: '5D1D8F2EA5F4E3B6B7058B65817EE539',
        validity: 1800
    }
}

module.exports.checkIfUserExist = (res, body, jsonFile) => {
    if (fs.existsSync(jsonFile)) {
        fs.readFile(jsonFile, (err, datas) => {
            if (err) throw err;

            const isAccountUserExist = verifyUserAccount(datas, body);
            if (isAccountUserExist) {
                const authSessionResp = getSessionResponse();
                res.status(200).send(authSessionResp);
            } else {
                res.status(401).send();
            }
        })
    } else {
        res.status(404).send("Not found");
    }
}
