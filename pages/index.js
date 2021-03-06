import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Contacts from "../components/contacts";
import Bubble from "../components/bubble";


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Aleks Kuznetsov</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Aleks Kuznetsov
                </h1>

                <p className={styles.description}>
                    {/*Get started by editing{' '}*/}
                    {/*<code className={styles.code}>pages/index.js</code>*/}
                    Contact me via <Contacts />

                </p>
                <h3 className={styles.subtitle}> Personal Projects</h3>
                <div className={styles.grid}>
                    <a href="https://visas.digital" className={styles.card}>
                        <h3>
                            <img src="/visas.png" alt="Visas Digital Logo" className={styles.logo}/>
                            <span> &nbsp;Visas Digital </span>
                        </h3>
                        <p>Manage your travel documents and get new visas at ease</p>
                    </a>

                    <a href="https://wish.surf" className={styles.card}>
                        <h3><img src="/surf.png" alt="Wish Surf Logo" className={styles.logo}/> &nbsp; Wish Surf
                        </h3>
                        <p>Don't limit your wishes to purchases, dream wider!</p>
                    </a>

                    {/*<a*/}
                    {/*    href="https://github.com/vercel/next.js/tree/master/examples"*/}
                    {/*    className={styles.card}*/}
                    {/*>*/}
                    {/*    <h3>Examples &rarr;</h3>*/}
                    {/*    <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
                    {/*</a>*/}

                    {/*<a*/}
                    {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
                    {/*    className={styles.card}*/}
                    {/*>*/}
                    {/*    <h3>Deploy &rarr;</h3>*/}
                    {/*    <p>*/}
                    {/*        Instantly deploy your Next.js site to a public URL with Vercel.*/}
                    {/*    </p>*/}
                    {/*</a>*/}
                </div>
                <h3 className={styles.subtitle}> Skills</h3>
                {/*<div className={styles.grid}>*/}
                {/*    {Bubble('Python', true)}*/}
                {/*    {Bubble('Vue.JS', true)}*/}
                {/*    {Bubble('Docker', true)}*/}
                {/*    {Bubble('AWS', true)}*/}
                {/*</div>*/}
                <div className={styles.grid}>
                    {Bubble('Python')}
                    {Bubble('Vue.JS')}
                    {Bubble('Docker')}
                    {Bubble('TypeScript')}
                    {Bubble('TypeScript')}
                    {Bubble('TypeScript')}
                    {Bubble('TypeScript')}
                    {Bubble('AWS')}
                    {Bubble('AWS')}
                </div>
                {/*<div className={styles.grid}>*/}
                {/*    {Bubble('Python', true)}*/}
                {/*    {Bubble('Vue.JS', true)}*/}
                {/*    {Bubble('Docker', true)}*/}
                {/*    {Bubble('AWS', true)}*/}
                {/*</div>*/}

                <h3 className={styles.subtitle}> Work Experience</h3>
                <div className={styles.grid}>
                    <a href="https://visas.digital" className={styles.card}>
                        <h3>
                            <img src="/visas.png" alt="Visas Digital Logo" className={styles.logo}/>
                            <span> &nbsp;Visas Digital &rarr;</span>
                        </h3>
                        <p>Manage your travel documents and get new visas at ease</p>
                    </a>

                    <a href="https://wish.surf" className={styles.card}>
                        <h3><img src="/surf.png" alt="Wish Surf Logo" className={styles.logo}/> &nbsp; Wish Surf
                        </h3>
                        <p>Don't limit your wishes to purchases, dream wider!</p>
                    </a>
                </div>
                <h3 className={styles.subtitle}> Education</h3>
                <div className={styles.grid}>
                    <a href="https://www.qmul.ac.uk/" className={styles.card}>
                        <h3>
                            <img src="/qmul.png" alt="Queen Mary University of London Logo" className={styles.logo}/>
                            <span> &nbsp;Queen Mary University of London</span>
                        </h3>

                        <p>2015-2018</p>
                    </a>

                    <a href="https://www.mpw.ac.uk/" className={styles.card}>
                        <h3><img src="/mpw.jpg" alt="Mander Portman Woodward Logo" className={styles.logo}/>
                            <span> &nbsp; Mander Portman Woodward</span>
                        </h3>
                        <p>2013-2015</p>
                    </a>
                    <a href="https://www.windermereschool.co.uk/" className={styles.card}>
                        <h3>
                            <img src="/windermere.png" alt="Windermere School Logo" className={styles.logo}/>
                            <span> &nbsp;Windermere School</span>
                        </h3>
                        <p>2012-2013</p>
                    </a>

                    <a href="http://www.chastnayashkola.ru/" className={styles.card}>
                        <h3><img src="/lomonosov.jpg" alt="Mander Portman Woodward Logo" className={styles.logo}/>
                            <span> &nbsp; Private Lomonosov School</span>
                        </h3>
                        <p>2003-2014</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
            <Contacts />
            </footer>
        </div>
    )
}
