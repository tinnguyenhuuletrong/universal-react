import { registerRootComponent } from "expo";

import App from "./src/native/App.native";
import StorybookUIRootfrom from "./src/native/_sb_native";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately

// For SB
// registerRootComponent(StorybookUIRootfrom);
registerRootComponent(App);
