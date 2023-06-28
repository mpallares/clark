import { RootStackParamList } from './src/utils/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}