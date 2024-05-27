import CatGenerator from '@/components/cat-generator'

export default function Home() {
  return (
    <div className='border-1 w-screen h-screen flex items-center align-middle justify-center flex-col gap-4 '>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
    </div>
  )
}
