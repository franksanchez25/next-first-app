import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Pricing metadata',
 description: 'Pricing metadata',
 keywords:['princing','price', 'products']
};
export default function PricingPage () {

    return(
        <>
        <span className=" text-5xl">Pricing</span>
        </>
    )

}