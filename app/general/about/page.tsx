
import type { Metadata } from "next";



export const metadata: Metadata = {
 title: 'About meta data',
 description: 'About meta data',
 keywords:['About', 'pages', 'info']
};

export default function AboutPage()  {
  return (
    <>
    <span className=" text-7xl">About</span>
    </>
  )
}
