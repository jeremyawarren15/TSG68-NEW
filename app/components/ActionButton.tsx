'use client';
import { Zoom, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { MouseEventHandler } from 'react';
import Link from 'next/link';

interface Props {
  show: boolean | undefined;
}

export default function ActionButton({ show }: Props) {
  return (
    <Zoom in={show}>
      <Fab
        LinkComponent={Link}
        href="/members/create"
        color="primary"
        sx={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        <Add />
      </Fab>
    </Zoom>
  );
}
