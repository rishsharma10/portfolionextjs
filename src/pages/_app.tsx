import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import GlobalProvider from 'src/context/Provider';
import { Router } from 'next/router';
import { UserInfo } from 'src/interfaces';
import henceforthApi from 'src/utils/henceforthApi';
import { COOKIES_USER_ACCESS_TOKEN } from 'src/context/actionTypes';

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};
type Props = AppProps & {
  Component: Page;
  user_info: UserInfo;

};

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps, ...props }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalProvider {...props}>
    <Head>
      <title>
        India&apos;s largets e-commerce platform
      </title>
      {/* <link rel="icon" href="./favicon.ico" /> */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="India&apos;s largets e-commerce platform" />

    </Head>
    <Script src="https://apis.google.com/js/platform.js?onload=init" async defer></Script>
    <Script id="my-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    <Script id="my-script" strategy="lazyOnload">
      {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
    <Script async defer src="https://connect.facebook.net/en_US/sdk.js"></Script>
    {getLayout(
      <Component {...pageProps} />
    )}
  </GlobalProvider >

}

MyApp.getInitialProps = async (context: any) => {
  try {
    const accessToken = parseCookies(context.ctx)[COOKIES_USER_ACCESS_TOKEN]
    if (accessToken) {
      henceforthApi.setToken(accessToken)
      let apiRes = await henceforthApi.Auth.profile()
      const user_info = apiRes.data
      return { user_info }
    }
    return { user_info: null }

  } catch (error: any) {
    return { user_info: null }
  }

}

export default MyApp
