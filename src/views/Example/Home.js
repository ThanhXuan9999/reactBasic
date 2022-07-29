import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/image/logoHome.jpg'
class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/Todo')
        }, 3000)
    }

    render() {
        return (
            <>
                <div>
                    Hello World from ./HomePage
                    <br />
                    <br />
                    (Sẽ chuyển qua trang Todo sau 3s)
                </div>
                <div>
                    <img src={logo} />
                </div>
            </>
        )
    }
}

export default withRouter(Home)