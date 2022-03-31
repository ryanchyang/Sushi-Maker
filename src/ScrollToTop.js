import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// 用於換頁時，畫面位置會回到頁面最上方
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
