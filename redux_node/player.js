const redux = require("redux");
const _ = require("lodash");

const LOAD_PLAY_LIST = "LOAD_PLAY_LIST";
const PLAY = "PLAY";
const SHUFFLE = "SHUFFLE";
const SHUFFLE_OFF = "SHUFFLE_OFF";
const STOP = "STOP";
const PLAYING = "PLAYING";
const PLAY_NEXT = "PLAY_NEXT";

//state
const songs = [
  { author: "Eminem", song: "Sing for the moment" },
  { author: "Eminem", song: "Lose Yourself" },
  { author: "Metallica", song: "For whom the bell tolls" },
  { author: "Rage against the machine", song: "In the name of" }
];

const initState = {
  songs: [],
  status: "",
  nowPlaying: "",
  index: (Math.random() * songs.length) | 0,
  currentIndex:0,
  command: "",
  shuffled: false,
  shuffledOn: []
};

const loadplaylist = payload => ({ type: LOAD_PLAY_LIST, payload });
const play = payload => ({ type: PLAY, payload });
const stop = () => ({ type: STOP });
const shuffle = () => ({ type: SHUFFLE });
const shuffleOf = () => ({ type: SHUFFLE_OFF });
const playNext = () => ({ type: PLAY_NEXT });

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PLAY_LIST:
      return {
        ...state,
        songs: action.payload,
        status: "Play list loaded",
        command: "Play list loaded"
      };
    case PLAY:
      return {
        ...state,
        status: `playing`,
        nowPlaying: state.songs[action.payload],
        command: "playing"
      };
    case STOP:
      return { ...state, command: "stopped" };
    case PLAYING:
      return { ...state, status: "playing" };
    case SHUFFLE:
      const shuffleSongs = _.shuffle(state.songs);
      return {
        ...state,
        shuffled: true,
        shuffledOn: [...songs],
        songs: [...shuffleSongs]
      };
    case SHUFFLE_OFF:
      if (!state.shuffled) {
        return state;
      } else {
        return {
          ...state,
          shuffled: false,
          songs: [...state.shuffledOn],
          shuffledOn: []
        };
      }
    case PLAY_NEXT:
    console.log("curren: ",state.index);
    let nextIndex=(state.index===(state.songs.length-1))?0:(state.index+1);
    console.log("next:",nextIndex);
    return{
      ...state,
      index:nextIndex,
      currrentIndex:nextIndex,
      nowPlaying:songs[nextIndex]
    }
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

const getCurrentState = () => {
  const shuffled = store.getState().shuffled;

  let status = `${store.getState().command} - ${store.getState().index}. ${
    store.getState().nowPlaying.author
  }- ${store.getState().nowPlaying.song}`;

  if (shuffled) {
    status = `${store.getState().command} ${store.getState().shuffled &&
      " shuffled"}- ${store.getState().index}. ${
      store.getState().nowPlaying.author
    }- ${store.getState().nowPlaying.song}`;
  }

  return status;
};
// console.log(store.getState());

store.dispatch(loadplaylist(songs));
console.log("loadplaylist: ", store.getState().command);

store.dispatch(play(store.getState().index));
console.log("play: ", store.getState().command);
// console.log(store.getState());
console.log("status: ", getCurrentState());

store.dispatch(stop(store.getState().index));
console.log("stop: ", store.getState().command);
console.log("status: ", getCurrentState());

store.dispatch(shuffle());
// console.log("songs shuffle: ", store.getState().songs);
// console.log("shuffledOn: ", store.getState().shuffledOn);
console.log("status: ", getCurrentState());

store.dispatch(play(store.getState().index));
console.log("play: ", store.getState().command);
console.log("status: ", getCurrentState());

store.dispatch(shuffleOf());
// console.log("songs: ", store.getState().songs);
// console.log("shuffledOn: ", store.getState().shuffledOn);
console.log("status: ", getCurrentState());
console.log("index: ", store.getState().index);


store.dispatch(playNext());
console.log("play: ", store.getState().command);
console.log("status: ", getCurrentState());

store.dispatch(shuffleOf());
console.log("status: ", getCurrentState());
console.log("index: ", store.getState().index);
store.dispatch(playNext());
console.log("play: ", store.getState().command);
console.log("status: ", getCurrentState());
store.dispatch(playNext());
console.log("play: ", store.getState().command);
console.log("status: ", getCurrentState());
store.dispatch(playNext());
console.log("play: ", store.getState().command);
console.log("status: ", getCurrentState());

