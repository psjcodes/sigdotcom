'use client';

import {Stack, Group, Anchor, Box, getGradient, useMantineTheme } from '@mantine/core';

export default function Header() {

  return (
    <Box bg="green" h="100%">
        <Group justify="space-between" h="100%" px="md">
          <Group gap="xs" p="md">
            <Anchor href="/" underline="never" fw="bold" c="white">
              Sustainable Investment Group at UCSD
            </Anchor>
          </Group>

          {/* <Group gap="lg" p="md">
            <Anchor fz="sm" href="/join" underline="never" c="white">JOIN</Anchor>
            <Anchor fz="sm" href="/events" underline="never">EVENTS</Anchor>
            {/* <Anchor fz="sm" href="/blog" underline="never">BLOG</Anchor>
          </Group> */}
        </Group>
      
    </Box>
  )

}