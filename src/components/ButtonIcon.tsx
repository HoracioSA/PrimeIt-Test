import { TouchableOpacity, TouchableOpacityProps, } from "react-native";

import { useTheme, IButtonProps, Button as ButtonNB } from "native-base";

interface Props extends IButtonProps {
    type?: 'PRIMARY' | 'SECONDARY'
}

export function ButtonIcon({ type, ...rest }: Props) {


    return (
        <ButtonNB
            rounded="sm"
            fontSize="md"
            bg='transparent'
            _pressed={{
                bg: type === 'SECONDARY' ? 'transparent' : 'gray.700',
            }}
            {...rest}
        >

        </ButtonNB>
    );
}
