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
      header={{ height: 60 }}
      padding="md"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <AppShellHeader
        style={{
          borderBottom: '5px solid transparent', // Set a transparent border
          borderImage: 'linear-gradient(to right, #2b8a3e, #8ce99a) 1',
        }}
      >
        <Header />
      </AppShellHeader>

      <AppShellMain px={0}>{ children }</AppShellMain>

    </AppShell>
  )
}