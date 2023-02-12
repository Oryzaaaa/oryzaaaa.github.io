import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Rocketship from "./Rocketship/Rocketship.js";
import Rocketship2 from "./Rocketship2/Rocketship2.js";
import Ripley from "./Ripley/Ripley.js";
import Star from "./Star/Star.js";
import Dot from "./Dot/Dot.js";
import Button3 from "./Button3/Button3.js";
import Button2 from "./Button2/Button2.js";
import Ben from "./Ben/Ben.js";
import SoccerBall from "./SoccerBall/SoccerBall.js";
import Button4 from "./Button4/Button4.js";
import Ball from "./Ball/Ball.js";
import Button5 from "./Button5/Button5.js";
import Catcher from "./Catcher/Catcher.js";
import Batter from "./Batter/Batter.js";
import Pitcher from "./Pitcher/Pitcher.js";
import Baseball from "./Baseball/Baseball.js";
import FirstBase from "./FirstBase/FirstBase.js";
import SecondBase from "./SecondBase/SecondBase.js";
import ShortStop from "./ShortStop/ShortStop.js";
import ThirdBase from "./ThirdBase/ThirdBase.js";
import Button6 from "./Button6/Button6.js";
import Batter2 from "./Batter2/Batter2.js";
import Catcher2 from "./Catcher2/Catcher2.js";
import Baseball2 from "./Baseball2/Baseball2.js";
import Button8 from "./Button8/Button8.js";
import BlockH from "./BlockH/BlockH.js";
import BlockO from "./BlockO/BlockO.js";
import BlockM2 from "./BlockM2/BlockM2.js";
import BlockE from "./BlockE/BlockE.js";
import BlockR from "./BlockR/BlockR.js";
import BlockU from "./BlockU/BlockU.js";
import BlockN from "./BlockN/BlockN.js";
import Button7 from "./Button7/Button7.js";

const stage = new Stage({ costumeNumber: 5 });

const sprites = {
  Rocketship: new Rocketship({
    x: -113,
    y: 60,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Rocketship2: new Rocketship2({
    x: -113,
    y: 60,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Ripley: new Ripley({
    x: 300,
    y: 17,
    direction: 35,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Star: new Star({
    x: -113,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Dot: new Dot({
    x: -266,
    y: -203,
    direction: 115,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Button3: new Button3({
    x: 14,
    y: 126,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Button2: new Button2({
    x: 14,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Ben: new Ben({
    x: -166,
    y: 23,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  SoccerBall: new SoccerBall({
    x: 248,
    y: 65,
    direction: 120,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Button4: new Button4({
    x: -164,
    y: -86,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Ball: new Ball({
    x: -17,
    y: -17,
    direction: 88.84829775618618,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Button5: new Button5({
    x: -164,
    y: -86,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Catcher: new Catcher({
    x: 198,
    y: -16,
    direction: 90,
    costumeNumber: 4,
    size: 35,
    visible: true,
    layerOrder: 17
  }),
  Batter: new Batter({
    x: 167,
    y: -12,
    direction: 90,
    costumeNumber: 4,
    size: 35,
    visible: true,
    layerOrder: 32
  }),
  Pitcher: new Pitcher({
    x: 7,
    y: -8,
    direction: 90,
    costumeNumber: 4,
    size: 35,
    visible: true,
    layerOrder: 12
  }),
  Baseball: new Baseball({
    x: -236,
    y: 164,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 33
  }),
  FirstBase: new FirstBase({
    x: -45,
    y: 51,
    direction: 90,
    costumeNumber: 3,
    size: 35,
    visible: true,
    layerOrder: 13
  }),
  SecondBase: new SecondBase({
    x: -153,
    y: 23,
    direction: 90,
    costumeNumber: 3,
    size: 35,
    visible: true,
    layerOrder: 14
  }),
  ShortStop: new ShortStop({
    x: -116,
    y: -108,
    direction: 90,
    costumeNumber: 3,
    size: 35,
    visible: true,
    layerOrder: 15
  }),
  ThirdBase: new ThirdBase({
    x: 24,
    y: -96,
    direction: 90,
    costumeNumber: 3,
    size: 35,
    visible: true,
    layerOrder: 16
  }),
  Button6: new Button6({
    x: -123,
    y: -85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Batter2: new Batter2({
    x: 68,
    y: 66,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Catcher2: new Catcher2({
    x: -2,
    y: 62,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Baseball2: new Baseball2({
    x: -101,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 21
  }),
  Button8: new Button8({
    x: -123,
    y: -85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  BlockH: new BlockH({
    x: -213,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 24
  }),
  BlockO: new BlockO({
    x: -154,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 25
  }),
  BlockM2: new BlockM2({
    x: -86,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 31
  }),
  BlockE: new BlockE({
    x: -19,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  }),
  BlockR: new BlockR({
    x: 54,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 26
  }),
  BlockU: new BlockU({
    x: 111,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  BlockN: new BlockN({
    x: 172,
    y: -132,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 28
  }),
  Button7: new Button7({
    x: 217,
    y: -162,
    direction: 90,
    costumeNumber: 1,
    size: 500,
    visible: false,
    layerOrder: 30
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;