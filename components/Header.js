import React, { Fragment } from 'react';
import Link from 'next/link'

const Header = () => {
  return ( 
    <Fragment>
      <div className='header'>
        <Link href='/log-out'><h4>Log-out</h4></Link>
        {/*<Link href='/drop-out'><h4>Cancel Count</h4></Link>*/}
      </div>
    </Fragment>
   );
}

export default Header;