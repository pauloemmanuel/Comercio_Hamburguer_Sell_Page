import {Message404,Message404__Description,Message404__Link,Message404__Title} from './NotFoundStyle'
import {Link} from 'react-router-dom'
const NotFound = () => {

  return(
    
    <div>
    <Message404>

    <Message404__Title>Erro 404</Message404__Title>
    <Message404__Description>
    Houve um erro ao carregar essa página, volte para a página inicial através deste <Message404__Link><Link  to='/'>link</Link></Message404__Link>
    </Message404__Description>
    </Message404>
      
    </div>
  );
 }

 export default NotFound;