import { styled } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import CloudHeader from "./CloudHeader";
import CloudContent from "./CloudContent";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function CloudApp() {
  return (

    <div className="">
      <br />

      <CloudContent />
    </div>


  );
}

export default CloudApp;
