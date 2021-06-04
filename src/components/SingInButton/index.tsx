
import { signIn, signout, useSession} from 'next-auth/client'

import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'


export function SignInButton() {
    
    const [session] = useSession();
    console.log(session)

    return session ? (

        <button className={styles.signButtonLoged} type='button'
        onClick={ () => signout()}>
                <FaGithub color="#ffffff"/>
                    {session.user.name}
                <FiX className={styles.closeIcon}/>
                
        </button>


       
    ) : (
        
        <> 
            
            <button className={styles.signButton} type='button'
            onClick={() => signIn('github') }
            >
                <FaGithub color="#410E39"/>
               Entre com Github 
               
            </button>
            
        </>
       
    ) 
}