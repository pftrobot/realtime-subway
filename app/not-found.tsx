import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <p>잘못된 경로입니다</p>
      <Link href={'/'}>Home</Link>
    </div>
  )
}
