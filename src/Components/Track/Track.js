import React from "react";
import './Track.css';

class Track extends React.Component {
    constructor(props) {
      super(props);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
      const { isRemoval } = this.props;
      if (!isRemoval) 
        return (<button className="Track-action" onClick={this.addTrack}>+</button>);
      else
        return (<button className="Track-action" onClick={this.removeTrack}>-</button>);
    }

    addTrack() {
      this.props.onAdd(this.props.track);
    }

    removeTrack() {
      this.props.onRemove(this.props.track);
    }

    render() {
      const { track } = this.props;

      return (
        <div className="Track">
          <div className="Track-information">
            <h3>{ track.name }</h3>
            <p>{ track.artist } | { track.album }</p>
          </div>
          { this.renderAction() }
        </div>
      )
    }
}

export default Track;