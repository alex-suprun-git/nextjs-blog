import { TypedObject } from '@sanity/types';

export type SanityCategory = {
  title?: string;
  description?: string;
  totalPosts: any;
};

export type SanityPostMeta = {
  title: string;
  previewText: string;
};

type SanityPostBase = {
  title: string;
  category: {
    title: string;
    url: string;
  };
  slug: string;
  image: {
    url: string;
    alt?: string;
  };
  publishedAt: string;
};

export type SanityPostPreview = SanityPostBase & {
  previewText: string;
};

export type SanityPost = SanityPostBase & {
  headings: any[];
  previewText: string;
  content: TypedObject;
};

export type FeedbackFormData = {
  name: string;
  email: string;
  message: string;
};

export type CommentFormData = {
  commentName: string;
  commentEmail: string;
  commentText: string;
};

export type SanityPage = {
  title: string;
  _key: string;
  slug: string;
  publishedAt: string;
  description: string;
  pageBuilder: any[];
};
