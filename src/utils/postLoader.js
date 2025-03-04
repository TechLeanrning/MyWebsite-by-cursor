import matter from 'gray-matter'

// 加载本地 Markdown 文章
export async function loadPosts() {
  try {
    const posts = []
    
    // 从服务器获取文章列表
    const response = await fetch('/posts/index.json')
    const data = await response.json()
    const postList = data.posts  // 获取 posts 数组
    
    // 加载每篇文章的内容
    for (const postInfo of postList) {
      try {
        const contentResponse = await fetch(`/posts/${postInfo.id}.md`)
        const content = await contentResponse.text()
        
        posts.push({
          ...postInfo,
          content
        })
      } catch (error) {
        console.error(`Error loading post ${postInfo.id}:`, error)
      }
    }

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
}

// 计算阅读时间
function calculateReadTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/g).length
  return Math.ceil(wordCount / wordsPerMinute)
} 