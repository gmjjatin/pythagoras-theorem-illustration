## TLDR
This project helps to dynamically create pythogoras triangle, if the input is a pythorgoras triplet.
Its has following type of UI ->
1. Boxes representing each side of triangle
2. Boxes arranged in right-angled triangle formed
3. One box === One unit of length

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
