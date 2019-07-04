import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    
    handleButtonClick(e) {
        e.preventDefault;
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    }

    handleLogout(e) {
        e.preventDefault;
        this.props.logout();
    }

    render() {

        // const submenu = <ul className="nav__submenu">
        //     <li className="nav__submenu-item ">
        //         <a>Our Company</a>
        //     </li>
        //     <li className="nav__submenu-item ">
        //         <a>Our Team</a>
        //     </li>
        //     <li className="nav__submenu-item ">
        //         <button onClick={this.handleLogout}>Logout</button>
        //     </li>
        // </ul>
        return (
            <div>Dash</div>
            // <nav className="nav">
            //     <ul className="nav__menu">
            //         <li
            //             className="nav__menu-item"
            //         >
            //             <a>About</a>
            //             {submenu}
            //         </li>
            //     </ul>
            // </nav>
        )
    }

}


export default Dashboard;