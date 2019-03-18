import React, { Component } from 'react';
import './App.scss';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

let marked = require("marked");

class App extends Component {
  state = {
    markdown: ""
  }

  updateMarkdown = function(markdown) {
    this.setState({
      markdown
    })
  }
  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App container">
        <div>
          <Form.Group controlId="formControlsTextarea">
            <Form.Label>
              Markdown Input
            </Form.Label>
            <FormControl componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
          </Form.Group>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{__html: marked(markdown)}}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
