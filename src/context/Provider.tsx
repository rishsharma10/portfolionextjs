import React, { createContext, ReactNode, SetStateAction, useState } from 'react'
import henceforthApi from 'src/utils/henceforthApi';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { COOKIES_USER_ACCESS_TOKEN, ERROR_UNAUTHORIZED } from './actionTypes';
import { ConfigProvider, Button } from 'antd';
import { UserInfo } from 'src/interfaces';

type Function = () => Promise<void | string>;
type LoginFunction = (id: string) => void;


interface CommonContextType {
    loading: boolean;
    setLoading: React.Dispatch<SetStateAction<boolean>>;
   
}
export const GlobalContext = createContext({} as CommonContextType);
export const downloadFile = (file_path: String) => {
    var a: any = document.createElement('a') as HTMLElement;
    a.href = file_path;
    a.target = "_blank";
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
export const MetamaskResource = {
    icon: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg',
    name: 'Metamask',
    title: 'Connect with metamask'
}
export const WalletConnectResource = {
    icon: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg',
    name: 'WalletConnect',
    title: 'Connect with walletConnect'
}
type GlobleContextProviderProps = {
    children: ReactNode;
    user_info: UserInfo,
}

function GlobalProvider(props: GlobleContextProviderProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState(props.user_info)
    henceforthApi.setToken(userInfo?.access_token ? userInfo?.access_token : "")


    return (
        <GlobalContext.Provider
            value={{ loading, setLoading, ...props }}>
            <ConfigProvider
                theme={{
                    components: {
                        // Slider: {
                        // colorPrimary: '#48B047',
                        // colorBorderSecondary:'#000000',
                        // colorFill:'#000000',
                        // colorFillSecondary:'#48B047',
                        // colorBorder:'#48B047',
                        // colorBorderBg:"#48B047",
                        // },
                    },
                }}
            >
                {props.children}
            </ConfigProvider>
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
