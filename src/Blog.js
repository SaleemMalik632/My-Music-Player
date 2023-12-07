// BlogPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('blog.title')}</h1>
      <p>{t('blog.intro')}</p>

      <div>
        <h2>{t('blog.knn.title')}</h2>
        <p>{t('blog.knn.content')}</p>
      </div>
    </div>
  );
};

export default BlogPage;
