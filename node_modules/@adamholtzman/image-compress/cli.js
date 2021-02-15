import { compress } from "compress-images/promise";
const SOURCE_PATH = `${process.cwd()}/**/*.{jpg,JPG,jpeg,png,svg}`

async function makeSmall() {
  const results = await compress({
    source: SOURCE_PATH,
    destination: "compressed/",
    enginesSetup: {
      jpg: { engine: "mozjpeg", command: [ "-quality", "60" ]},
      png: { engine: "pngquant", command: [ "--quality=20-50", "-o" ]},
      svg: { engine: "svgo", command: [ "--multipass" ]}
    }
  })

  const { statistics, errors } = results;
}

makeSmall();
