import Image from 'next/image'
import styles from './page.module.css'
import { fetchArrivalList } from '@/app/api/subway'

export default async function Home() {
  const arrivalList = await fetchArrivalList()

  return (
    <div className={styles.page}>
      <div>
        <h2>Arrival List</h2>
        <ul>
          {arrivalList.map((item, index) => (
            <li key={index}>
              {item.trainLineNm}: {item.arvlMsg2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
