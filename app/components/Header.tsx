'use client';

import {Stack, Group, Anchor, Box, getGradient, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Header() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Stack>
      <Group justify="space-between" h="100%" px="md">
        <Group gap="xs" p="md">
          <Anchor href="/" underline="never" fw="bold">
            Sustainable Investment Group at UCSD
          </Anchor>
        </Group>

        <Group gap="lg" p="md">
          <Anchor fz="sm" href="/join" underline="never">JOIN</Anchor>
          <Anchor fz="sm" href="/events" underline="never">EVENTS</Anchor>
          <Anchor fz="sm" href="/blog" underline="never">BLOG</Anchor>
        </Group>
      </Group>
      
    </Stack>
    
  )

}