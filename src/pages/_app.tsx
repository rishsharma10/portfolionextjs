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
import NProgress from 'nprogress';
import { parseCookies } from 'nookies';

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
      <link rel='stylesheet' id='line-awesome-css'
        href='https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css?ver=6.2'
        media='all' />
    <link rel='stylesheet' id='bootstrap-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/bootstrap.min.css?ver=6.2'
        media='all' />
    <link rel='stylesheet' id='owl-carousel-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/owl.carousel.min.css?ver=6.2'
        media='all' />
    <link rel='stylesheet' id='owl-theme-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/owl.theme.default.min.css?ver=6.2'
        media='all' />
    <link rel='stylesheet' id='animate-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/animate.min.css?ver=6.2' media='all' />
    <link rel='stylesheet' id='smooth-scrollbar-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/smooth-scrollbar.css?ver=6.2'
        media='all' />
    <link rel='stylesheet' id='lightbox-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/lightbox.min.css?ver=6.2'
        media='all' />
    <link rel='stylesheet' id='drake-style-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/style.css?ver=6.2' media='all' />
    <link rel='stylesheet' id='unit-test-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/unit-test.css?ver=6.2' media='all' />
    <link rel='stylesheet' id='drake-responsive-css'
        href='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/css/responsive.css?ver=6.2' media='all' />
    <link rel='stylesheet' id='drake-fonts-css'
        href='//fonts.googleapis.com/css?family=Inter%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%26subset%3Dlatin%2Clatin-ext&#038;ver=1.0.0'
        media='all' />
    <link rel='stylesheet' id='elementor-icons-css'
        href='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.18.0'
        media='all' />
    <link rel='stylesheet' id='elementor-frontend-css'
        href='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.11.5'
        media='all' />
    <link rel='stylesheet' id='swiper-css'
        href='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5'
        media='all' />
    <link rel='stylesheet' id='elementor-post-10-css'
        href='https://wpriverthemes.com/drake/wp-content/uploads/elementor/css/post-10.css?ver=1678787170'
        media='all' />
    <link rel='stylesheet' id='elementor-global-css'
        href='https://wpriverthemes.com/drake/wp-content/uploads/elementor/css/global.css?ver=1678787402' media='all' />
    <link rel='stylesheet' id='google-fonts-1-css'
        href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.2'
        media='all' />
    <link rel="preconnect" href="https://fonts.gstatic.com/"/>
    <Script src='https://wpriverthemes.com/drake/wp-includes/js/jquery/jquery.min.js?ver=3.6.3'
        id='jquery-core-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.0'
        id='jquery-migrate-js'></Script>
    <link rel="https://api.w.org/" href="https://wpriverthemes.com/drake/wp-json/" />
    <link rel="alternate" type="application/json" href="https://wpriverthemes.com/drake/wp-json/wp/v2/pages/8" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://wpriverthemes.com/drake/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml"
        href="https://wpriverthemes.com/drake/wp-includes/wlwmanifest.xml" />
    <meta name="generator" content="WordPress 6.2" />
    <link rel="canonical" href="https://wpriverthemes.com/drake/" />
    <link rel='shortlink' href='https://wpriverthemes.com/drake/' />
    <link rel="alternate" type="application/json+oembed"
        href="https://wpriverthemes.com/drake/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwpriverthemes.com%2Fdrake%2F" />
    <link rel="alternate" type="text/xml+oembed"
        href="https://wpriverthemes.com/drake/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwpriverthemes.com%2Fdrake%2F&#038;format=xml" />
         <link rel="icon" type="image/x-icon"
        href="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/favicon.png"/>
    <link rel='dns-prefetch' href='//maxst.icons8.com' />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel="alternate" type="application/rss+xml" title="Drake &raquo; Feed"
        href="https://wpriverthemes.com/drake/feed/" />
    <link rel="alternate" type="application/rss+xml" title="Drake &raquo; Comments Feed"
        href="https://wpriverthemes.com/drake/comments/feed/" />
   
    {/* <style>
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 0.07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style> */}
    <link rel='stylesheet' id='wp-block-library-css'
        href='https://wpriverthemes.com/drake/wp-includes/css/dist/block-library/style.min.css?ver=6.2' media='all' />
    <link rel='stylesheet' id='classic-theme-styles-css'
        href='https://wpriverthemes.com/drake/wp-includes/css/classic-themes.min.css?ver=6.2' media='all' />

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








{/* portfolio scripts */}
<Script src='https://wpriverthemes.com/drake/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.7.5.1'
        id='swv-js'></Script>
    {/* <Script id='contact-form-7-js-extra'>
        var wpcf7 = { "api": { "root": "https:\/\/wpriverthemes.com\/drake\/wp-json\/", "namespace": "contact-form-7\/v1" } };
    </Script> */}
    <Script src='https://wpriverthemes.com/drake/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.7.5.1'
        id='contact-form-7-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/jquery.js?ver=6.2'
        id='drake-jquery-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/bootstrap.bundle.min.js?ver=6.2'
        id='bootstrap-bundle-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/owl.carousel.js?ver=6.2'
        id='owl-carousel-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/gsap.min.js?ver=6.2'
        id='gsap-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/ScrollTrigger.min.js?ver=6.2'
        id='ScrollTrigger-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/ScrollToPlugin.min.js?ver=6.2'
        id='ScrollToPlugin-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/lightbox.min.js?ver=6.2'
        id='lightbox-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/main.js?ver=6.2'
        id='drake-main-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/ajax-form.js?ver=6.2'
        id='ajax-form-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/js/color.js?ver=6.2'
        id='drake-color-js'></Script>
    <Script
        src='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.11.5'
        id='elementor-webpack-runtime-js'></Script>
    <Script
        src='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.11.5'
        id='elementor-frontend-modules-js'></Script>
    <Script
        src='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2'
        id='elementor-waypoints-js'></Script>
    <Script src='https://wpriverthemes.com/drake/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2'
        id='jquery-ui-core-js'></Script>
    {/* <Script id='elementor-frontend-js-before'>
        var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "Share on Facebook", "shareOnTwitter": "Share on Twitter", "pinIt": "Pin it", "download": "Download", "downloadImage": "Download image", "fullscreen": "Fullscreen", "zoom": "Zoom", "share": "Share", "playVideo": "Play Video", "previous": "Previous", "next": "Next", "close": "Close" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "Mobile", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "Mobile Extra", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": { "label": "Tablet", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "Tablet Extra", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": { "label": "Laptop", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": { "label": "Widescreen", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.11.5", "is_static": false, "experimentalFeatures": { "e_dom_optimization": true, "e_optimized_assets_loading": true, "e_optimized_css_loading": true, "a11y_improvements": true, "additional_custom_breakpoints": true, "e_swiper_latest": true, "landing-pages": true, "kit-elements-defaults": true }, "urls": { "assets": "https:\/\/wpriverthemes.com\/drake\/wp-content\/plugins\/elementor\/assets\/" }, "swiperClass": "swiper", "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_tablet"], "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 8, "title": "Drake", "excerpt": "", "featuredImage": false } };
    </Script> */}
    <Script src='https://wpriverthemes.com/drake/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.11.5'
        id='elementor-frontend-js'></Script>

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
