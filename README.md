<a href="https://project4-yumyumbites-8cohx7mup-tanakorntree.vercel.app/">
    <img src="https://i.ibb.co/nBfJyNh/Screen-Shot-2023-05-25-at-9-16-19-pm.png" alt="YumYumBites logo" title="YumYumBites" align="right" height="50" />
</a>

# :taco: YumYumBites

Welcome to [YumYumBites](https://project4-yumyumbites-8cohx7mup-tanakorntree.vercel.app/), your go-to source for food and restaurant content in Sydney! Discover the best culinary spots, mouthwatering reviews, and insider tips as we guide you through Sydney's vibrant dining scene. From trendy cafes to hidden gems, indulge your taste buds with YumYumBites!

## Built with
- React.js
- Next.js
- Tailwind CSS
- Hygraph (GraphQL) for backend
- Deploy on Vercel

<a href="https://gifyu.com/image/Suzoc">
  <img src="https://s11.gifyu.com/images/Untitled-design51d4ddf6724cda22.gif" alt="Untitled-design51d4ddf6724cda22.gif" border="0" />
</a>

### Snapshot
<div>
  <p>The site</p>
  <img src="https://i.ibb.co/8gmNTVc/Screen-Shot-2023-05-26-at-12-28-13-am.png" alt="Screen-Shot-2023-05-26-at-12-28-13-am" border="0" height="auto">
  <p>Mobile version</p>
  <img src="https://i.ibb.co/wJ1qmP1/Screen-Shot-2023-05-26-at-12-29-35-am.png" alt="Screen-Shot-2023-05-26-at-12-29-35-am" border="0" height="auto">
</div>

---
## :bell: Put it all together

### :bulb: Features:
- Add comment for the blog and ability to save a name and an email in the browser for the next time comment.
- Show prior comments in for the blogs.
- Article category for food and restaurant for side bar and nav bar.
- Carousel component to show all contents.
- Mobile friendly website.

Note: About adding article and author, still use hygraph interface to directly put it into database.

### :spiral_calendar: Challenges:
- Tailwind dependency and how to setup. There are version differences using purge: and content: which impact tailwind usage for the application. 
After moved from purge to content, the code is as below.
    
    ```JavaScript
       /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./app/**/*.{js,ts,jsx,tsx}",
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",

          // Or if using `src` directory:
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    ```
- Carousel component design - It was hard to make desicion among the packages or pre-set components from tailwind. Then, the decision was made using 'react-multi-carousel' package as it matched the planned design.
     
     ```JavaScript
      import Carousel from 'react-multi-carousel';
      import 'react-multi-carousel/lib/styles.css';
     ```
     For FeaturedPosts component (Carousel), the return from the component are as below using the package.
     
     ```JavaScript
       return (
        <div className="mb-8">
          <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
            {dataLoaded && featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
          </Carousel>
        </div>
      );
     ```
- Schema design and connection was hard to manage as it is always confusing. The hardest thing was the detail inside post which comprises of:
   - Title, Slug, Excerpt, Content, Featured Image, Featured Post, Author, Categories, and Comment.
   - The schema design includes Author, Category, Comment, Post.
  <br>
  <a href="https://ibb.co/6rdRf4y">
      <img src="https://i.ibb.co/5G7Wf51/Screen-Shot-2023-05-25-at-11-39-52-pm.png" alt="Screen-Shot-2023-05-25-at-11-39-52-pm"  border="0" height="auto" />
  </a>

### :book: Lession:
- It is hard to properly design schema in one go and expect it to cover all needs.
- You can face dilemma or paradox of choice in term of package or pre-built components to use.
- Choosing right database provider is hard and also time consuming. I choose this graphql as I would like to try this.

### :bookmark: Future updates:
- Create user / author log-in, sign-up and sign-out.
- Create CRUD interfaces for authors and also users to add comments, create articles, and manage comments visibility.
- Manage navbar properly in order to manage more categories.
- Implement a text editor: Integrate a rich text editor into the application.
- Enable image uploading: Configure the text editor's image upload functionality.
