import {
    Timeline,
    TimelineItem,
    Group,
    Center,
    Stack, 
    Text,
    Space,
  } from '@mantine/core';
import RecruitingTimeline from './components/Timeline';
import Faqs from './components/Faqs';
import Hero from './components/Hero';
import Footer from '../components/Footer';
  
export default function JoinPage() {

  return (
    <>
      <Center>
        <Stack w="100%">
          <Hero />
          <Space h={50} />
          <RecruitingTimeline />
          <Space h={50} />
          <Faqs />
          <Space h={50} />
        </Stack> 
      </Center>
      <Footer />
    </>
    

  )
}