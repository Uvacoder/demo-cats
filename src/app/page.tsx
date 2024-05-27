import CatGenerator from '@/components/CatGenerator'
import stylex from '@stylexjs/stylex'
import { sizes } from '@stylexjs/open-props/lib/sizes.stylex'
const styles = stylex.create({
  cats: {
    display: 'flex',
    flexDirection: 'column',
    gap: sizes.spacing4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    verticalAlign: 'middle',
  },
})
export default function Home() {
  return (
    <div {...stylex.props(styles.cats)}>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
      <CatGenerator></CatGenerator>
    </div>
  )
}
