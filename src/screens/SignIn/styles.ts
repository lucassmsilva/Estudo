import { StyleSheet} from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  theme.colors.secondary100
    },
    image: {
        width: '100%',
        height: 360
    },

    content: {
        marginTop: -20,
        paddingHorizontal: 50
    },
        
    title: {
        color: theme.colors.heading,
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 16,
        fontFamily: theme.fonts.title700
    },

    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
        fontFamily: theme.fonts.text500
    }
});