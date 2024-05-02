'use client';
import { Zoom, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useState, MouseEventHandler } from 'react';

interface Props {
  show: boolean | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ActionButton({ show, handleClick }: Props) {
  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        onClick={handleClick}
        sx={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        <Add />
      </Fab>
    </Zoom>
  );
}
