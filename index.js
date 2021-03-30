
'use strict';
import {Platform} from 'react-native';

let uxModule = null;

if (Platform.OS === 'android') {
  uxModule = require('./UXCam');
}
module.exports = uxModule;