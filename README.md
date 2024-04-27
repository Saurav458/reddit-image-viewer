# Reddit Image Viewer

This is a React application that fetches images from the MostBeautiful subreddit on Reddit and displays them along with their titles. The application supports pagination to navigate through multiple pages of images.

## Features

1.Fetches images from the MostBeautiful subreddit on Reddit.
2.Displays images along with their titles on the home page.
3.Implements pagination functionality to navigate through multiple pages of images (next and previous).
4.Styled using Material-UI for enhanced visual appeal.

## Installation

1. Clone the repository to your local machine:

```bash

git clone https://github.com/your-username/reddit-image-viewer.git
cd reddit-image-viewer
npm install

Start the development server:

npm start

How to Use

1.On the home page, you will see a grid of images fetched from the MostBeautiful subreddit.
2.You can navigate between pages using the "Previous" and "Next" buttons below the grid.
3.Each page displays up to 10 images.
4.Clicking on the "Previous" button will take you to the previous page, and clicking on the "Next" button will take 5.5.you to the next page.
6.If there are no more images to display (i.e., you have reached the end of the available data), the "Next" button will be disabled.

# Technologies Used

.React
.Typescript
.Material U.I as a library 
.Axios

# Shimmer U.I- I've created a shimmer UI that remains visible to users until the data is fetched from the server. This enhances the user experience by providing a visually appealing loading animation while waiting for the interactive content to load on the website.

# TestCases
I've attempted to write test cases for the RedditImage component, but the tests are failing. I'll revisit them later to troubleshoot and make the necessary corrections.

# Debouncing

In the RedditImage component, we utilize debouncing to optimize the API call triggered by the pagination functionality.I have delayed api calling by  500ms
