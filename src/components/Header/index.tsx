import { SignInButton } from '../SingInButton';
import styles from './styles.module.scss';


import { ActiveLink } from '../ActiveLink';

export function Header(){
    return(
       
       
       <header className={styles.headerCoitainer}>
            <div className={styles.headerContent}>
                <nav>
                    <ActiveLink activeClassName={ styles.active} href='/' >
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    
                    <ActiveLink  activeClassName={ styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                    
                </nav>

                
                <img src="/images/hea.svg" alt="logo" />
                <h1>React Motive</h1>

                <SignInButton/>
                
            </div>
        </header>









    )
}