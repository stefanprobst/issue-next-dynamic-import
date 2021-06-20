import dynamic from "next/dynamic";
// import { Test } from "../components/Test";

const Test = dynamic(async () => {
  const { Test } = await import("../components/Test");
  /* Test.Another exists */
  // console.log(Object.keys(Test));
  return Test;
});

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Test />
      {/* Test.Another is undefined */}
      <Test.Another />
    </main>
  );
}
