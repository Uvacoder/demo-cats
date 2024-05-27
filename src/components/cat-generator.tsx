import { readFile } from 'fs/promises'
import { RevealButton } from './reveal-button'

export default async function CatGenerator() {
  const allCatNames = await readFile('./cats.txt', 'utf8')
  const cats = allCatNames.split('\n')
  const randomCat = cats[Math.floor(Math.random() * (cats.length - 1))]
  return <RevealButton catName={randomCat}></RevealButton>
}

{
  /* <div className='flex flex-col items-center justify-center h-screen'>
<h1 className='text-4xl font-bold'>{randomCat}</h1>
</div> */
}
