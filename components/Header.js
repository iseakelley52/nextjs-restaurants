import { useState } from 'react';
import Container from './Container';

import ButtonUI from './ButtonUI'
import MenuOverlay from './MenuOverlay'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    // identify the variable that holds the state of the menu
    // declare variable that sets the state
    // const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        <Container>
            <Link href="/">
            <Image 
                src="/images/syracuse-restaurants-logo.svg"
                alt="Syracuse Restaurants Logo"
                width={537}
                height={86}
                className={styles.logo}
            /></Link>
        </Container>
        
        {/*isMenuVisible && <MenuOverlay closeHandler={() => {
            setMenuVisible(false);
        }} />*/}
        
       {/* <ButtonUI 
            icon="menu"
            clickHandler={() => {
            setMenuVisible(true)
        }} />*/}
        
    </header>

}
export default Header 