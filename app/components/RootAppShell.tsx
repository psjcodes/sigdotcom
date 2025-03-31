import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellFooter,
  Burger
} from '@mantine/core';
import Header from './Header';

export default function RootAppShell({ children }: { children: any }) {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShellHeader withBorder={false}>
        <Header />
      </AppShellHeader>

      <AppShellMain>{ children }</AppShellMain>

      <AppShellFooter withBorder={false}>Footer</AppShellFooter>
    </AppShell>
  )
}