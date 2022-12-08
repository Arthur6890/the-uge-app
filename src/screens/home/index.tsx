import { ImageBackground, Text } from "react-native";
import Background from "@app/assets/images/background.png"
import { styles } from "./styles";

export const Home = () => {
	return (
		<ImageBackground source={Background} style={styles.container} >
			<Text>teste</Text>
		</ImageBackground>
	)
}