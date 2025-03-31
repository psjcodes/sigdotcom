import {Group, Stack, Title, Text, Accordion, AccordionItem, AccordionControl, AccordionPanel} from "@mantine/core";

export const faqs = [
  {
    q: "wjikfiekf?",
    a: "feifef",
  },
  {
    q: "wjikfief?",
    a: "jifef",
  },
  {
    q: "wjifiekf?",
    a: "fejife",
  },
  {
    q: "wikfiekf?",
    a: "feifef",
  },
]

export default function Faqs() {

  const items = faqs.map((item) => (
    <AccordionItem key={item.q} value={item.q}>
      <AccordionControl>{item.q}</AccordionControl>
      <AccordionPanel>{item.a}</AccordionPanel>
    </AccordionItem>
  ));

  return (
    <>
    <Stack align="center">
      <Title mb={20} c="green">FAQs</Title>
    </Stack>
    <Stack align="left" px={240}>
      <Text fw="bold">This is the hardest question on earth?</Text>
      <Text>This is the easiest answer on earth.</Text>
      <Text fw="bold">This is the second hardest question on earth?</Text>
      <Text>This is the second easiest answer on earth.</Text>
      <Text fw="bold">This is the third hardest question on earth?</Text>
      <Text>This is the third easiest answer on earth.</Text>
      <Text fw="bold">This is the fourth hardest question on earth?</Text>
      <Text>This is the fourth easiest answer on earth.</Text>
      <Text fw="bold">This is the fifth hardest question on earth?</Text>
      <Text>This is the fifth easiest answer on earth.</Text>
    </Stack>
    </>


  )
}