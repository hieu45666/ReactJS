import Container from '../Components/Container';
import Home from "../Components/home";
import LoginForm from '../Components/LoginForm';
import Topic from '../Components/topic';

const routers = [
    {
      path : "/product",
      element : <Container></Container>,
      name : "Product"
    },
    {
      path : "/",
      element : <Home></Home>,
      name : "Home"
    },
    {
      path : "/topic",
      element : <Topic></Topic>,
      name :"Topic"
    },
    {
      path : "/login",
      element : <LoginForm></LoginForm>,
      name :"Login"
    }
]
export default routers;