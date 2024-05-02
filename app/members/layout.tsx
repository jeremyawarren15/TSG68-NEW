'use client';
import { useState, ReactNode } from 'react';
import { Tabs, Tab } from '@mui/material';
import CustomTabPanel from '../components/CustomTabPanel';
import ActionButton from '../components/ActionButton';
import { useRouter } from 'next/navigation';

interface Props {
  fathers: ReactNode;
  sons: ReactNode;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MembersLayout({ fathers, sons }: Props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();

  return (
    <>
      <Tabs
        sx={{ mt: 2 }}
        value={selectedTab}
        onChange={(e, value) => setSelectedTab(value)}
      >
        <Tab label="Fathers" {...a11yProps(0)} />
        <Tab label="Sons" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={selectedTab} index={0}>
        {fathers}
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={1}>
        {sons}
      </CustomTabPanel>
      <ActionButton
        show={true}
        handleClick={() => router.push('/users/create')}
      />
    </>
  );
}
