import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps;

class ScrollToTop extends React.Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
  
    render() {
        return this.props.children;
   }
}

export default withRouter(ScrollToTop);