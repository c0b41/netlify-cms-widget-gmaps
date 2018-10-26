import React from 'react'

export default ({ value, field }) => (
  <div>
    <b>{field.get('label')}</b>
    {value && (
      <React.Fragment>
        <br />
        <b>Latitude : </b>
        {value.latitude}
        <br />
        <b>Longitude :</b>
        {value.longitude}
      </React.Fragment>
    )}
  </div>
)
