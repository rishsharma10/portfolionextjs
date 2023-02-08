import React, { createContext, ReactNode, SetStateAction, useState } from 'react'
import henceforthApi from 'src/utils/henceforthApi';
import { ApisListResponse } from 'src/interfaces';


interface CommonContextType {
    nested: ApisListResponse;
    nestedLoading: boolean

}
export const ProductContext = createContext({} as CommonContextType);

type GlobleContextProviderProps = {
    children: ReactNode;
}

function ProductProvider(props: GlobleContextProviderProps) {
    const [nested, setNested] = useState({} as ApisListResponse)
    const [nestedLoading, setNestedLoading] = React.useState(false)



    const initialiseCategory = async () => {
        setNestedLoading(true)
        try {
            const apiRes = await henceforthApi.Common.nested()
            setNested(apiRes)
        } catch (error) {

        } finally {
            setNestedLoading(false)
        }
    }
    React.useEffect(() => { initialiseCategory() }, [])


    return (
        <ProductContext.Provider
            value={{ nested, nestedLoading, ...props }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
