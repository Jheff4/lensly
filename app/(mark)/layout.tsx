import Footer from '@/components/Footer'
import Navbar from '@/components/SecondNav'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout