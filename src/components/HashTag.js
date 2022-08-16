import React from 'react'

const HashTag = ({color, children}) => {
  return (
    <div style={{backgroundColor: color, minWidth: '10px', fontSize: '15px', padding: '3px 10px 3px 10px', borderRadius: '25px', fontFamily: 'Monteserrat', fontWeight: 'light', color: '#7a7a7a'}}>
      {children}
    </div>
  )
}

export default HashTag
