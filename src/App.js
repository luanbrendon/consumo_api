import React, { Component } from 'react';
import api from './api';

class App extends Component {
  state = {
    filmes: [],
    query: '',
    resultados: [],
  }

  handleSubmit = async event => {
    event.preventDefault();
    const response = await api.get(this.state.query);
    this.setState({ resultados: response.data });
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Filmes</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleInputChange} />
          <button type="submit">Buscar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resultados.map(filme => (
              <tr key={filme.show.id}>
                <td>{filme.show.name}</td>
                <td><a href={filme.show.url} target="_blank">{filme.show.url}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;