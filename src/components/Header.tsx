import { Text, HStack, VStack} from 'native-base';
import FIArrawLeft from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon } from './ButtonIcon';
import React from 'react';

interface Props {
    title: string;

}
export function Header({ title, }: Props) {

    return (
        <HStack w="full" h={24} bgColor="gray.800" alignItems="flex-end" pb={5} px={5}>
            <VStack w="full" alignItems="center" justifyContent="cnter">

                <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
                    {title}
                </Text>
            </VStack>
        </HStack>
    );
}
