import { Stack, Title, Text, } from "@mantine/core";

export default function RecruitingCalendar() {

    return (
        <Stack align="center">
            <Title mb={20} c="green">Recruiting Week Events</Title>
            <iframe src="https://calendar.google.com/calendar/embed?src=ucsdsustainableinvestment%40gmail.com&ctz=America%2FLos_Angeles&mode=AGENDA&dates=20250407/20250412" style={{border: 0, width:600, height:400}}></iframe>
        </Stack>
    )
}