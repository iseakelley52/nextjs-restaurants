import classNames from 'classnames/bind'
import styles from './Showcase.module.scss'
import Container from './Container'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'


let cx = classNames.bind(styles);

const Showcase = ({
    title, 
    description, 
    halfHeight,
    backgroundImage="/images/dishes.jpg",
    cta 
}) => {
    let showcaseClasses = cx({
        showcase: true,
        'half-height' : halfHeight
    });
    return <section 
    className={showcaseClasses}
    style={ {backgroundImage: `url(${backgroundImage})`}}
    >
        <Container> 
            {title &&
            <Heading 
            level="2" marginBottom="1">{title}
            </Heading>
            }
            {description &&
            <Paragraph marginBottom="1">{description}</Paragraph>
            }
            {cta &&
            <Button label={cta}/>
            }
            
        </Container>
        </section>
}

export default Showcase 