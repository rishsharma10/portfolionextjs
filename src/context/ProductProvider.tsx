import React, { createContext, ReactNode, SetStateAction, useState } from 'react'
import henceforthApi from 'src/utils/henceforthApi';


interface CommonContextType {
    nestedLoading: boolean

}
export const ProductContext = createContext({} as CommonContextType);

type GlobleContextProviderProps = {
    children: ReactNode;
}

function ProductProvider(props: GlobleContextProviderProps) {
    const [nestedLoading, setNestedLoading] = React.useState(false)



    const initialiseCategory = async () => {
        setNestedLoading(true)
        try {
            const apiRes = await henceforthApi.Common.nested()
        } catch (error) {

        } finally {
            setNestedLoading(false)
        }
    }
    React.useEffect(() => { initialiseCategory() }, [])


    return (
        <ProductContext.Provider
            value={{ nestedLoading, ...props }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
