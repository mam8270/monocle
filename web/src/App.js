import React from 'react';
import { connect } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { query } from './reducers/query'

import { Switch, Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TopMenu from './components/menu'
import {
  AllEventsHisto,
  CloseEventsHisto,
  CommentEventsHisto,
  CreateEventsHisto } from './components/status'


class RootView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <Container>
          <Row><Col><p></p></Col></Row>
          <Row>
            <Col>
              <AllEventsHisto
                query={this.props.handleQuery}
                all_events_loading={this.props.all_events_loading}
                all_events_result={this.props.all_events_result}
                all_events_error={this.props.all_events_error}
              />
            </Col>
          </Row>
          <Row><Col><p></p></Col></Row>
          <Row>
            <Col>
              <CreateEventsHisto
                query={this.props.handleQuery}
                create_events_loading={this.props.create_events_loading}
                create_events_result={this.props.create_events_result}
                create_events_error={this.props.create_events_error}
              />
            </Col>
          </Row>
          <Row><Col><p></p></Col></Row>
          <Row>
            <Col>
              <CloseEventsHisto
                query={this.props.handleQuery}
                close_events_loading={this.props.close_events_loading}
                close_events_result={this.props.close_events_result}
                close_events_error={this.props.close_events_error}
              />
            </Col>
          </Row>
          <Row><Col><p></p></Col></Row>
          <Row>
            <Col>
              <CommentEventsHisto
                query={this.props.handleQuery}
                comment_events_loading={this.props.comment_events_loading}
                comment_events_result={this.props.comment_events_result}
                comment_events_error={this.props.comment_events_error}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>)
  }
}

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <RootView
            handleQuery={this.props.handleQuery}
            all_events_loading={this.props.all_events_loading}
            all_events_result={this.props.all_events_result}
            all_events_error={this.props.all_events_error}
            close_events_loading={this.props.close_events_loading}
            close_events_result={this.props.close_events_result}
            close_events_error={this.props.close_events_error}
            comment_events_loading={this.props.comment_events_loading}
            comment_events_result={this.props.comment_events_result}
            comment_events_error={this.props.comment_events_error}
            create_events_loading={this.props.create_events_loading}
            create_events_result={this.props.create_events_result}
            create_events_error={this.props.create_events_error}
          />
        </Route>
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    all_events_loading: state.QueryReducer.all_events_loading,
    all_events_result: state.QueryReducer.all_events_result,
    all_events_error: state.QueryReducer.all_events_error,
    close_events_loading: state.QueryReducer.close_events_loading,
    close_events_result: state.QueryReducer.close_events_result,
    close_events_error: state.QueryReducer.close_events_error,
    comment_events_loading: state.QueryReducer.comment_events_loading,
    comment_events_result: state.QueryReducer.comment_events_result,
    comment_events_error: state.QueryReducer.comment_events_error,
    create_events_loading: state.QueryReducer.create_events_loading,
    create_events_result: state.QueryReducer.create_events_result,
    create_events_error: state.QueryReducer.create_events_error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleQuery: (params) => dispatch(query(params))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);