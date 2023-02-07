import { NavigationContainer } from '@react-navigation/native';


import { Box } from 'native-base';
import { HomeRoutes } from './HomeRoote';
export function Routes() {

    return (
        <Box flex={1} bg="gray.900">
            <NavigationContainer>
                <HomeRoutes />
            </NavigationContainer>
        </Box>
    )
}
