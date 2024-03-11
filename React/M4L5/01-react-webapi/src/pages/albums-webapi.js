import React, {useState, useEffect} from 'react';
import {PencilSquare, ArrowCounterclockwise} from 'react-bootstrap-icons'
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router-dom';
import musicService from '../services/music-group-service';
import AlbumList from '../components/album-list';
import AlbumDetailsView from '../components/album-details-view';
import AlbumDetailsEdit from '../components/album-details-edit';
  

export function AlbumsWebApi()
{
    const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
    return (
      <div className="container px-4 py-4 text-start">

          <h2 className="pb-2 border-bottom">My favorite albums</h2>
          <Outlet context={service}/>
      </div>
  );
}

export function AlbumsWebApiList() {
  const service = useOutletContext();
  const navigate = useNavigate();

  //#region to read the WebApi async to initialize a React component
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
     async function readWebApi() {
        const data = await service.readAlbumsAsync(0);
        setServiceData(data);
     }
     readWebApi();
  }, [service])
  //#endregion

  const onView = (e) => 
  {
    const id = e.currentTarget.dataset.rowitemid;
    console.log(id);
    navigate(`/albums-webapi/${id}`);
  }

    // You need to handle the render when serviceData is null, i.e. async call has not yet completed
    return (
    <>
      <AlbumList serviceData={serviceData} onClick={onView}/>
    </>
  );
}

export function AlbumsWebApiView() {
  const service = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  //#region to read the WebApi async to initialize a React component
  const [serviceData, setServiceData] = useState();
  useEffect(() => {
      async function readWebApi() {
        const data = await service.readAlbumAsync(id);
        setServiceData(data);
      }
      readWebApi(id);
  }, [service,id])
  //#endregion

  const onEdit = (e) => 
  {
    navigate(`/albums-webapi/${id}/edit`);
  }
  const onUndo = (e) => 
  {
    navigate(`/albums-webapi`);
  }  
  
  // You need to handle the render when serviceData is null, i.e. async call has not yet completed
  return (
    <>
      <h1 hidden={serviceData === undefined}>
        {serviceData?.name} 
        <button className="btn btn-primary-outline" onClick={onEdit}>
          <PencilSquare className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
        <button className="btn btn-primary-outline" onClick={onUndo}>
          <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
      </h1>
      <AlbumDetailsView album={serviceData}/>
    </>
    );
  }

  export function AlbumsWebApiEdit() {

    const service = useOutletContext();
    const navigate = useNavigate();
    const { id } = useParams();
  
    //#region to read the WebApi async to initialize a React component
    const [serviceData, setServiceData] = useState();
    useEffect(() => {
        async function readWebApi() {
          const data = await service.readAlbumAsync(id);
          setServiceData(data);
        }
        readWebApi(id);
    }, [service,id])
    //#endregion

    //event handlers can be async, so it is straight forward to save async
    const onSave = async (e) => 
    {
      const album = serviceData;

      //the webapi needs dto objects to update and create
      const dto = await service.readAlbumDtoAsync(id);
      dto.name = album.name;
      dto.copiesSold = album.copiesSold;
      dto.releaseYear = album.releaseYear;
      
      const updatedalbum = await service.updateAlbumAsync(id, dto);
      navigate(`/albums-webapi/${id}`);
    }  

    const onUndo = (e) => 
    {
      navigate(`/albums-webapi/${id}`);
    }  

    return (
      <>
        <AlbumDetailsEdit album={serviceData} setAlbum={setServiceData} onSave={onSave} onUndo={onUndo}/>
      </>
    );
  }
  
