import { useRouter } from 'next/router';

const blogPostsPage = () => {
    const router = useRouter();
    const nameArray = router.query.slug;
    console.log(nameArray)

    return (
        <div>
            <p>
                This is the blog posts page!
            </p>
        </div>
    )
}

export default blogPostsPage;