import SecondFooter from '@/components/SecondFooter'
import SecondNav from '@/components/SecondNav'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SecondNav />
      {children}
      <SecondFooter />
    </>
  )
}

export default layout