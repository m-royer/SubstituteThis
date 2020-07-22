import * as React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faInfoCircle, faListAlt } from '@fortawesome/free-solid-svg-icons'

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const q = this.state.query;
        this.setState({query: ''});
        this.props.history.push('/search/' + q)
    }

    render() {
        return (
            <nav role="navigation">
                <div className="hamburger"><i className="fas fa-bars"></i></div>
                <ul id="nav">
                    <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to="/categories"><FontAwesomeIcon icon={faListAlt} /> Categories</Link></li>
                    <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
                    <li className="search">
                        <form method="GET" action="/search" onSubmit={this.handleSubmit.bind(this)} role="search" spellCheck="false" aria-label="All substitutes">
                            <input type="text" name="query" value={this.state.query} onChange={this.handleChange} placeholder="Find stuff" />
                            <button type="submit"><FontAwesomeIcon icon={faSearch} /> Search</button>
                        </form>
                    </li>
                </ul>
                <figure>
                    <svg id="navFlair" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path id="flairPath1" d="M0 0 L50 100 L100 0 Z" />
                        <path id="flairPath2" d="M50 100 L100 40 L100 0 Z" />
                    </svg>
                </figure>
            </nav>
        );
    }
}

export default withRouter(Nav);