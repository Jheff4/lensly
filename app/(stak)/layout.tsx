import Footer from '@/components/Footer'
import SecondNav from '@/components/SecondNav'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SecondNav />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default layout