'use strict';

const serverHost = 'http://54.194.56.149:4000';

module.exports = {
  appId: 'amzn1.ask.skill.c13732ea-714a-471e-89cf-aade219d5fb7',
  apiUrl: {
    lightToggle: `${serverHost}/light/lamp/toggle`,
    ledOff: `${serverHost}/led/off`,
    ledOn: `${serverHost}/led/on`,
    ledFade: `${serverHost}/led/fade`,
    ledColor: `${serverHost}/led/color/:color`,
  }
};
