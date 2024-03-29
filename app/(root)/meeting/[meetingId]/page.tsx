const MeetingPage = ({ params }: { params: { meetingId: string } }) => {
  return <div>Meeting Room: #{params.meetingId}</div>;
};

export default MeetingPage;
