export function Test() {
  return <p>Test</p>;
}

function AnotherTest() {
  return <p>AnotherTest</p>;
}

Test.Another = AnotherTest;
