import { Tabs, Tab } from '@mui/material';
import CustomTabPanel from '../components/CustomTabPanel';
import ActionButton from '../components/ActionButton';
import FathersPage from './fathers';
import SonsPage from './sons';
import Link from 'next/link';

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default async function MembersPage({ searchParams }: Props) {
  const tab = searchParams.tab || '0';
  const selectedTab = parseInt(tab as string);

  return (
    <>
      <h1>Members Page</h1>
      <Tabs
        sx={{ mt: 2 }}
        value={selectedTab}
        // onChange={(e, value) => setSelectedTab(value)}
      >
        <Tab
          LinkComponent={Link}
          href={`?tab=0`}
          label="Fathers"
          {...a11yProps(0)}
        />
        <Tab
          LinkComponent={Link}
          href={`?tab=1`}
          label="Sons"
          {...a11yProps(1)}
        />
      </Tabs>
      <CustomTabPanel value={selectedTab} index={0}>
        <FathersPage />
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={1}>
        <SonsPage />
      </CustomTabPanel>
      <ActionButton
        show={true}
        // handleClick={() => router.push('/users/create')}
      />
    </>
  );
}
