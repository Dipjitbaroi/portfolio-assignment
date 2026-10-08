import { useSanityClient, groq} from '../../client'
export async function getAbouts (){
    const query = groq`*[_type == "abouts"]`;
    const firstPost = await useSanityClient().fetch(query);
    return firstPost;
}