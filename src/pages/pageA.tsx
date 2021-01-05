import React from 'react';
import {useTranslation} from 'react-i18next';

export default function PageA(props: unknown) {
  const {t} = useTranslation('page-a');
  return (
    <section>
      <h3>{t('title-for-page-a')}</h3>
    </section>
  );
}
