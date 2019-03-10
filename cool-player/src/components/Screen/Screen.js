import React from "react";
import styles from "./styles.module.css";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

class Screen extends React.Component {
  render() {
    return (
      <div id={styles.screen}>
        <div className={styles.nestedGrid}>
          <button className={styles.btnPrimary1}>
            <span className={styles.btnText} onClick={this.props.onPlayPrev}>Previous Song</span>
          </button>

          <div className={styles.ecran}>
          <div> </div>
          
          </div>

          <button className={styles.btnPrimary2} onClick={this.props.onPlayNext}>
            <span className={styles.btnText}>Next Song</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPlayNext: () => {
      dispatch(actions.playNext());
    },
    onPlayPrev: () => {
      dispatch(actions.playPrevious());
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default connect(null,mapDispatchToProps)(Screen);
