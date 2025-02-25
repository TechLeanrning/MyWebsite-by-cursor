import matter from 'gray-matter'

// 加载本地 Markdown 文章
export async function loadPosts() {
  try {
    const posts = []
    
    // 确保路径正确
    let markdownFiles
    try {
      markdownFiles = require.context('../posts', false, /\.md$/)
      console.log('Looking in ../posts:', markdownFiles.keys())
    } catch (e) {
      console.error('Error loading context:', e)
      return []
    }
    
    if (!markdownFiles.keys().length) {
      console.warn('No markdown files found')
      return []
    }

    for (const key of markdownFiles.keys()) {
      try {
        const fileName = key.replace('./', '').replace('.md', '')
        console.log('Processing file:', fileName)
        let fileContent = markdownFiles(key)
        
        // 处理 raw-loader 返回的内容
        if (typeof fileContent === 'object' && fileContent.__esModule) {
          fileContent = fileContent.default
        }
        
        if (!fileContent || typeof fileContent !== 'string') {
          console.error(`Invalid content for file: ${key}`, typeof fileContent)
          continue
        }
        
        console.log('File content type:', typeof fileContent)
        console.log('File content preview:', fileContent.substring(0, 100))
        
        const { data, content } = matter(fileContent)
        console.log('Parsed frontmatter:', data)
        
        posts.push({
          id: fileName,
          title: data.title || 'Untitled',
          date: data.date || new Date(),
          category: data.category || 'Uncategorized',
          tags: data.tags || [],
          excerpt: data.excerpt || '',
          coverImage: data.coverImage || '/images/posts/default.jpg',
          readTime: calculateReadTime(content),
          content
        })
      } catch (error) {
        console.error(`Error processing ${key}:`, error)
      }
    }

    console.log('Successfully loaded posts:', posts)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error in loadPosts:', error)
    return []
  }
}

// 计算阅读时间
function calculateReadTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/g).length
  return Math.ceil(wordCount / wordsPerMinute)
} 