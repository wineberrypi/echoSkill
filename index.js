'use strict';

const Alexa = require('alexa-sdk');
const fetch = require('node-fetch');
const apiUrl = 'http://54.194.56.149:4000/light/lamp/toggle';

const APP_ID = 'amzn1.ask.skill.e9007884-6b33-4553-9a1f-80c0cf7265d9';
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
    'LightIntent': () =>{
        const speechOutput = 'Light toggled';
        fetch(apiUrl)
            .then((res) => {
                this
                    .response
                    .speak(speechOutput);
                this.emit(':responseReady');
            })
            .catch((err) => {
                this
                    .response
                    .speak("Some error occured");
                this.emit(':responseReady');
            });
        
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
    
}


exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};