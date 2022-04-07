import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';

import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout';
import DisplayItem from '../components/DisplayItem';

import avatar from '../../public/img/avatar.jpg';

import Instagram from '../../public/img/instagram-svg.js';
import Book from '../../public/img/book-svg.js';
import Ebook from '../../public/img/ebook-svg.js';
import Heart from '../../public/img/heart-svg.js';
import Download from '../../public/img/download-svg.js';


import styles from '../styles/Home.module.css'
import 'react-toastify/dist/ReactToastify.css';
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

const pdfUrl = '/pdf/test.pdf'

export default function Home() {

    return (

        <Layout navbar={false}>
            <Head>
                <title> @plant.zila | Enlaces</title>
                <meta name="description" content="Soy @plant.zila y aquí puedes encontrar todos mis enlaces. :)"></meta>
            </Head>

            <div className={styles.container}>

                <div className={styles.header}>
                    <div className={styles.header_img}>
                        <Image
                            src={avatar}
                            alt="Logo"
                            title="Logo"
                        />
                    </div>

                    <div className={styles.header_title}>
                        @Plant.zila
                    </div>
                    <div className={styles.header_text}>
                        Soy Plant.zila y me gustan las plantas y no sé qué de plantas.
                    </div>
                </div>

                <div className={styles.social_container}>
                    <a
                        className={styles.social_icon}
                        href="https://instagram.com/plant.zila"
                        target='blank'
                    >
                        <Instagram width={65} height={65} />
                    </a>
                </div>

                <div className={styles.buttons_container}>

                    <DisplayItem
                        text={"Descarga gratis «El cultivo del philodendron baby»"}
                        svg={<Download width={40} height={40} />}
                        link={"https://mailchi.mp/9cd90d6cbad6/philodendronbaby"}
                    />

                    <DisplayItem
                        text={"Hazte con «El lenguaje de las plantas baby» (edición en papel)"}
                        svg={<Book width={40} height={40} />}
                        link={"http://p.wallapop.com/p/45847027?_pid=wi&_uid=45847027"}
                    />

                    {/* <DisplayItem
                        text="Hazte con «El lenguaje de las plantas baby» (edición digital)"
                        svg={<Ebook width={40} height={40} />}
                    /> */}

                    <DisplayItem
                        text={"Apoya mi contenido"}
                        svg={<Heart width={40} height={40} />}
                        // deeppink, magenta
                        iconColor='Green'
                        link={"https://ko-fi.com/plantzila"}
                        className={styles.last}
                    />

                </div>




            </div>
            <ToastContainer />

        </Layout>
    );
}