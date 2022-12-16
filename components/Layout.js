import {Fragment} from 'react'


import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer /> 
    </Fragment>
}
export default Layout

/*const Layout = ({children}) => {
    return <>
    <Head>
        <title>IST 363 Restaurants</title>
        <meta name ="description" content="This is a description about our proejct">
            
        </meta>
    </Head>
    <Header />
    {children}
    <Footer />
    </> //need one parent box around return statement

}*/
