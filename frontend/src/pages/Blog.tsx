import { BlogCard } from "../components/BlogCard"
export const Blog=()=> {
  return (
    <div>
      <BlogCard
        authorName={"Tushar"}
        title={"Blog1"}
        content={"This is the first blog"}
        publishDate={"10th May 2024"}
      />
    </div>
  )
}
