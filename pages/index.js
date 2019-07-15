const Page = ({ name }) => {
  // simulate exception thrown in render()
  throw new Error('wat');

  return 'hello world';
};

Page.getInitialProps = () => ({});

export default Page;
