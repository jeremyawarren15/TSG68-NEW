import { Zoom, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import Link from 'next/link';

interface Props {
  show: boolean | undefined;
  link: string;
}

export default function ActionButton({ show, link }: Props) {
  return (
    <Zoom in={show}>
      <Fab
        LinkComponent={Link}
        href={link}
        color="primary"
        sx={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        <Add />
      </Fab>
    </Zoom>
  );
}
