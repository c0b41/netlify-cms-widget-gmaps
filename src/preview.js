import React from 'react'

export default ({ value, field }) => (
  <div>
    <b>{field.get('label')} :</b>
    {value}
  </div>
)
