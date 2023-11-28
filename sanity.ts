import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-28",
    useCdn: process.env.NODE_ENV === "production",
}


export const apiVersion = '2023-11-28'

export const dataset = "production";
export const projectId = "lskhcty1";



export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);