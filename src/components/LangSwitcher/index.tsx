import { Icon } from '@iconify/react/dist/iconify.js';
import useLang from '@src/hooks/useLang';
import { useTranslation } from 'react-i18next';

function LangSwitcher() {
  const { t, i18n } = useTranslation();
  const { changeLang } = useLang();
  return (
    <button
      className=" flex justify-center items-center gap-2 bg-secondary text-white p-2 rounded-md"
      onClick={() => changeLang(i18n.language == 'ar' ? 'en' : 'ar')}
    >
      <Icon icon="mdi-flag" className=" text-white" />
      {t('changeLang')}
    </button>
  );
}

export default LangSwitcher;
