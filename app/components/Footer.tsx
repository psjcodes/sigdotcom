'use client';

import { ActionIcon, Group, Text,} from '@mantine/core';
import { IconBrandInstagram, IconMail, IconBrandGithub } from '@tabler/icons-react';

export default function Footer() {

  return (
    <Group
      style={{
        justifyContent: 'center', // Center content
        alignItems: 'center',     // Vertically center content
        flexDirection: 'column',  // Stack the buttons vertically
        borderTop: '5px solid transparent', // Set a transparent border
        borderImage: 'linear-gradient(to right, #2b8a3e, #8ce99a) 1',
      }}
      p="xs"
      pb={0}
      gap="xs"
    >
      <Group>
        <ActionIcon
          component="a"
          href="https://www.instagram.com/ucsdsig/"
          variant="subtle"
        > 
          <IconBrandInstagram size={24}/>
        </ActionIcon>
        <ActionIcon
          component="a"
          href="mailto:ucsdsustainableinvestment@gmail.com"
          variant="subtle"
        > 
          <IconMail size={24}/>
        </ActionIcon>
        <ActionIcon
          component="a"
          href="https://github.com/UCSD-Sustainable-Investment-Group-NEW/"
          variant="subtle"
        > 
          <IconBrandGithub size={24}/>
        </ActionIcon>
      </Group>

      <Text size="sm">
        Made with ❤️ and 💰 by SIG Dev Team
      </Text>
    </Group>
  )

}