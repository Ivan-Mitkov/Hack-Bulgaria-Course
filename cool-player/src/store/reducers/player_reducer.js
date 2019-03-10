import _ from "lodash";
import * as actions from "../actions/actions";
//state
const initSongs = [
  { id: "1", author: "Eminem", song: "Sing for the moment" },
  { id: "2", author: "Eminem", song: "Lose Yourself" },
  { id: "3", author: "Metallica", song: "For whom the bell tolls" },
  { id: "4", author: "Rage against the machine", song: "In the name of" }
];

const initState = {
  songs: [],
  rawSongs: initSongs,
  status: "",
  nowPlaying: "",
  index: (Math.random() * initSongs.length) | 0,
  currentIndex: 0,
  command: "",
  shuffled: false,
  shuffledOn: []
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOAD_PLAY_LIST:
      return {
        ...state,
        songs: action.payload,
        status: "Play list loaded",
        command: "Play list loaded"
      };
    case actions.PLAY:
      return {
        ...state,
        status: `playing`,
        nowPlaying: state.songs[action.payload],
        command: "playing"
      };
    case actions.STOP:
      return { ...state, command: "stopped" };
    case actions.PLAYING:
      return { ...state, status: "playing" };
    case actions.SHUFFLE:
      const shuffleSongs = _.shuffle(state.songs);
      return {
        ...state,
        shuffled: true,
        shuffledOn: [...initSongs],
        songs: [...shuffleSongs]
      };
    case actions.SHUFFLE_OFF:
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
    case actions.PLAY_NEXT:
      console.log("curren: ", state.index);
      let nextIndex =
        state.index === state.songs.length - 1 ? 0 : state.index + 1;
      console.log("next:", nextIndex);
      return {
        ...state,
        index: nextIndex,
        currrentIndex: nextIndex,
        nowPlaying: initSongs[nextIndex]
      };
    case actions.PLAY_PREVIOUS:
      console.log("curren: ", state.index);
      let prevIndex =
        state.index === 0 ? state.songs.length - 1 : state.index - 1;
      console.log("prev:", prevIndex);
      return {
        ...state,
        index: prevIndex,
        currrentIndex: prevIndex,
        nowPlaying: initSongs[prevIndex]
      };
    default:
      return state;
  }
};
export default playerReducer;
// console.log(store.getState());
