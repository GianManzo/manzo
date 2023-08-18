'use client';
import { useTranslation } from '@/shared/contexts/i18n/translation.context';

export default function Home() {
  const { translate } = useTranslation();
  return <h1>{translate('header')}</h1>;
}
