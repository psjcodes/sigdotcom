import {
    Timeline,
    TimelineItem,
    Group,
    Center,
    Stack, 
    Text,
    Space,
    Box,
  } from '@mantine/core';
import RecruitingTimeline from './components/Timeline';
import Faqs from './components/Faqs';
import Hero from './components/Hero';
import Footer from '../components/Footer';
import RecruitingCalendar from './components/Calendar';
  
export default function JoinPage() {

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: '100%', // Fill available height from AppShellMain
      }}
    >
      <Box style={{ flexGrow: 1 }}>
        <Center w="100%" h="100%">
          <Stack>
            <Hero />
            <Space h="2rem" />
            <RecruitingCalendar />
            <Space h="2rem" />
          </Stack>
        </Center>
      </Box>
      <Footer />
      </Box>

  )
}