import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "0mbpdxuy",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-17",
    useCdn: process.env.NODE_ENV === "production",
}


export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-17'

export const dataset = "production";
export const projectId = "0mbpdxuy";


export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
    createImageUrlBuilder(config).image(source);