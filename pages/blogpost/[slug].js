import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '../../styles/BlogPost.module.css'


function slug(props) {

  function createMarkup(d) {
    return { __html: d };
  }

  const [blog, setBlog] = useState(props.myBlogs);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>

          <h1>{blog && blog.title}</h1>

          <hr />

          {blog && <div dangerouslySetInnerHTML={createMarkup(blog.description)}></div>}


        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {


  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlogs = await data.json();

  return {
    props: { myBlogs }, // will be passed to the page component as props
  }
}

export default slug;
