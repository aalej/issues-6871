# Repro for issue 6871

## Versions

firebase-tools: v13.4.1<br>
platform: macOs Sonoma 14.3.1<br>
node: v20.10.0

## Steps to reproduce

1. Run `cd functions`
1. Run `npm i` to install dependencies
1. Run `npm run build`
1. Run `firebase emulators:exec "npm run test" --project demo-project`

```log
 RUNS  src/__test__/index.test.ts
 RUNS  src/__test__/index.test.ts
i  functions: Beginning execution of "us-central1-helloWorld"
  console.log
    Hello message from local! I am a function. From your demo project

      at Object.log (src/__test__/index.test.ts:6:11)

 PASS  src/__test__/index.test.ts
  ✓ should correctly load .env.local and .env.demo-project (1570 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.001 s, estimated 4 s
```
