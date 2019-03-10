import React, { Component } from "react";
import { connect } from "react-redux";
import { loadplaylist } from "./store/actions/actions.js";
import axios from 'axios';
import MainGrid from './components/mainGrid/MainGrid';

class App extends Component {
  componentDidMount = () => {
      axios.get("https://my-json-server.typicode.com/HackSoftware/Songs/songs").then(response => {
        this.props.loadSongs(response.data)
      })
     
    }
    // console.log("CDM", this.props.songs);
  

  showSongs = () => {
    let songList = [];
    if (this.props.songs.length > 0) {
      songList = this.props.songs.map(x => {
        return <div key={x.id}>{`${x.artist} ${x.name} `}</div>;
      });
    }

    return songList;
  };

  render() {
    return (
      // <div>
      //   <div>{this.showSongs()}</div>
      // </div>
      <MainGrid/>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.player.songs
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSongs: songs => dispatch(loadplaylist(songs))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
