import classnames from 'classnames/bind'
import styles from './Button.module.scss'
import Link from 'next/link'

//let cx = classnames.bind(styles);

const Button = ({
    label ="Default label",
    clickHandler,
    path
    
}) => {
    //console.log({props});
    return path ?
     <Link href={path} className={styles.btn}>
        {label}
     </Link>
     :
     <button className={styles.btn} onClick={clickHandler}>{label}</button>
}
export default Button
//onclick wasnt working with videos - ask in class