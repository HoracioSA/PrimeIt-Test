import { Button as ButtonNB, Text, IButtonProps } from 'native-base'
interface ButtonProps extends IButtonProps {
    type?: 'PRIMARY' | 'SECONDARY'
}
export const Button = ({ type = 'PRIMARY', ...rest }: ButtonProps) => {
    return (
        <ButtonNB
            w={14}
            h={14}
            rounded="sm"
            fontSize="md"
            bg={type === 'SECONDARY' ? 'red.500' : 'purple.500'}
            _pressed={{
                bg: type === 'SECONDARY' ? 'red.600' : 'purple.600',
            }}
            _loading={{
                _spinner: { color: 'white' }
            }}
            {...rest}
        >

        </ButtonNB>
    )
}
