import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, isPending, searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ? (
            <h1 className="f1 mt5">Loading...</h1>
        ) : (
            <Fragment>
                <Header>
                    <h1 className="f1 mt5">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                </Header>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
                <Footer />
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
