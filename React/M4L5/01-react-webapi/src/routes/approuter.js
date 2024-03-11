import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Error from '../pages/error';
import {Posts, PostLists, Post} from '../pages/posts';
import {Tables, TableList, RowDetail} from '../pages/tables';
import {Tables as TablesState, TableList as TableListState, RowDetail as RowDetailState} from '../pages/tables-with-states';
import {FriendsSimple, FriendsSimpleList, FriendsSimpleView} from '../pages/friends-simple';
import {FriendsEdit, FriendsEditList, FriendsEditView, FriendsEditEdit} from '../pages/friends-edit';
import {FriendsEditVal, FriendsEditValList, FriendsEditValView, FriendsEditValEdit} from '../pages/friends-edit-val';
import {AlbumsWebApi, AlbumsWebApiList, AlbumsWebApiView, AlbumsWebApiEdit} from '../pages/albums-webapi';
import { FriendsSimplePager, FriendsSimplePagerList, FriendsSimplePagerView } from '../pages/friends-simple-pager';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Nested Routes */}
      <Route path="/tables" element={<Tables />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<TableList />} />
        <Route index path=":id" element={<RowDetail />} />
      </Route>

      {/* Nested Routes */}
      <Route path="/tables-states" element={<TablesState />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<TableListState />} />
        <Route index path=":id" element={<RowDetailState />} />
      </Route>

      {/* Nested Routes */}
      <Route path="/friends-simple" element={<FriendsSimple />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<FriendsSimpleList />} />
        <Route index path=":id" element={<FriendsSimpleView />} />
      </Route>

      {/* Nested Routes */}
      <Route path="/friends-edit" element={<FriendsEdit />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<FriendsEditList />} />
        <Route index path=":id" element={<FriendsEditView />} />
        <Route index path=":id/edit" element={<FriendsEditEdit />} />
      </Route>

      {/* Nested Routes */}
      <Route path="/friends-edit-val" element={<FriendsEditVal />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<FriendsEditValList />} />
        <Route index path=":id" element={<FriendsEditValView />} />
        <Route index path=":id/edit" element={<FriendsEditValEdit />} />
      </Route>
      
      {/* Nested Routes */}
      <Route path="/friends-simple-pager" element={<FriendsSimplePager />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<FriendsSimplePagerList />} />
        <Route index path=":pageNr/page" element={<FriendsSimplePagerList />} />
s        <Route index path=":id/:returnPage" element={<FriendsSimplePagerView />} />
      </Route>

      {/* Nested Routes */}
      <Route path="/albums-webapi" element={<AlbumsWebApi />}>
        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<AlbumsWebApiList />} />
        <Route index path=":id" element={<AlbumsWebApiView />} />
        <Route index path=":id/edit" element={<AlbumsWebApiEdit />} />
      </Route>
      
      {/* Nested Routes */}
      <Route path="/posts" element={<Posts />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<PostLists />} />
        <Route index path=":id" element={<Post />} />
      </Route>

      {/* Passing parameters as part of the route */}
      <Route path="/page1/:param1" element={<Page1/>}/>
      <Route path="/page1/:param1/:param2" element={<Page1/>}/>
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      
      {/* Passing a property when rendering and element */}
      <Route path="*" element={<Error details={{msg: "Page not found"}} />} />
    </Routes>
  )
}

export default AppRouter