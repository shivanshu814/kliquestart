import { useMediaQuery } from 'react-responsive'

// importing components
import Hero from '../Components/Desktop/Hero'
import Why from '../Components/Desktop/Why'
import Whatwedo from '../Components/Desktop/Whatwedo'
import ContactForm from '../Components/Desktop/ContactForm'

// importing mobile components
import MobileHero from '../Components/Mobile/hero/mobilehero'
import Mobilewhy from '../Components/Mobile/whykliquestart/mobilewhy'
import WhatwedoMobile from '../Components/Mobile/whatwedo/whatwedomobile'
import MobileContact from '../Components/Mobile/contact/contactmobile'

export default function Home(){

    const isMobileDevice = useMediaQuery({
        query: "(max-width: 1024px)",
      });
      
      const isDesktop = useMediaQuery({
        query: "(min-width: 1024px)",
      });

    return(
        <>
          <div class="blob1"></div>
          <div class="blob2"></div>
          <div class="blob3"></div>
          <div class="blob4"></div>
        {isMobileDevice && <MobileHero />}
        {isDesktop && <Hero />}
        {isMobileDevice && <Mobilewhy />}
        {isDesktop && <Why />}
        {isMobileDevice && <WhatwedoMobile />}
        {isDesktop && <Whatwedo />}
        {isMobileDevice && <MobileContact />}
        {isDesktop && <ContactForm />}
        </>
    )
}