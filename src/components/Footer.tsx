import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
      <p className="text-xs text-gray-400">{t('footer.copyright')}</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-200" href="#">
          {t('footer.termsOfService')}
        </a>
        <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-200" href="#">
          {t('footer.privacy')}
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
