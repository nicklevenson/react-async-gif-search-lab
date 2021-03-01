import React from 'react'

export default class GifSearch extends React.Component{
  state = {
    searchValue: ""
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
    
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dataFetch(this.state.searchValue)
  }
 
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >
          <input type="text" onChange={e => this.handleChange(e)}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}