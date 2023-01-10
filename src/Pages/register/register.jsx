import { useMediaQuery } from 'react-responsive'

// importing components
import RegForm from '../../Components/Desktop/register/regform';
import MobileReg from '../../Components/Mobile/Register/mobilereg';

// importing mobile components

export default function Home(){

    const isMobileDevice = useMediaQuery({
        query: "(max-width: 1024px)",
      });
      
      const isDesktop = useMediaQuery({
        query: "(min-width: 1024px)",
      });

    return(
        <>
        {isMobileDevice && <MobileReg />}
        {isDesktop && <RegForm />}
        </>
    )
}