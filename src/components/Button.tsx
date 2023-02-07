import { Button as ButtonNB, Text, IButtonProps } from 'native-base'
interface ButtonProps extends IButtonProps {
    title: string,
    type?: 'PRIMARY' | 'SECONDARY'
}
export const Button = ({ title, type = 'PRIMARY', ...rest }: ButtonProps) => {
    return (
        <ButtonNB
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            alignItems={{
                base: "center",
                md: "flex-start"
            }}
            bg={type === 'SECONDARY' ? 'red.500' : 'purple.500'}
            _pressed={{
                bg: type === 'SECONDARY' ? 'red.600' : 'purple.600',
            }}
            _loading={{
                _spinner: { color: 'white' }
            }}
            {...rest}
        >
            <Text
                fontSize='sm'
                fontFamily='heading'
                color={type === 'SECONDARY' ? 'white' : 'gray.400'}
                textTransform='uppercase'
                textAlign="center"
            >
                {title}
            </Text>
        </ButtonNB>
    )
}
