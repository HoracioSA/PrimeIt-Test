import { Avatar, Center, HStack, Text } from 'native-base';

export interface MemberProps {
    login: string;
    id: string;
    avatar_url: string;

};

interface Props {
    user: MemberProps;
    count: string;
};

export function Members({ user, count }: Props) {
    console.log("Blllla", user);
    return (
        <HStack>


            <Avatar
                key={user?.login}
                source={{ uri: user?.avatar_url }}
                w={8}
                h={8}
                rounded="full"
                borderWidth={2}
                marginRight={-3}
                borderColor="gray.800"
            >
                {user?.login.toUpperCase()}
            </Avatar>



            <Center w={8} h={8} bgColor="gray.700" rounded="full" borderWidth={1} borderColor="gray.800">
                <Text color="gray.100" fontSize="xs" fontFamily="medium">
                    {count ? `${count}` : 0}
                </Text>
            </Center>
        </HStack>
    );
}
