import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Separator, Text, View } from "tamagui"

export default function ModalScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<Separator />
			<EditScreenInfo path="app/modal.tsx" />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
})
