import React from 'react';
import { useTranslations } from 'next-intl';
import { AGENT_INFO } from '@/constantes/agent.const';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string }
};

const LegalAndPrivacyPage: React.FC<Props> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('LegalAndPrivacy');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('termsOfService.title')}</h2>
        <p>
          {t('termsOfService.intro')}
          <br /><br />
          <strong>{t('termsOfService.serviceDescription.title')}</strong> {t('termsOfService.serviceDescription.content')}
          <br /><br />
          <strong>{t('termsOfService.userObligations.title')}</strong> {t('termsOfService.userObligations.content')}  
          <br /><br />
          <strong>{t('termsOfService.termination.title')}</strong> {t('termsOfService.termination.content')}  
          <br /><br />
          <strong>{t('termsOfService.liability.title')}</strong> {t('termsOfService.liability.content')}
          <br /><br />
          <strong>{t('termsOfService.disputeResolution.title')}</strong> {t('termsOfService.disputeResolution.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('privacyPolicy.title')}</h2>
        <p>
          {t('privacyPolicy.intro')}
          <br /><br />
          <strong>{t('privacyPolicy.dataCollection.title')}</strong> {t('privacyPolicy.dataCollection.content')}
          <br /><br />
          <strong>{t('privacyPolicy.dataUse.title')}</strong> {t('privacyPolicy.dataUse.content')}
          <br /><br />
          <strong>{t('privacyPolicy.userRights.title')}</strong> {t('privacyPolicy.userRights.content')}
          <br /><br />
          <strong>{t('privacyPolicy.securityMeasures.title')}</strong> {t('privacyPolicy.securityMeasures.content')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('cookiePolicy.title')}</h2>
        <p>{t('cookiePolicy.content')}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{t('contactInformation.title')}</h2>
        <p>
          {t('contactInformation.content')}
          <br />
          {t('name')}: {AGENT_INFO.name}
          <br />
          {t('email')}: {AGENT_INFO.email}
          <br />
          {t('phone')}: {AGENT_INFO.phone}
          <br />
          {t('address')}: {AGENT_INFO.address}
        </p>
      </section>
    </div>
  );
};

export default LegalAndPrivacyPage;