import CatGenerator from '@/components/CatGenerator'
import stylex from '@stylexjs/stylex'
import { colors } from '@stylexjs/open-props/lib/colors.stylex'
import { fonts } from '@stylexjs/open-props/lib/fonts.stylex'
const styles = stylex.create({
  cats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
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
