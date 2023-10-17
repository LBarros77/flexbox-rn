import { StyleSheet, View} from 'react-native';
import { Box } from '../components/Box';

export function Header() {
	return (
		<View style={headerStyle.section}>
			<Box w={20} h={20} bgColor={'#3f79ab'} />
			<View style={[headerStyle.box, {backgroundColor: '#3f79ab', widht: 70, height: 10, paddingHorizontal: 70}]} />
			<Box w={20} h={20} bgColor={'#3f79ab'} />
		</View>
	);
};

const headerStyle = StyleSheet.create({
	section: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 50,
		maxHeight: '10%',
	},
});