import React, { Component } from 'react';
import {
    withRouter
} from "react-router-dom";
const SEARCH_URL = window.api + "/search/";

class Search extends Component {
    constructor(props) {
        super(props);
        this.query = this.props.match.params.query;
        this.state = {
            isFetching: false,
            data: []
        };
    }

    componentDidMount() {
        
        if(this.state.isFetching == false) {
            this.setState({...this.state, isFetching: true});
            
            axios.get(SEARCH_URL)
                .then(response => {
                    this.setState({data: response.data, isFetching: false})
                })
                .catch(e => {
                    console.log(e);
                    this.setState({...this.state, isFetching: false});
                });
        }
    }

    render() {
        return (
            <div>Search Results: {this.query}</div>
        );
    }
}

export default withRouter(Search);