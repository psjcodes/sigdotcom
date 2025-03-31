import {
    Stack,
    Title,
    Text,
    Center,
  } from '@mantine/core';
import Footer from '../components/Footer';
  
  export default function EventsPage() {
  
    return (
      <>
        <Center>
          <Stack align="center" mb="xl">
            <Title c="green">Events Calendar</Title>
            <Text c="dimmed">Stay up to date with SIG events.</Text>
            <iframe src="https://calendar.google.com/calendar/embed?src=c_297c5bf4c69899a91831d07204ef27e9a34c592954b667d7adc4ab26035ad8af%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0, width:800, height:600}}></iframe>
          </Stack>
        </Center>
        <Footer />
      </>
    )
  }