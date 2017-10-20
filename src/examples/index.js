import React from 'react';
import { ReactTypeformEmbed } from '../components';

import ExampleWidget from './ExampleWidget';
import ExamplePopup from './ExamplePopup';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="Examples">
        <div className="container">
          <h1>React Typeform Embed</h1>
          <p>A React wrapper for the <a href="https://developer.typeform.com/embed/" target="_blank">Typeform Embed SDK</a></p>
          <br/>
          <br/>
          <h2>Widget Mode Example</h2>
          <br/>
          <div className="Examples__widget-section">
            <ExampleWidget/>
          </div>
          <br/>
          <hr/>
          <br/>
          <h2>Popup Mode Example</h2>
          <br/>
          <div className="Examples__popup-section">
            <ExamplePopup/>
          </div>
        </div>
      </div>
    );
  }
}

export default Examples;