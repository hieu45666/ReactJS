import Container from '../Components/Container';
import Home from "../Components/home";
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
    }
]
export default routers;