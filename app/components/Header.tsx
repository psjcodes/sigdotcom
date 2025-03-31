'use client';

import {Burger, Group, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Group justify="space-between" h="100%" px="md">
      <Group gap="xs">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Anchor href="/" underline="never" fw="bold">
          Sustainable Investment Group at UCSD
        </Anchor>
      </Group>

      <Group gap="lg" visibleFrom="sm">
        <Anchor fz="sm" href="/join" underline="never">JOIN</Anchor>
        <Anchor fz="sm" href="/events" underline="never">EVENTS</Anchor>
        <Anchor fz="sm" href="/blog" underline="never">BLOG</Anchor>
      </Group>
    </Group>
  )

}