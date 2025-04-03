import { Stack, Title, Text, Box } from "@mantine/core";

export default function RecruitingCalendar() {

    return (
        <Stack align="center" style={{ flexGrow: 1}}>
            <Title mb={20} c="green">Recruiting Week Events</Title>
            <Box
                style={{
                position: 'relative',
                width: '100%',
                maxWidth: "100rem",
                aspectRatio: '1 / 1', // Keeps it proportional
                }}
            >
    <iframe
      src="https://calendar.google.com/calendar/embed?src=ucsdsustainableinvestment%40gmail.com&ctz=America%2FLos_Angeles&mode=AGENDA&dates=20250407/20250420"
      style={{
        border: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
    ></iframe>
  </Box>
        </Stack>
    )
}