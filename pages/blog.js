import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';


function Blog(props) {
  const [blogs, setBlogs] = useState(props.allblogs);

  const fetchData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  return (
    <div className={styles.contaioner}>
      <main className={styles.main}>



        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        // below props only if you need pull down functionality
        >

        


        {blogs.map((blogItem) => {
          return <div key={blogItem.slug} className={styles.blogItem}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3></Link>
            <p className={styles.blogItemp} >{blogItem.metadesc.substr(0, 120)}...</p>
            <button className={styles.btn}>Read More</button>

          </div>
        })}
        </InfiniteScroll>

      </main>
    </div >
  )

};

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allblogs = await data.json();
  return {
    props: { allblogs }, // will be passed to the page component as props
  }
}

export default Blog