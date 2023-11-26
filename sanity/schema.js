import pageInfo from './schemas/pageInfo'
import experience from "./schemas/experience";
import skill from "./schemas/skill";
import social from "./schemas/social";
import project from "./schemas/project";

// import {createSchema} from "sanity";
// import {schemaTypes} from "@sanity"

export const schema = ({
    name: "default",
    types: [
        pageInfo,
        social,
        skill,
        experience,
        project,
    ],
});
