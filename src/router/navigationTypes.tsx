import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

export interface navigationProps {
  navigation: NavigationProp<ParamListBase>;
  route?: RouteProp<ParamListBase>;
}
