import React from 'react';
import ReactDOM from 'react-dom';
import Artist from './Artist';
import {RouteComponentProps} from "react-router";
import {Provider} from "react-redux";

// https://ru.reactjs.org/docs/test-renderer.html
// https://jestjs.io/docs/ru/snapshot-testing#%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC-%D1%81%D0%BD%D0%B8%D0%BC%D0%BA%D0%BE%D0%B2-%D0%B2-jest
import configureReduxMockStore from 'redux-mock-store' ;

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe(``, () => {
  let component: any = null;

  beforeEach(() => {
    let mock: any = jest.fn();

    const props: RouteComponentProps = {
      match: {
        params: {
          artist: 'artist'
        },
        isExact: true,
        url: '',
        path: ''
      },
      history: mock,
      location: mock
    };


    const div = document.createElement('div');

    // confgig store
    const mockStore = configureReduxMockStore([]);

    const getState = {
      events: []
    }; // initial state of the store

    const store = mockStore(getState);
    // confgig store

    // component = TestRenderer.create(
    //   <Provider store={store}>
    //     <Artist {...props}/>
    //   </Provider>);

    component = Enzyme.mount(
      <Provider store={store}>
        <Artist {...props}/>
      </Provider>);

    // ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () =>
    console.log('component.toJSON() ', component.find('div')));
  expect(true).toBe(true);
});
