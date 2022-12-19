import Image from 'next/image'
import Heading from './Heading'
import Paragraph  from './Paragraph'
import styles from './MenuItem.module.scss'

const MenuItem = ({data}) => {
    const {image, description, price, title} = data;
    return <article className={styles.menuItem}>
               <Image 
                    src={image.sourceUrl}
                    alt={image.altText}
                    width={image.mediaDetails.width}
                    height={image.mediaDetails.height}
                    className ={styles.image}
                />
                <div className={styles.menuContent}>
                    <Heading level="3" marginBottom="1">{title}</Heading>
                    <Heading level="4" marginBottom="1">${price}</Heading>
                    <Heading>{description}</Heading>
                </div>
            </article>
}

export default MenuItem