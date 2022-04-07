import React from "react";

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js

import { Animate } from "react-move";



class ProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
          ],
          timing: {
            duration: this.props.duration * 2000,

          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}
export default ProgressProvider;
