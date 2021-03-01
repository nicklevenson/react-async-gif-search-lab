import React from 'react'

export default class GifList extends React.Component{

  renderList() {
    return this.props.gifs.map(g => this.listGif(g))
  }
  listGif(g) {
    return(
      <li>
        <img src={g.images.original.url} alt="gif"></img>
      </li>
    )
  }
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}