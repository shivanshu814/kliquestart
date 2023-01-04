import { useMediaQuery } from 'react-responsive'

// importing components
import RegForm from '../../Components/Desktop/register/regform';

// importing mobile components


import './register.css'

export default function Home(){

    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 1024px)",
      });
      
      const isDesktop = useMediaQuery({
        query: "(min-device-width: 1024px)",
      });

    return(
        <>
        {/* {isMobileDevice && <MobileRegister />} */}
        {isDesktop && <RegForm />}
        </>
    )
}