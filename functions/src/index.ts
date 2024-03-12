import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {defineString} from "firebase-functions/params";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const welcomeMessage = defineString("WELCOME_MESSAGE");
const projectMessage = defineString("PROJECT_SPECIFIC_MESSAGE");

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send(`${welcomeMessage.value()}! I am a function. ${projectMessage.value()}`);
});
