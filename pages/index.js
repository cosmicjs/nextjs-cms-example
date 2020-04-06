const api = require('cosmicjs')();
const bucket = api.bucket({
  slug: 'simple-react-blog',
  read_key: '' // Find this in Bucket > Settings > API Access after logging in https://app.cosmicjs.com/login
})
export async function getStaticProps() {
  const post = (await bucket.getObject({
    slug: 'a-wonderful-blog-post-about-earth'
  })).object
  return {
    props: {
      post
    }
  }
}
const Post = ({ post }) => (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
    <h1>
      { post.title }
    </h1>
    <img style={{ width: `100%`}} src={`${post.metadata.hero.imgix_url}?w=1000`} />
    <div dangerouslySetInnerHTML={{ __html: post.content }}/>
  </div>
)
export default Post
