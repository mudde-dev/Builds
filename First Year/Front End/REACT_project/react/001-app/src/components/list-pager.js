import React from 'react'
import classNames from 'classnames'

function ListPager(props) {

  //effective way to create an array with [0,1,2,3,4...]
  let nrP = (props.nrVisiblePages !== undefined) ? Number(props.nrVisiblePages) : 0
  const pages = [...Array(nrP).keys()]

  const onPageChange = (e) => {
    e.currentPage = e.target.dataset.pagenr
    props.onPageChange(e)
  }

  const onPageNext = () => {
    let curPage = Number(props.currentPage)
    if (curPage < (props.maxNrPages - 1)) {
      const e = { currentPage: curPage + 1 }
      props.onPageChange(e)
    }
  }

  const onPagePrev = () => {
    let curPage = Number(props.currentPage)
    if (curPage > 0) {
      const e = { currentPage: curPage - 1 }
      props.onPageChange(e)
    }
  }
  return (
    <nav aria-label="List pagination" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" aria-label="Previous" onClick={onPagePrev}>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {
          pages.map((i) =>
            <li key={i} className="page-item">
              <button className={classNames(
                'page-link',
                {
                  'active': i === Number(props.currentPage)
                }
              )} data-pagenr={i} onClick={onPageChange}>{i + 1}</button>
            </li>
          )}
        <li className="page-item">
          <button className="page-link" aria-label="Next" onClick={onPageNext}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default ListPager