import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component{
  state = {
    gifs: []
  }
  componentDidMount() {
    this.dataFetch('hello')
  }
  dataFetch = (query) => {
    console.log(query)
    let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
      this.setState({gifs: json.data.splice(0, 3)})
    })
  }

  render() {
    return(
      <div>
        <GifSearch dataFetch={this.dataFetch}/>
        <GifList gifs={this.state.gifs}/>
        
      </div>
    )
  }
}