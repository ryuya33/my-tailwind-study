// lib/microcms.ts
import { createClient } from "microcms-js-sdk";

// microCMSの画像型
export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

// microCMSのカテゴリ型
export type Category = {
  id: string;
  name: string;
};

// ① ブログ記事の型定義（あなたの設定したフィールドIDに合わせました）
export type Post = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content: string;
  eyecatch?: MicroCMSImage;
  publishedAt: string;
  category: Category;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY must be set.");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 記事一覧を取得
export async function getAllPosts(): Promise<Post[]> {
  const data = await client.getList<Post>({
    endpoint: "blogs",
    queries: {
      limit: 100,
      orders: "-publishedAt",
      // 必要なフィールドのみ取得
      fields: "id,title,slug,description,eyecatch,category,publishedAt",
    },
  });

  return data.contents;
}

// slug から記事詳細を取得
export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await client.getList<Post>({
    endpoint: "blogs",
    queries: {
      filters: `slug[equals]${slug}`,
      // 詳細ページでは本文(content)も必要なので含めます
    },
  });

  if (data.contents.length === 0) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return data.contents[0];
}
