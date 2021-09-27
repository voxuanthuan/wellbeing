import '../i18n';
import { AppStateProvider } from '../context';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function MyApp({Component, pageProps}) {
    return (
        <AppStateProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </AppStateProvider>)
}