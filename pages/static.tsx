const staticPage = ({ time }: { time: string }) => {
  return <div>{time}</div>;
};

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString(), revalidate: 3 } };
};

export default staticPage;
