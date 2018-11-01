
//////////////////// CONFIG APP

import Expo from 'expo';

const isStandAloneApp = Expo.Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "http:/dynamictravels.in/Backend/",

      // banner admob unit id
      BANNER_ID: "ca-app-pub-6727934274615658/9819557303",

      // interstitial admob unit id
      INTERSTITIAL_ID: "ca-app-pub-6727934274615658/7864721078",
  
      // testdevice id, DON'T CHANGE IT
      TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
