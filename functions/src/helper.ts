import {defineString} from "firebase-functions/params";


const clientId = defineString("EXAMPLE_CLIENT_ID");

export const getClientId = () => {
  return clientId.value();
};
