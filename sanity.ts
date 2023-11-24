import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "41cl0mts",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-21",
    useCdn: process.env.NODE_ENV === "production",
}


export const apiVersion = '2023-11-21'

export const dataset = "production";
export const projectId = "41cl0mts";



export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);