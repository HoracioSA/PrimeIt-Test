import { VStack, Icon, useToast, FlatList } from "native-base";
import { Octicons } from '@expo/vector-icons'
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import React, { useCallback, useState } from "react";
import { Loading } from "../components/Loading";
// import { PoolCard, PoolCardProps } from "../components/PoolCard";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const toast = useToast()

    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Organizations" />
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4} >
                <Button
                    title="Buscar por codigo"
                    leftIcon={<Icon as={Octicons} name='search' color='gray.400' size='md' />}
                    onPress={() => { }}
                />
            </VStack>
        </VStack>
    )
}
