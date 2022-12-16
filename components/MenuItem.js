import Image from 'next/image'
import Heading from './Heading'
import Paragraph  from './Paragraph'
import styles from './MenuItem.module.scss'

const MenuItem = ({data}) => {
    const {menuImage, menuDescription, menuPrice, menuTitle} = data;
    return <article className={styles.menuItem}>
               <Image 
                    src={menuImage.sourceUrl}
                    alt={menuImage.altText}
                    width={menuImage.mediaDetails.width}
                    height={menuImage.mediaDetails.height}
                    className ={styles.menuImage}
                />
                <div className={styles.menuContent}>
                    <Heading level="3" marginBottom="1">{menuTitle}</Heading>
                    <Heading level="4" marginBottom="1">${menuPrice}</Heading>
                    <Heading>{menuDescription}</Heading>
                </div>
            </article>
}

export default MenuItem