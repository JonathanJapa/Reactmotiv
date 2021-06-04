import styles from './styles.module.scss'
import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

interface SubsButtonProps{
    priceId:string
}
export function SubsButton({ priceId } : SubsButtonProps ){
    
    const [ session ] = useSession();
    
    async function handleSubcribe() {
        if ( !session ) {
            
            signIn('github')
            
            return;
        }

        try{
            const response = await api.post('/subscribe')
            const { sessionId } =  response.data;
            const stripe = await getStripeJs()
            stripe.redirectToCheckout({ sessionId })


        }catch (err){alert(err.message)};
    }
    
 
    return (
        <button 
        type='button'
        className={styles.subsButton}
        onClick={handleSubcribe}
        >
            Venha Para o Futuro
            
        </button>
    
    )
        
} 