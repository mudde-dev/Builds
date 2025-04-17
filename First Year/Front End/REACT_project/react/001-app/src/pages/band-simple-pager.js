import React, {Component, useState, useEffect, setState} from 'react'
import musicService from '../services/music-group-service';
import ListPager from '../components/list-pager';
import BandList from '../components/band-list';


export  function BandView() {

  const [currentPage, setCurrentPage] = useState(0)
  const [pageData, setPageData] = useState([])

  useEffect(() => {
    (async () => {
      console.log('componentDidMount')

      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`)
      const bands = await service.readMusicGroupsAsync(currentPage)

      setPageData(bands)
    })()
  }, [currentPage])

  //paging dimensions
  const pageSize = 10
  const maxNrPages = Math.ceil(pageData?.dbItemsCount / pageSize)
  const nrVisiblePages = 10

  //Load page data
  const onPageChange = (e) => {
    const pData = pageData?.pageItems?.slice(pageSize * e.currentPage, pageSize * e.currentPage + pageSize)
    setPageData([...pData])
    setCurrentPage(e.currentPage)

  }
  //#endregion

  const listPagerProps = {
    nrVisiblePages, currentPage, maxNrPages, onPageChange
  }

  return (
    <>
      <BandList pageData={pageData} />
      <ListPager {...listPagerProps} />
    </>
  )
}
