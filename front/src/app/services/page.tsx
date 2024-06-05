import React from 'react'
import TheFuture from '@/components/theFuture/TheFuture'
import TheYears from '@/components/theYears/TheYears'
import TheFeatured from '@/components/theFeatured/TheFeatured'
import TheRequest from '@/components/theRequest/TheRequest'
import TheComments from '@/components/TheComments/TheComments'
import styles from '../styles/services/Services.module.scss'
import ThePrice from "@/components/thePrice/ThePrice";
import TheServikesOne from "@/components/theServikesOne/TheServikesOne";
import TheServikestwo from "@/components/theServikesTwo/TheServikestwo";
import TheText from "@/components/theText/TheText";

const Services = () => {
    return (
        <>
            <section className={styles.wrapperFuture}>
                <TheServikesOne />
            </section>
            <section className={styles.wrapperYears}>
                <TheServikestwo />
            </section>
            <section className={styles.wrapperText}>
                <TheText />
            </section>
            <section className={styles.wrapperRequest}>
                <TheRequest />
            </section>
        </>
    )
}

export default Services