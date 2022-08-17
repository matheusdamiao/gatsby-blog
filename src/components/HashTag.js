import React from 'react'

const HashTag = ({color, children}) => {
  return (
    <div style={{backgroundColor: color, minWidth: '10px', fontSize: '15px', padding: '3px 8px 3px 8px', borderRadius: '25px', fontFamily: 'Monteserrat', fontWeight: 'light', color: '#7a7a7a', margin: '0px 5px 5px 5px'}}>
      {children}
    </div>
  )
}

export default HashTag
