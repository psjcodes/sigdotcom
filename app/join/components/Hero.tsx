import {Stack, Title, Text, Image } from "@mantine/core";

export default function Hero() {

  return (
    <Stack align="center">
      <Title mb={20} c="green">Interested in joining SIG?</Title>
      <Image alt="image is gone :(" w={600} h={400} src="/images/recruiting.JPG"/>
    </Stack>
  )
}