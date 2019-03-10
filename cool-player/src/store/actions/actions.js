export const LOAD_PLAY_LIST = "LOAD_PLAY_LIST";
export const PLAY = "PLAY";
export const SHUFFLE = "SHUFFLE";
export const SHUFFLE_OFF = "SHUFFLE_OFF";
export const STOP = "STOP";
export const PLAYING = "PLAYING";
export const PLAY_NEXT = "PLAY_NEXT";
export const PLAY_PREVIOUS = "PLAY_PREVIOUS";

export const loadplaylist = payload => ({ type: LOAD_PLAY_LIST, payload });
export const play = payload => ({ type: PLAY, payload });
export const stop = () => ({ type: STOP });
export const shuffle = () => ({ type: SHUFFLE });
export const shuffleOf = () => ({ type: SHUFFLE_OFF });
export const playNext = () => ({ type: PLAY_NEXT });
export const playPrevious = () => ({ type: PLAY_PREVIOUS });