import { Center, Spinner } from "native-base"
import React from "react"

export function Loading() {
    return (
        <Center flex={1} bgColor="gray.900">
            <Spinner color="roxo.500" />
        </Center>
    )
}
