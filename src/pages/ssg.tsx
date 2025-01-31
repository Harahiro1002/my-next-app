import texts from "@/../public/locales/ja.json";
import { Post } from "@/types/post";

type Props = {
    data: Post;
  };

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data: Post = await res.json();

    return { props: { data } };
}

export default function SSGPage({ data }: Props){
    return (
        <div>
            <h1>
                {texts.ssg.title}
            </h1>
            <p>
                {data.title}
            </p>
        </div>
    );
}