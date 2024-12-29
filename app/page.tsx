import styles from './page.module.css'
import SearchPlaceInfo from './SearchPlaceInfo'

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h2>Place Information</h2>
        <SearchPlaceInfo />
      </div>
    </div>
  )
}
