import { useRouter } from "next/router";

import Layout from "../../components/Layout";

const Event = () => {
  const {
    query: { slug }
  } = useRouter();

  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  );
};

export default Event;
