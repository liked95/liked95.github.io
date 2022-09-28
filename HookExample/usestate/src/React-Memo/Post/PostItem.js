import React, {memo} from 'react'

function PostItem({count}) {
    {console.log("render")}
  return (
    <div>PostItem: {count}</div>
  )
}

export default memo(PostItem)