import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Mentions from '../components/Mentions';
import Footer from '../components/Footer';

import { setSearchField, requestRobots } from '../actions';

import './App.css';

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
    constructor() {
        super();

        this.state = {
            displayMentions: false
        };
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }

    onDisplayMentions = () => {
        this.setState({ displayMentions: true });
    };

    onHideMentions = () => {
        this.setState({ displayMentions: false });
    };

    render() {
        const { robots, isPending, searchField, onSearchChange } = this.props;
        const { displayMentions } = this.state;

        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return isPending ? (
            <h1 className="f1 mt5">Loading...</h1>
        ) : (
            <Fragment>
                <Header>
                    <h1 className="f1 mt5">RoboFriends</h1>
                    {!displayMentions ? (
                        <SearchBox
                            placeholder="Search robots..."
                            searchChange={onSearchChange}
                        />
                    ) : null}
                </Header>
                {!displayMentions ? (
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                ) : (
                    <Mentions hideMentions={this.onHideMentions} />
                )}
                <Footer displayMentions={this.onDisplayMentions} />
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
