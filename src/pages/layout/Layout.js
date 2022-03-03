import { ReactComponent as Logo } from '../../imgs/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCart4 } from 'react-icons/bs';


function Header() {
    return (
      <>
        <head>HEADER</head>
      </>
    );
  }
  
  function AsideLeft() {
    return (
      <>
        <aside style={{ width: '12.5%'}}>
          <div style={{ borderRight: '1px solid #c4c4c4', height: '100%' }}>
            <div style={{ width: '50px', height: '50px', margin: '0 auto' , paddingTop:'20px' }}>                
                <Logo style={{ width: '100%', height: 'auto', fill:'#989177' }}/>
            </div>            
          </div>
        </aside>
      </>
    );
  }
  
  function AsideRight() {
    return (
      <>
        <aside style={{ width: '12.5%' }}>
          <div style={{ borderLeft: '1px solid #c4c4c4', height: '100%' }}>
          <GiHamburgerMenu />
          <div>
              
          </div>
          <BsCart4 />
          </div>
        </aside>
      </>
    );
  }
  
  function Footer() {
    return (
      <>
        <div style={{ width: '100%', borderTop: '1px solid #c4c4c4' }}>FOOTER</div>
      </>
    );
  }
  
  export { Header, AsideLeft, AsideRight, Footer };