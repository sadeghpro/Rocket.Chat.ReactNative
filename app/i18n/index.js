import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';

export * from './isRTL';

export const LANGUAGES = [
	{
		label: 'فارسی',
		value: 'fa',
		file: require('./locales/fa').default
	},
	{
		label: 'English',
		value: 'en',
		file: require('./locales/en').default
	}
];

const translations = LANGUAGES.reduce((ret, item) => {
	ret[item.value] = item.file;
	return ret;
}, {});

i18n.translations = translations;
i18n.fallbacks = true;

const defaultLanguage = { languageTag: 'fa', isRTL: true };
const availableLanguages = Object.keys(i18n.translations);
const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(availableLanguages) || defaultLanguage;

I18nManager.forceRTL(isRTL);
I18nManager.swapLeftAndRightInRTL(isRTL);
i18n.locale = languageTag;
i18n.isRTL = I18nManager.isRTL;

export default i18n;
