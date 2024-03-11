import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

  const BlogPostsArray = [
    {
      id: '123-123',
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    {
      id: '456-456',
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    }
  ];

export function Posts()
{
     return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">Blog</h2>
            <Outlet/>

        </div>
    );
}

export function PostLists() {
    return (
      <ul>
        {BlogPostsArray.map((item) => (
          <li key={item.id}>
            <Link to={`/posts/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

export function Post() {
    const { id } = useParams();
    const post = BlogPostsArray.find((item) => item.id === id);
    if(!post) {
      return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = post;
    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }