import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './index.sass';
import defines from '../../../common/defines';

const Env = styled.span`
      position: absolute;
      top: 4px;
      right: 4px;
      color: darkgrey;
      font-size: 12px;
    `;
class Example extends Component {
  inputRef = null;

  render() {
    return (
      <div className="App">
        <Env>
          {defines.IS_PRODUCTION
            ? 'PRODUCTION'
            : 'DEVELOPMENT'}
        </Env>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p className="App-server-hint">
            npm ci && npm start
          </p>
          <a
            className="App-link"
            href="https://github.com/yuri2peter/redoc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Redoc
          </a>
        </header>
      </div>
    );
  }
}

export default Example;
