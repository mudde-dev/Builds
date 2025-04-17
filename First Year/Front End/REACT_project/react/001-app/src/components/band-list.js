import React from 'react'

/** @namespace pageData.pageItems */
function BandList({ pageData }) {
  return (
    <>
      <div className="row mb-2 justify-content-center text-center">
        <div className="col-md-4 themed-grid-col themed-grid-head-col"><u>Music Groups</u></div>
      </div>

      {
        pageData ?
          pageData?.pageItems?.map((a, i) => (
            <div key={i} className="row mb-2 justify-content-center text-center">
              <div className="col-md-4 themed-grid-col">
                {a.name}
              </div>
            </div>
          )) : null
      }

    </>
  )
}

export default BandList