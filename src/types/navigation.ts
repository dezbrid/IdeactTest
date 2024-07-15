import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';
export type RootStackParamList = {
  Home: undefined;
  Details: {id: string};
};

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type TabParamList = {
  HomeStack: NavigatorScreenParams<RootStackParamList>;
  Profile: undefined;
};
export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  StackScreenProps<RootStackParamList>
>;
export type ProfileProps = NativeStackScreenProps<TabParamList, 'Profile'>;
