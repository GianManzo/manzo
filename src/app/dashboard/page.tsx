'use client';

import { useTranslation } from '@/shared/contexts/i18n/translation.context';

export default function Dashboard() {
  const { translate } = useTranslation();
  return <h1 style={{ color: 'red' }}>{translate('header')}</h1>;
}
