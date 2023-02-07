import React, { useCallback, useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { HStack, VStack, Text, Heading, Avatar, Icon, } from 'native-base';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ButtonIcon } from './ButtonIcon';
export interface OrgsCardProps {
    login: string,
    id: string,
    avatar_url: string,
    description: string,
}

interface Props extends TouchableOpacityProps {
    data: OrgsCardProps;
}

export function OrgsCard({ data, ...rest }: Props) {
    // console.log('Data==>', data)
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = () => {
        setFavorite(true)
    }
    return (
        <TouchableOpacity {...rest}>
            <HStack
                w="full"
                h={40}
                bgColor="gray.800"
                borderBottomWidth={3}
                borderBottomColor="purple.500"
                justifyContent="space-between"
                alignItems="center"
                rounded="sm"
                mb={3}
                p={4}
            >
                <VStack>
                    <VStack>
                        <Heading color="white" fontSize="md" fontFamily="heading">
                            {data.login.toUpperCase()}
                        </Heading>
                        {data.description ?
                            <Text color="gray.200" fontSize="xs" maxW="95%" >
                                {data.description}
                            </Text> : <Text color="gray.200" fontSize="xs" alignSelf='center'>Nao ha discricao para esta org</Text>}
                    </VStack>

                    <Avatar
                        source={{ uri: data.avatar_url }}
                        w={14}
                        h={14}
                        mt={3}
                        rounded="md"
                        borderWidth={2}
                        marginRight={-3}
                        borderColor="gray.800"
                    >
                        {data.login.toUpperCase()}
                    </Avatar>
                </VStack>
                <ButtonIcon
                    leftIcon={<Icon as={MaterialCommunityIcons} name='heart' color={favorite ? 'red.500' : 'gray.500'} size='lg' />}
                    onPress={handleFavorite} />
            </HStack>

        </TouchableOpacity>
    );
}
