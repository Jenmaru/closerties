import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <center>
        <h1>404 Not Found</h1>
      </center>
      <h1 className="h4 text-muted">{t('notFound.title')}</h1>
      <p className="text-muted">
        {t('notFound.feedback')}
        {' '}
        <Link to="/">{t('notFound.link')}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
