import styled from "styled-components";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

// Colors
export const colors = {
  primary: "#0d1117",
  secondary: "#161b22",
  tertiary: "#E6E6E6",
  alternative: "#999999",
};

export const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  flex: 1;
`;

//Header Banner
export const HeaderBanner = styled.Image`
  width: 100%;
  height: 280px;
`

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.tertiary};
`;

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary}
`

// List
export const ListView = styled.TouchableHighlight`
  background-color: ${colors.primary};
  min-height: 64px;
  width: 100%;
  padding: 16px;
  justify-content: space-around
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.primary};
  min-height: 64px;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: flex-start
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 64px;
  align-items: center;
  margin-left: 6px
`;

export const TodoText = styled.Text`
  font-size: 16px;
  color: ${colors.tertiary};
  margin-left: 8px;
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  color: ${colors.alternative};
  margin-top: 2px;
  margin-left: 8px;
  text-align: left;
  text-transform: uppercase;
`;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.primary};
`;

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;
