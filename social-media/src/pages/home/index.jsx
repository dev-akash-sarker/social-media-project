import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Faceconnect - Homepage</title>
      </Helmet>
      <div className="mt-10">This is my post</div>
    </>
  );
}
