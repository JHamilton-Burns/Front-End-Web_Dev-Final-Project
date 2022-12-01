import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class FootSteps extends PureComponent {

  openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  render() {
    const { name } = this.props;
    const { number } = this.props;
    const { url } = this.props;
    const cls = `footsteps footsteps-${number}`;
    return (
      <div className={cls} onClick={() => this.openInNewTab(url)}>
        <div className="footstep left" />
        <div className="footstep right" />
        <div className="scroll-name">
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

FootSteps.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};