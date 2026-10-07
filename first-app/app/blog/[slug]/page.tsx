interface BlogPageProps {
    params:  {
        slug: string;
    }
}

const blogData : Record<string, {title: string, content: string}> = {
    "nextjs":  {
        title:"NextJs Basic",
        content: "Nextjs is a react framwork for production."
    },    
    "react":  {
        title:"React Basic",
        content: "react."
    },    
    "node":  {
        title:"Node Basic",
        content: "Node ."
    },


}

export  default async function BlogDetailsPage({params} : BlogPageProps) {
    const {slug} = await params;

    const blog = blogData[slug];

    if(!blog){
        return <h1>Blog not found</h1>
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>
                Slug URL: {slug}
            </p>
        </div>
    )

}