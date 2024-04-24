'use client';

import { ReactNode, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
} from '@mui/material';
import { Dashboard, Help, Inbox, Mail } from '@mui/icons-material';

interface DrawerListItem {
  name: string;
  icon: ReactNode;
}

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const list: DrawerListItem[] = [
    { name: 'Dashboard', icon: <Dashboard /> },
    { name: 'FAQ', icon: <Help /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        {list.map(({ name, icon }, index) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Troop 68
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open}>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          {DrawerList}
        </ClickAwayListener>
      </Drawer>
    </>
  );
}
