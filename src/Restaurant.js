import React, { Component, PropTypes } from 'react'
import map from 'lodash/map'
import './Restaurant.css'

class Restaurant extends Component {
  render() {
    const { name, user, votes, handleDeselect, handleSelect } = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)

    return (
      <article className='Restaurant'>
        <h3> { name } </h3>
        <p className='Restaurant--count'>
          Votes: {(votes && Object.keys(votes).length || 0)}
        </p>
        <ul>
          { votes && map(votes, (vote, key) => <li key={key}>{ vote }</li>) }
        </ul>
        {
          userHasSelected 
          ? <button className='destructive' onClick={handleDeselect}> Vote: NAH </button>
          : <button onClick={handleSelect}> Vote: YES </button>
        }
      </article>
    )
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
}

export default Restaurant
