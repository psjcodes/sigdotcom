import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellFooter,
  getGradient,
  Box,
  useMantineTheme
} from '@mantine/core';
import Header from './Header';
import Footer from './Footer';

export default function RootAppShell({ children }: { children: any }) {

  return (
    <AppShell
      layout="default"
      header={{ height: "4rem" }}
      
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/*<AppShellHeader
        style={{
          borderBottom: '5px solid transparent', // Set a transparent border
          borderImage: 'linear-gradient(to right, #2b8a3e, #8ce99a) 1',
        }}
      > */}
      <AppShellHeader withBorder={false} p={0} m={0}>
        <Header />
      </AppShellHeader>

      <AppShellMain style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          minHeight: 0,
        }}
        pt="5rem"
        >
          { children }
        </AppShellMain>

    </AppShell>
  )
}