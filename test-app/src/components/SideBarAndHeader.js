import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyAppBar from './sidebar_and_header_components/MyAppBar'
import MyDrawer from './sidebar_and_header_components/MyDrawer'

export default function PermanentDrawerLeft() {
  return (
    <div style={{display:"flex"}}>
      <CssBaseline />
      <MyAppBar></MyAppBar>
      <MyDrawer></MyDrawer>
    </div>
  );
}


