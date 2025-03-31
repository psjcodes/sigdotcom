import {
  Timeline,
  TimelineItem,
  Stack, 
  Text,
  Title,
  Anchor,
} from '@mantine/core';
import { IconFileCv, IconCoffee, IconZoom, IconSend, IconUserQuestion, IconConfetti } from '@tabler/icons-react';


export default function RecruitingTimeline() {

  return (
    <Stack align="center">
      <Title mb={20} order={1} c="green">Recruiting Timeline</Title>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <TimelineItem bullet={<IconFileCv size={12} />} title="Applications open!">
          <Text w={400} c="dimmed" size="sm">Submit your applications <Anchor href="https:google.com" target="_blank">here</Anchor>.</Text>
          <Text size="sm" mt={4}>Ends 04/xx.</Text>
        </TimelineItem>

        <TimelineItem bullet={<IconCoffee size={12} />} title="Coffee chats!">
          <Text w={400} c="dimmed" size="sm">Sign up for an optional coffee chats with our directors <Anchor href="https:google.com" target="_blank">here</Anchor>.</Text>
          <Text size="sm" mt={4}>Ends 04/xx.</Text>
        </TimelineItem>

        <TimelineItem bullet={<IconZoom size={12} />} title="Applications closed!">
          <Text w={400} c="dimmed" size="sm">SIG is reviewing applications.</Text>
          <Text size="sm" mt={4}>Ends 04/xx</Text>
        </TimelineItem>

        <TimelineItem bullet={<IconUserQuestion size={12} />} title="Interviews!">
          <Text w={400} c="dimmed" size="sm">Check your email for an invite. If received, schedule it ASAP.</Text>
          <Text size="sm" mt={4}>Ends 04/xx.</Text>
        </TimelineItem>

        <TimelineItem bullet={<IconSend size={12} />} title="Decisions released!">
          <Text w={400} c="dimmed" size="sm">Check your email again for your application decision.</Text>
          <Text size="sm" mt={4}>Ends 04/xx.</Text>
        </TimelineItem>

        <TimelineItem bullet={<IconConfetti size={12} />} title="First GBM!">
          <Text w={400} c="dimmed" size="sm">Welcome to SIG.</Text>
        </TimelineItem>
      </Timeline>
    </Stack>
  )
}