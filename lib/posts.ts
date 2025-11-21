import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import DOMPurify from "isomorphic-dompurify";


// ✅ 投稿データの型を定義
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

// ✅ すべての投稿のメタデータを取得（ブログ一覧用）
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
    };
  });
}

// ✅ 個別投稿を取得（詳細ページ用）
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)        // Markdown -> HTML AST
    .use(rehypeHighlight)     // コードハイライト（highlight.js）
    .use(rehypeStringify)     // AST -> HTML
    .process(content);

  let contentHtml = processedContent.toString();

  // サニタイズして安全にする（isomorphic-dompurifyを使用）
  contentHtml = DOMPurify.sanitize(contentHtml);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    contentHtml,
  };
}
