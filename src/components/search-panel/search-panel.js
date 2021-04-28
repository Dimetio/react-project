import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tern: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }
  onUpdateSearch(e) {
    const tern = e.target.value;
    this.setState({tern});
    this.props.onUpdateSearch(tern);
  }

  render() {
    return (
      <input
        className="form-control serach-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    )
  }
}