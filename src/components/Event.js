import React from 'react';
import { connect } from  'react-redux'
import { selectEvent } from '../actions'

const Event = (props) => {
  // console.log("Restaurant props: ", props)
  const { image_url, title, type, datetime, venue, address, extended_address } = props.event

  return (
    <li onClick={() => props.selectEvent(props.event)}>
      <ul>
        <li>{image_url}</li>
        <li>{title}</li>
        <li>{type}</li>
        <li>{address}</li>
        <li>{extended_address}</li>
        <li>{datetime}</li>
      </ul>
    </li>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {selectEvent} )(Event)
