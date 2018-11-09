import { createStackNavigator } from 'react-navigation';
import SingleProduct from './product/SingleProduct';

const Routes = createStackNavigator({
  SingleProduct: {
    screen: SingleProduct
  }
});

export default Routes;
