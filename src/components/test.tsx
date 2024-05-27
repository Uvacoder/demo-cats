import { readFile } from 'fs/promises'

export default async function CatGenerator() {
  const allCatNames = await readFile('./cats.txt', 'utf8')
  const cats = allCatNames.split('\n')
}
