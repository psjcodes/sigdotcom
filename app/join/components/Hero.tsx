import {Stack, Title, Text, Image, Button } from "@mantine/core";

export default function Hero() {

  return (
    <Stack align="center">
      <Title mb={20} c="green">Interested in joining SIG?</Title>
      <Button component="a" href="https://forms.gle/TJWsNZbAJNq8x6jP7" target="_blank" variant="gradient"
      gradient={{ from: 'green.3', to: 'green.9', deg: 90 }} style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}>Application Form</Button>
    </Stack>
  )
}