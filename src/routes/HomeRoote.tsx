import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import { Feather } from "@expo/vector-icons"
import { Home } from "../screens/Home";
import { Favorites } from "../screens/Favorites";

export function HomeRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();
    const { colors, sizes } = useTheme();
    const iconSize = sizes[6]
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.purple[500],
            tabBarInactiveTintColor: colors.gray[300],
            tabBarStyle: {
                position: 'absolute',
                height: 87,
                backgroundColor: colors.gray[800]
            },
            tabBarItemStyle: {
                position: 'relative',
                top: Platform.OS === 'android' ? -10 : 0,
            }
        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <Feather color={color} size={iconSize} name="home" />,
                    tabBarLabel: "Home"
                }}
            />
            <Screen
                name="pools"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color }) => <Feather color={color} size={iconSize} name="heart" />,
                    tabBarLabel: 'My orgs'
                }}
            />


        </Navigator>
    )
}
