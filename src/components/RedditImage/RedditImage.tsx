import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, DATA_LIMIT } from "../../utils/constants";
import { IRedditPost } from "../../utils/types";
import Shimmer from "../Shimmer";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
  Tooltip,
} from "@mui/material";
import "./redditimage.css";

const RedditImage = () => {
  const [posts, setPosts] = useState([] as IRedditPost[]);
  const [after, setAfter] = useState("");
  const [page, setPage] = useState<number>(1);
  const [disableNext, setDisableNext] = useState<boolean>(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?after=${after}&limit=${DATA_LIMIT}`
      );
      const postData = response.data.data.children.map((child: any) => ({
        title: child.data.title,
        url: child.data.url,
      }));
      setPosts(postData);
      setAfter(response.data.data.after); //Update the value of 'after' for pagination
      setDisableNext(!response.data.data.after); // Disable next button if no more posts available
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchPosts();
    }, 500);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [page]);
  return posts.length === 0 ? (
    <Shimmer />
  ) : (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Most Beautiful Subreddit
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post: IRedditPost, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="card-container">
              <CardMedia
                component="img"
                height="200"
                image={
                  post.url.includes("jpeg")
                    ? post.url
                    : "https://preview.redd.it/5v05d3a5fxmc1.jpg?width=960&crop=smart&auto=webp&s=d2e7b12f3351448b1c686e14bdd18006eb6ca47e"
                }
                alt={post.title}
              />
              <Tooltip title={post.title} arrow placement="top">
                <CardContent className="image-container">
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>
                </CardContent>
              </Tooltip>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="pagination-page">Page {page}</span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default RedditImage;
