import { readFile } from 'fs/promises';
const {products} = JSON.parse(
  await readFile(
    new URL('./products.json', import.meta.url)
  )
);

export default products