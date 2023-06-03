import axios from "axios"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import HomeContainer from "../../components/layouts/HomeContainer"

const FirstPost = ({ users }) => {


    return (
        <HomeContainer>
            <Head>
                <title>first-post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <ul>
                {users.map(user => (
                    <Link href={`/posts/${user.id}`} key={user.id}><li>{user.name}</li></Link>
                ))}
            </ul>
            
        </HomeContainer>
        
    )
}



export const getStaticProps = async () => {
    
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log("run")

    return {
      props: {
        users: data
      },
    };
}

export default FirstPost
