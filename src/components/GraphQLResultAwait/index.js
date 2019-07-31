import React from 'react'

const GraphQLResultAwait = ({ loading, error }) => {
  if (loading) {
    return (
      <div className="flex w-100 h-100 items-center justify-center pt7">
        <div>Loading ...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex w-100 h-100 items-center justify-center pt7">
        <div>An unexpected error occured.</div>
      </div>
    )
  }
  return <div></div>;
}

export default GraphQLResultAwait;