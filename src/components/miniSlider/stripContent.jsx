import React from 'react'
import Strip from './strip'

const StripContent = (props) => {
  return (
    <>
      <div
        className="transition"
        style={{
          transform: `translateX(-${props.translate}px)`,
          transition: `tranform ease-out ${props.transition}s`,
          width: `${props.width}px`,
          display: 'flex',
        }}
      >
        <Strip
          title={props.title}
          data={props.data}
          height={props.height}
          slide={props.slide}
          top10={props.top10}
        />
      </div>
    </>
  )
}

export default StripContent
