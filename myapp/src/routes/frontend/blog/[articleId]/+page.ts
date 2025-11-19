import type { PageLoad } from "../$types";

export const load: PageLoad = async ({params}) => {
    console.log(params);
    
    const blogData = [
        {
            articleId: 1,
            title: "My First Post",
            content: "This is the content of my first post."
        },
        {
            articleId: 2,
            title: "My Second Post",
            content: "This is the content of my second post."
        }
    ]

    const post = blogData.find(post => post.articleId === Number(params.articleId))

    if (!post) {
        throw new Error('Post not found');
    }
    else {
        return {
            post: post
        }
    }
    
}
