import {useState} from 'react';
import { Text, View, Pressable, StyleSheet } from "react-native";
import { SetState } from "../utils/type-definitions";


const defaultCount = 0; 
function updateCount(count: number, setCount: SetState<number>) {
	const newCount = count + 1; 
	setCount(newCount);
}

function Counter() {
	const [count, setCount] = useState<number>(defaultCount); 
	const handlePress = () => updateCount(count, setCount);
	return (
			<Pressable onPress={handlePress}>
			<Text>You have tapped me {count} times.</Text>
			</Pressable>
	)
}


export default function Index() {
  return (
    <View
      style={styles.textDefault}
    >
			<Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
	textDefault: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
