'use client';
import { useState, ReactNode } from 'react';
import { Tabs, Tab } from '@mui/material';
import CustomTabPanel from '../components/CustomTabPanel';

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Fathers" {...a11yProps(0)} />
        <Tab label="Sons" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={selectedTab} index={0}>
        {fathers}
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={1}>
        {sons}
      </CustomTabPanel>
    </>
  );
}
