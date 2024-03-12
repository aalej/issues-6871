it("should correctly load .env.local and .env.demo-project", async () => {
  const res = await fetch(
    "http://127.0.0.1:5001/demo-project/us-central1/helloWorld"
  );
  const resText = await res.text();
  console.log(resText); // Log the message

  expect(resText).toEqual(
    "Hello message from local! I am a function. From your demo project"
  );
});
