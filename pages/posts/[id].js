import axios from "axios";
import Head from "next/head";
import { Fragment } from "react";
import Link from "next/link";


const Post = ({ user }) => {


    return (
        <Fragment>
            <Head>
                <title>{user.name}</title>
            </Head>
            <ul>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.website}</li>
            </ul>
            <Link href="/posts/first-post"><h2>Back</h2></Link>
        </Fragment>
        
    )
}


export async function getServerSideProps({ params }) {
    try{
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        console.log(data)
        
        return {
          props: {
            user: data
          }
        };
    }catch(err){
        return {
            notFound: true, // A felhasználó nem található, 404-es hiba oldal jelenik meg
          };
    }

  }

  
/*
  export async function getStaticPaths() {
    
    return {
      paths: [
        {
            params: {
                id: "1"
            }
        },
        {
            params: {
                id: "2"
            }
        },
        {
            params: {
                id: "3"
            }
        },
        {
            params: {
                id: "4"
            }
        },
        {
            params: {
                id: "5"
            }
        },
        {
            params: {
                id: "6"
            }
        },
        {
            params: {
                id: "7"
            }
        },
        {
            params: {
                id: "8"
            }
        },
        {
            params: {
                id: "9"
            }
        },
        {
            params: {
                id: "10"
            }
        },

      ],
      fallback: false,
    };
  }

  */
export default Post