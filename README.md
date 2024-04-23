# Mege's simple STL Viewer

This uses  [three.js](https://threejs.org),  [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) and helpers from [drei](https://github.com/pmndrs/drei) to load and display an STL file. The filename is currently hardcoded in [Four.js](src/app/Four.js), and the file must be put in the public folder. Selecting the file from a dynamic file backend is left as an excercise for the reader.

## Getting Started

First install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Notes
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).