## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run using docker

- Use docker to build image and run it

```
docker build -t cerebry .
docker run -p 3000:3000 -it cerebry
```

## Run test

- Make sure you have it running on localhost:3000 , before running test

```
npm run test
```
