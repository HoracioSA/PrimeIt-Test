import { VStack, Icon, useToast, FlatList, HStack } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import React, { useCallback, useState } from "react";
import { Loading } from "../components/Loading";
import { OrgsCard, OrgsCardProps } from "../components/OrgsCard";
import { api } from "../services/api";
import { Input } from "../components/Input";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const toast = useToast()
    const { navigate } = useNavigation()
    const [orgs, setOrgs] = useState<OrgsCardProps[]>([])
    const [serchText, setSerchText] = useState('')

    const handleListOfOrgs = async () => {
        try {
            setIsLoading(true)
            const response = await api.get('/organizations')
            if (serchText === '') {
                setOrgs(response.data)
            } else {
                setOrgs(response.data.filter((org: OrgsCardProps) => {

                    if (org.login.toLocaleLowerCase().indexOf(serchText.toLocaleLowerCase()) > -1) {
                        console.log('Ogrs>>>>', org)
                        return true
                    } else {
                        return false
                    }
                }))
            }
        } catch (error) {
            console.log(error)
            toast.show({
                title: 'Error while loading pools',
                placement: 'top',
                bgColor: 'red.500'
            })

        } finally {
            setIsLoading(false)
        }
    }
    const handleFilter = () => {
        let novaListaOfOrgs = [...orgs]
        novaListaOfOrgs.sort((a, b) =>
            (a.login.toLocaleLowerCase() > b.login.toLocaleLowerCase() ? 1 : b.login.toLocaleLowerCase() > a.login.toLocaleLowerCase() ? -1 : 0)
        )

        setOrgs(novaListaOfOrgs)
    }

    useFocusEffect(useCallback(() => {
        handleListOfOrgs()
    }, [serchText]))
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Organizations" />
            <VStack mt={6} mx={5} mb={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4}>
                <HStack
                    space={5}
                    w="full"
                >
                    <Input
                        placeholder="Type the org name"
                        onChangeText={setSerchText}
                        autoCapitalize="none"
                        value={serchText}
                    />
                    <Button
                        leftIcon={<Icon as={MaterialCommunityIcons} name='filter' color='gray.400' size='lg' />}
                        onPress={handleFilter}
                    />
                </HStack>
                {isLoading ? <Loading /> :
                    <FlatList
                        data={orgs}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <OrgsCard
                            data={item}
                            onPress={() => {}} />}
                        px={5}
                        mb={40}
                        mt={7}
                        showsVerticalScrollIndicator={false}
                        _contentContainerStyle={{ pb: 10 }}
                    />
                }
            </VStack>
        </VStack>
    )
}
