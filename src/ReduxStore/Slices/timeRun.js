import { createSlice  } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const arrayPath = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  124,
  125,
  126,
  127,
  128,
  129,
  130,
  131,
  132,
  133,
  134,
  135,
  136,
  137,
  138,
  139,
  140,
  141,
  142,
  143,
  144,
  145,
  146,
  147,
  148,
  149,
  150,
  151,
  152,
  153,
  154,
  155,
  156,
  157,
  158,
  159,
  160,
  161,
  162,
  163,
  164,
  165,
  166,
  167,
  168,
  169,
  170,
  171,
  172,
  173,
  174,
  175,
  176,
  177,
  178,
  179,
  180,
  181,
  182,
  183,
  184,
  185,
  186,
  187,
  188,
  189,
  190,
  191,
  192,
  193,
  194,
  195,
  196,
  197,
  198,
  199,
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  209,
  210,
  211,
  212,
  213,
  214,
  215,
  216,
  217,
  218,
  219,
  220,
  221,
  222,
  223,
  224,
  225,
  226,
  227,
  228,
  229,
  230,
  231,
  232,
  233,
  234,
  235,
  236,
  237,
  238,
  239,
  240,
  241,
  242,
  243,
  244,
  245,
  246,
  247,
  248,
  249,
  250,
  251,
  252,
  253,
  254,
  255,
  256,
  257,
  258,
  259,
  260,
  261,
  262,
  263,
  264,
  265,
  266,
  267,
  268,
  269,
  270,
  271,
  272,
  273,
  274,
  275,
  276,
  277,
  278,
  279,
  280,
  281,
  282,
  283,
  284,
  285,
  286,
  287,
  288,
  289,
  290,
  291,
  292,
  293,
  294,
  295,
  296,
  297,
  298,
  299
];
function shuffleArray(inputArray) {
  const shuffledArray = [...inputArray];
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const initialState = {
firstNumb: 0,
thePath: arrayPath.slice(0, 10),
straight: true,
tangled: false,
speed: 1500,
limit: 3,
goLeft: false,
goStop: false,
goPlay: false,
goPause: false,
goForvard: false,

spead1: false,
spead2: false,
spead3: false,
spead4: false,
spead5: true,

};
export const BackgroundPictue = createSlice({
    name: "BackgroundPictue",
    initialState,
    reducers: {
      timeFromStart: (state) =>{
        state.firstNumb = 0;
        state.secondNumb = 0;
      },
      timeGoFirst: (state , action)=>{
        state.firstNumb = action.payload
      },
      startIt: (state)=>{
        state.goPlay = !state.goPlay;
        state.goStop = false;
        state.goPause = false;
        state.goForvard = false;
        state.goLeft = false;
        
      },
      stopIt: (state)=>{
        state.firstNumb = 0;
        state.secondNumb = 0;
        state.goStop = !state.goStop;
        state.goPlay = false;
        state.goPause = false;
        state.goForvard = false;
        state.goLeft = false;
        
      },
      leftIt: (state)=>{
        state.firstNumb = state.firstNumb - 1;
        state.goLeft = true;
        state.goStop = false;
        state.goPlay = false;
        state.goPause = false;
        state.goForvard = false;
      },
      pauseIt: (state)=>{
        state.goPause = !state.goPause;
        state.goLeft = false;
        state.goStop = false;
        state.goPlay = false;
        state.goForvard = false;
      },
      rightIt: (state)=>{
        state.firstNumb = state.firstNumb + 1;
        state.goForvard = true;
        state.goPause = false;
        state.goLeft = false;
        state.goStop = false;
        state.goPlay = false;
      },
      setLimit: (state , action)=>{
        state.limit = action.payload
        state.thePath = arrayPath;
        state.thePath = state.thePath.slice(0,action.payload);
      },
      setSpeed: (state , action) =>{
       state.speed = action.payload;
       if(action.payload === 250){
        state.spead1 = true;
        state.spead2 = false;
        state.spead3 = false;
        state.spead4 = false;
        state.spead5 = false;
       }
       if(action.payload === 500){
        state.spead1 = false;
        state.spead2 = true;
        state.spead3 = false;
        state.spead4 = false;
        state.spead5 = false;
       }
       if(action.payload === 750){
        state.spead1 = false;
        state.spead2 = false;
        state.spead3 = true;
        state.spead4 = false;
        state.spead5 = false;
       }
       if(action.payload === 1000){
        state.spead1 = false;
        state.spead2 = false;
        state.spead3 = false;
        state.spead4 = true;
        state.spead5 = false;
       }
       if(action.payload === 1250){
        state.spead1 = false;
        state.spead2 = false;
        state.spead3 = false;
        state.spead4 = false;
        state.spead5 = true;;
       }
      },
      setStraight: (state)=>{
        state.straight = !state.straight
        state.tangled = !state.tangled
        if(state.tangled){
          state.thePath = shuffleArray(state.thePath)
        }else{
          state.thePath = arrayPath.slice(0,state.limit)
        }
      },
      
      
    },
    },

);
export const {timeGoFirst , startIt , stopIt , leftIt ,
 pauseIt , rightIt , timeFromStart , setLimit , setSpeed ,
 setStraight  } = BackgroundPictue.actions;
export default BackgroundPictue.reducer;