import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
// import * as actions from '../../store/actions/actions'

import ListItem from "./../ListItem/ListItem";

class List extends React.Component {
  render() {
    let songList = [];
    if (this.props.songs) {
      songList = this.props.songs.map(x => {
        return <ListItem key={x.id} id={x.id} name={x.name} artist={x.artist} onClick={this.props.playNext} />;
      });
    }
    return (
      <div id={styles.list}>
        <div id={styles.appName}>
          <ul className={styles.order}>{songList}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.player.songs
  };
};


export default connect(mapStateToProps)(List);
