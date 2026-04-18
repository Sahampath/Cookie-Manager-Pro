// Multi-language translations
const translations = {
    en: {
        appTitle: '🍪 Cookie Manager Pro',
        langLabel: '🇸🇱 Language:',
        cookieCountLabel: 'Total Cookies:',
        siteCookieCountLabel: 'Site Cookies:',
        getSiteBtnText: 'Refresh Site Cookies',
        exportSiteBtnText: 'Export Site Cookies',
        importSiteBtnText: 'Import Site Cookies',
        clearSiteBtnText: 'Clear Site Cookies',
        exportAllBtnText: 'Export All Cookies',
        importAllBtnText: 'Import All Cookies',
        manualJsonBtnText: 'Manual Add JSON',
        cookiesListTitle: 'Cookies for current site:',
        exportSuccess: '✓ Cookies exported successfully!',
        exportError: '✗ Failed to export cookies',
        importConfirm: '⚠️ Import will replace ALL existing cookies. Continue?',
        importSiteConfirm: '⚠️ Import will replace ALL cookies for this site only. Continue?',
        clearSiteConfirm: '⚠️ This will delete ALL cookies for this site. Continue?',
        importSuccess: '✓ Cookies imported successfully! {count} cookies replaced.',
        importSiteSuccess: '✓ Site cookies imported successfully! {count} cookies replaced.',
        clearSiteSuccess: '✓ All cookies for this site have been cleared.',
        importError: '✗ Failed to import cookies',
        invalidJSON: '✗ Invalid JSON file format',
        invalidJsonFormat: '✗ Invalid JSON format. Expected array of cookie objects.',
        manualImportSuccess: '✓ Successfully imported {count} cookies from manual JSON.',
        manualJsonTitle: 'Paste Cookie JSON Array:',
        manualImportSiteText: 'Import as Site Cookies',
        manualImportAllText: 'Import as All Cookies',
        manualCancelText: 'Cancel',
        loading: 'Loading...',
        processing: 'Processing...',
        noCookies: 'No cookies found for this site',
        siteCookiesLoaded: 'Loaded {count} cookies for current site',
        cannotAccess: 'Cannot access cookies for browser internal pages'
    },
    si: {
        appTitle: '🍪 කුකීස් කළමනාකරු',
        langLabel: 'භාෂාව:',
        cookieCountLabel: 'සම්පූර්ණ කුකීස්:',
        siteCookieCountLabel: 'වත්මන් වෙබ් අඩවියට අදාල කුකීස්:',
        getSiteBtnText: 'වෙබ් අඩවි කුකීස් නැවත ලබා ගන්න',
        exportSiteBtnText: 'වෙබ් අඩවි කුකීස් බාගත කරන්න',
        importSiteBtnText: 'වෙබ් අඩවි කුකීස් ඇතුලත් කරන්න',
        clearSiteBtnText: 'වෙබ් අඩවි කුකීස් මකන්න',
        exportAllBtnText: 'සියලුම කුකීස් බාගත කරන්න',
        importAllBtnText: 'සියලුම කුකීස් ඇතුලත් කරන්න',
        manualJsonBtnText: 'JSON අතින් එකතු කරන්න',
        cookiesListTitle: 'වත්මන් වෙබ් අඩවියේ කුකීස්:',
        exportSuccess: '✓ කුකීස් සාර්ථකව අර්තුලත් කරන ලදි!',
        exportError: '✗ කුකීස් ඇතුලත් කිරීම අසාර්ථකයි',
        importConfirm: '⚠️ ඇතුලත් කිරීමෙන් සියලුම පවතින කුකීස් ප්‍රතිස්ථාපනය කරයි. කරුණාකර තහවුරු කරන්න?',
        importSiteConfirm: '⚠️ ඇතුලත් කිරීමෙන් මෙම වෙබ් අඩවියේ සියලුම කුකීස් ප්‍රතිස්ථාපනය කරයි. කරුණාකර තහවුරු කරන්න?',
        clearSiteConfirm: '⚠️ මෙම වෙබ් අඩවියේ සියලුම කුකීස් ස්ථිරවම ඉවත් කෙරෙනු ඇත. කරුණාකර තහවුරු කරන්න?',
        importSuccess: '✓ කුකීස් සාර්ථකව ඇතුලත් කරන ලදි! කුකීස් {count} ක් ප්‍රතිස්ථාපනය විය.',
        importSiteSuccess: '✓ වෙබ් අඩවි කුකීස් සාර්ථකව ඇතුලත් කරන ලදි! කුකීස් {count} ක් ප්‍රතිස්ථාපනය විය.',
        clearSiteSuccess: '✓ මෙම වෙබ් අඩවියේ සියලුම කුකීස් ඉවත් කරන ලදි.',
        importError: '✗ කුකීස් ඇතුලත් කිරීම අසාර්ථකයි',
        invalidJSON: '✗ වලංගු නොවන JSON ගොනු ආකෘතියකි',
        invalidJsonFormat: '✗ වලංගු නොවන JSON ගොනු ආකෘතියකි.',
        manualImportSuccess: '✓ JSON ගොනුව වෙතින් කුකීස් {count} සාර්ථකව ඇතුලත් කරන ලදි.',
        manualJsonTitle: 'කුකිස්  ගොනුව මෙතැනින් එකතු කරන්න:',
        manualImportSiteText: 'වත්මන් වෙබ් අඩවි කුකීස් ලෙස ඇතුලත් කරන්න',
        manualImportAllText: 'සියලු කුකීස් ලෙස ඇතුලත් කරන්න',
        manualCancelText: 'අවලංගු කරන්න',
        loading: 'සම්පූර්ණ වෙමින් පවති...',
        processing: 'සැකසෙමින් පවති...',
        noCookies: 'මෙම වෙබ් අඩවිය සඳහා කුකීස් හමු නොවීය',
        siteCookiesLoaded: 'වත්මන් වෙබ් අඩවිය සඳහා කුකීස් {count} ක් සම්පූර්ණ කරන ලදි',
        cannotAccess: 'බ්‍රවුසර අභ්‍යන්තර පිටු සඳහා කුකීස් වෙත ප්‍රවේශ විය නොහැක'
    },
    ja: {
        appTitle: '🍪 クッキーマネージャープロ',
        langLabel: '言語:',
        cookieCountLabel: '総クッキー数:',
        siteCookieCountLabel: 'サイトのクッキー:',
        getSiteBtnText: 'サイトクッキーを再読み込み',
        exportSiteBtnText: 'サイトクッキーをエクスポート',
        importSiteBtnText: 'サイトクッキーをインポート',
        clearSiteBtnText: 'サイトクッキーを削除',
        exportAllBtnText: '全クッキーをエクスポート',
        importAllBtnText: '全クッキーをインポート',
        manualJsonBtnText: 'JSONを手動追加',
        cookiesListTitle: '現在のサイトのクッキー:',
        exportSuccess: '✓ クッキーのエクスポートに成功しました！',
        exportError: '✗ クッキーのエクスポートに失敗しました',
        importConfirm: '⚠️ インポートすると既存の全クッキーが置き換えられます。続行しますか？',
        importSiteConfirm: '⚠️ インポートするとこのサイトの全クッキーが置き換えられます。続行しますか？',
        clearSiteConfirm: '⚠️ このサイトの全クッキーを削除します。続行しますか？',
        importSuccess: '✓ クッキーのインポートに成功しました！{count}個のクッキーを置き換えました。',
        importSiteSuccess: '✓ サイトクッキーのインポートに成功しました！{count}個のクッキーを置き換えました。',
        clearSiteSuccess: '✓ このサイトの全クッキーを削除しました。',
        importError: '✗ クッキーのインポートに失敗しました',
        invalidJSON: '✗ 無効なJSONファイル形式です',
        invalidJsonFormat: '✗ 無効なJSON形式です。クッキーオブジェクトの配列が必要です。',
        manualImportSuccess: '✓ 手動JSONから{count}個のクッキーを正常にインポートしました。',
        manualJsonTitle: 'クッキーJSON配列を貼り付け:',
        manualImportSiteText: 'サイトクッキーとしてインポート',
        manualImportAllText: '全クッキーとしてインポート',
        manualCancelText: 'キャンセル',
        loading: '読み込み中...',
        processing: '処理中...',
        noCookies: 'このサイトのクッキーは見つかりません',
        siteCookiesLoaded: '現在のサイトから{count}個のクッキーを読み込みました',
        cannotAccess: 'ブラウザ内部ページのクッキーにはアクセスできません'
    },
    zh: {
        appTitle: '🍪 Cookie 管理器专业版',
        langLabel: '语言:',
        cookieCountLabel: 'Cookie总数:',
        siteCookieCountLabel: '网站Cookie:',
        getSiteBtnText: '刷新网站Cookie',
        exportSiteBtnText: '导出网站Cookie',
        importSiteBtnText: '导入网站Cookie',
        clearSiteBtnText: '清除网站Cookie',
        exportAllBtnText: '导出所有Cookie',
        importAllBtnText: '导入所有Cookie',
        manualJsonBtnText: '手动添加JSON',
        cookiesListTitle: '当前网站的Cookie:',
        exportSuccess: '✓ Cookie导出成功！',
        exportError: '✗ Cookie导出失败',
        importConfirm: '⚠️ 导入将替换所有现有Cookie。是否继续？',
        importSiteConfirm: '⚠️ 导入将替换该网站的所有Cookie。是否继续？',
        clearSiteConfirm: '⚠️ 这将删除该网站的所有Cookie。是否继续？',
        importSuccess: '✓ Cookie导入成功！已替换{count}个Cookie。',
        importSiteSuccess: '✓ 网站Cookie导入成功！已替换{count}个Cookie。',
        clearSiteSuccess: '✓ 已清除该网站的所有Cookie。',
        importError: '✗ Cookie导入失败',
        invalidJSON: '✗ 无效的JSON文件格式',
        invalidJsonFormat: '✗ 无效的JSON格式。需要Cookie对象数组。',
        manualImportSuccess: '✓ 从手动JSON成功导入{count}个Cookie。',
        manualJsonTitle: '粘贴Cookie JSON数组:',
        manualImportSiteText: '作为网站Cookie导入',
        manualImportAllText: '作为所有Cookie导入',
        manualCancelText: '取消',
        loading: '加载中...',
        processing: '处理中...',
        noCookies: '未找到该网站的Cookie',
        siteCookiesLoaded: '已加载当前网站的{count}个Cookie',
        cannotAccess: '无法访问浏览器内部页面的Cookie'
    },
    ar: {
        appTitle: '🍪 مدير الكوكيز المحترف',
        langLabel: 'اللغة:',
        cookieCountLabel: 'إجمالي الكوكيز:',
        siteCookieCountLabel: 'كوكيز الموقع:',
        getSiteBtnText: 'تحديث كوكيز الموقع',
        exportSiteBtnText: 'تصدير كوكيز الموقع',
        importSiteBtnText: 'استيراد كوكيز الموقع',
        clearSiteBtnText: 'مسح كوكيز الموقع',
        exportAllBtnText: 'تصدير جميع الكوكيز',
        importAllBtnText: 'استيراد جميع الكوكيز',
        manualJsonBtnText: 'إضافة JSON يدويًا',
        cookiesListTitle: 'كوكيز الموقع الحالي:',
        exportSuccess: '✓ تم تصدير الكوكيز بنجاح!',
        exportError: '✗ فشل تصدير الكوكيز',
        importConfirm: '⚠️ سيقوم الاستيراد باستبدال جميع الكوكيز الموجودة. هل تريد المتابعة؟',
        importSiteConfirm: '⚠️ سيقوم الاستيراد باستبدال جميع كوكيز هذا الموقع. هل تريد المتابعة؟',
        clearSiteConfirm: '⚠️ سيؤدي هذا إلى حذف جميع كوكيز هذا الموقع. هل تريد المتابعة؟',
        importSuccess: '✓ تم استيراد الكوكيز بنجاح! تم استبدال {count} كوكيز.',
        importSiteSuccess: '✓ تم استيراد كوكيز الموقع بنجاح! تم استبدال {count} كوكيز.',
        clearSiteSuccess: '✓ تم مسح جميع كوكيز هذا الموقع.',
        importError: '✗ فشل استيراد الكوكيز',
        invalidJSON: '✗ تنسيق ملف JSON غير صالح',
        invalidJsonFormat: '✗ تنسيق JSON غير صالح. يُتوقع مصفوفة من كائنات الكوكيز.',
        manualImportSuccess: '✓ تم استيراد {count} كوكيز بنجاح من JSON اليدوي.',
        manualJsonTitle: 'الصق مصفوفة JSON للكوكيز:',
        manualImportSiteText: 'استيراد ككوكيز الموقع',
        manualImportAllText: 'استيراد كجميع الكوكيز',
        manualCancelText: 'إلغاء',
        loading: 'جاري التحميل...',
        processing: 'جاري المعالجة...',
        noCookies: 'لم يتم العثور على كوكيز لهذا الموقع',
        siteCookiesLoaded: 'تم تحميل {count} كوكيز للموقع الحالي',
        cannotAccess: 'لا يمكن الوصول إلى الكوكيز لصفحات المتصفح الداخلية'
    },
    ru: {
        appTitle: '🍪 Менеджер куки',
        langLabel: 'Язык:',
        cookieCountLabel: 'Всего куки:',
        siteCookieCountLabel: 'Куки сайта:',
        getSiteBtnText: 'Обновить куки сайта',
        exportSiteBtnText: 'Экспорт куки сайта',
        importSiteBtnText: 'Импорт куки сайта',
        clearSiteBtnText: 'Очистить куки сайта',
        exportAllBtnText: 'Экспорт всех куки',
        importAllBtnText: 'Импорт всех куки',
        manualJsonBtnText: 'Добавить JSON вручную',
        cookiesListTitle: 'Куки для текущего сайта:',
        exportSuccess: '✓ Куки успешно экспортированы!',
        exportError: '✗ Ошибка экспорта куки',
        importConfirm: '⚠️ Импорт заменит ВСЕ существующие куки. Продолжить?',
        importSiteConfirm: '⚠️ Импорт заменит ВСЕ куки этого сайта. Продолжить?',
        clearSiteConfirm: '⚠️ Это удалит ВСЕ куки этого сайта. Продолжить?',
        importSuccess: '✓ Куки успешно импортированы! Заменено {count} куки.',
        importSiteSuccess: '✓ Куки сайта успешно импортированы! Заменено {count} куки.',
        clearSiteSuccess: '✓ Все куки этого сайта очищены.',
        importError: '✗ Ошибка импорта куки',
        invalidJSON: '✗ Неверный формат JSON файла',
        invalidJsonFormat: '✗ Неверный формат JSON. Ожидается массив объектов куки.',
        manualImportSuccess: '✓ Успешно импортировано {count} куки из ручного JSON.',
        manualJsonTitle: 'Вставьте JSON массив куки:',
        manualImportSiteText: 'Импортировать как куки сайта',
        manualImportAllText: 'Импортировать как все куки',
        manualCancelText: 'Отмена',
        loading: 'Загрузка...',
        processing: 'Обработка...',
        noCookies: 'Куки для этого сайта не найдены',
        siteCookiesLoaded: 'Загружено {count} куки для текущего сайта',
        cannotAccess: 'Невозможно получить доступ к куки для внутренних страниц браузера'
    },
    hi: {
        appTitle: '🍪 कुकी मैनेजर प्रो',
        langLabel: 'भाषा:',
        cookieCountLabel: 'कुल कुकीज़:',
        siteCookieCountLabel: 'साइट कुकीज़:',
        getSiteBtnText: 'साइट कुकीज़ रिफ्रेश करें',
        exportSiteBtnText: 'साइट कुकीज़ निर्यात करें',
        importSiteBtnText: 'साइट कुकीज़ आयात करें',
        clearSiteBtnText: 'साइट कुकीज़ साफ़ करें',
        exportAllBtnText: 'सभी कुकीज़ निर्यात करें',
        importAllBtnText: 'सभी कुकीज़ आयात करें',
        manualJsonBtnText: 'मैन्युअल JSON जोड़ें',
        cookiesListTitle: 'वर्तमान साइट के लिए कुकीज़:',
        exportSuccess: '✓ कुकीज़ सफलतापूर्वक निर्यात हुईं!',
        exportError: '✗ कुकीज़ निर्यात विफल',
        importConfirm: '⚠️ आयात सभी मौजूदा कुकीज़ को बदल देगा। क्या आप जारी रखना चाहते हैं?',
        importSiteConfirm: '⚠️ आयात इस साइट की सभी कुकीज़ को बदल देगा। क्या आप जारी रखना चाहते हैं?',
        clearSiteConfirm: '⚠️ यह इस साइट की सभी कुकीज़ को हटा देगा। क्या आप जारी रखना चाहते हैं?',
        importSuccess: '✓ कुकीज़ सफलतापूर्वक आयात हुईं! {count} कुकीज़ बदली गईं।',
        importSiteSuccess: '✓ साइट कुकीज़ सफलतापूर्वक आयात हुईं! {count} कुकीज़ बदली गईं।',
        clearSiteSuccess: '✓ इस साइट की सभी कुकीज़ साफ़ कर दी गईं।',
        importError: '✗ कुकीज़ आयात विफल',
        invalidJSON: '✗ अमान्य JSON फ़ाइल प्रारूप',
        invalidJsonFormat: '✗ अमान्य JSON प्रारूप। कुकी ऑब्जेक्ट की सरणी अपेक्षित है।',
        manualImportSuccess: '✓ मैन्युअल JSON से {count} कुकीज़ सफलतापूर्वक आयात हुईं।',
        manualJsonTitle: 'कुकी JSON ऐरे चिपकाएँ:',
        manualImportSiteText: 'साइट कुकीज़ के रूप में आयात करें',
        manualImportAllText: 'सभी कुकीज़ के रूप में आयात करें',
        manualCancelText: 'रद्द करें',
        loading: 'लोड हो रहा है...',
        processing: 'प्रोसेसिंग...',
        noCookies: 'इस साइट के लिए कोई कुकी नहीं मिली',
        siteCookiesLoaded: 'वर्तमान साइट के लिए {count} कुकीज़ लोड हुईं',
        cannotAccess: 'ब्राउज़र आंतरिक पृष्ठों के लिए कुकीज़ तक पहुँच नहीं सकते'
    },
    ta: {
        appTitle: '🍪 குக்கீ மேலாளர் புரோ',
        langLabel: 'மொழி:',
        cookieCountLabel: 'மொத்த குக்கீகள்:',
        siteCookieCountLabel: 'தள குக்கீகள்:',
        getSiteBtnText: 'தள குக்கீகளைப் புதுப்பிக்கவும்',
        exportSiteBtnText: 'தள குக்கீகளை ஏற்றுமதி செய்யவும்',
        importSiteBtnText: 'தள குக்கீகளை இறக்குமதி செய்யவும்',
        clearSiteBtnText: 'தள குக்கீகளை அழிக்கவும்',
        exportAllBtnText: 'அனைத்து குக்கீகளையும் ஏற்றுமதி செய்யவும்',
        importAllBtnText: 'அனைத்து குக்கீகளையும் இறக்குமதி செய்யவும்',
        manualJsonBtnText: 'கையேடு JSON சேர்க்கவும்',
        cookiesListTitle: 'தற்போதைய தளத்திற்கான குக்கீகள்:',
        exportSuccess: '✓ குக்கீகள் வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டன!',
        exportError: '✗ குக்கீகளை ஏற்றுமதி செய்தல் தோல்வியடைந்தது',
        importConfirm: '⚠️ இறக்குமதி செய்வது இருக்கும் அனைத்து குக்கீகளையும் மாற்றும். தொடரவா?',
        importSiteConfirm: '⚠️ இறக்குமதி செய்வது இந்த தளத்தின் அனைத்து குக்கீகளையும் மாற்றும். தொடரவா?',
        clearSiteConfirm: '⚠️ இது இந்த தளத்தின் அனைத்து குக்கீகளையும் நிரந்தரமாக நீக்கும். தொடரவா?',
        importSuccess: '✓ குக்கீகள் வெற்றிகரமாக இறக்குமதி செய்யப்பட்டன! {count} குக்கீகள் மாற்றப்பட்டன.',
        importSiteSuccess: '✓ தள குக்கீகள் வெற்றிகரமாக இறக்குமதி செய்யப்பட்டன! {count} குக்கீகள் மாற்றப்பட்டன.',
        clearSiteSuccess: '✓ இந்த தளத்தின் அனைத்து குக்கீகளும் அழிக்கப்பட்டன.',
        importError: '✗ குக்கீகளை இறக்குமதி செய்தல் தோல்வியடைந்தது',
        invalidJSON: '✗ தவறான JSON கோப்பு வடிவம்',
        invalidJsonFormat: '✗ தவறான JSON வடிவம். குக்கீ பொருள்களின் வரிசை எதிர்பார்க்கப்படுகிறது.',
        manualImportSuccess: '✓ கையேடு JSON இலிருந்து {count} குக்கீகள் வெற்றிகரமாக இறக்குமதி செய்யப்பட்டன.',
        manualJsonTitle: 'குக்கீ JSON வரிசையை ஒட்டவும்:',
        manualImportSiteText: 'தள குக்கீகளாக இறக்குமதி செய்யவும்',
        manualImportAllText: 'அனைத்து குக்கீகளாக இறக்குமதி செய்யவும்',
        manualCancelText: 'ரத்துசெய்',
        loading: 'ஏற்றுகிறது...',
        processing: 'செயலாக்குகிறது...',
        noCookies: 'இந்த தளத்திற்கு குக்கீகள் எதுவும் கிடைக்கவில்லை',
        siteCookiesLoaded: 'தற்போதைய தளத்திற்கு {count} குக்கீகள் ஏற்றப்பட்டன',
        cannotAccess: 'உலாவியின் உள் பக்கங்களுக்கான குக்கீகளை அணுக முடியாது'
    }
};

let currentLanguage = 'en';
let currentCookies = [];
let currentSiteCookies = [];
let currentSiteDomain = '';

// Load saved language preference
async function loadLanguagePreference() {
    const result = await chrome.storage.local.get(['language']);
    if (result.language && translations[result.language]) {
        currentLanguage = result.language;
        document.getElementById('languageSelect').value = currentLanguage;
    }
    updateUILanguage();
}

// Update UI with selected language
function updateUILanguage() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    document.getElementById('appTitle').textContent = t.appTitle;
    document.getElementById('langLabel').textContent = t.langLabel;
    document.getElementById('cookieCountLabel').textContent = t.cookieCountLabel;
    document.getElementById('siteCookieCountLabel').textContent = t.siteCookieCountLabel;
    document.getElementById('getSiteBtnText').textContent = t.getSiteBtnText;
    document.getElementById('exportSiteBtnText').textContent = t.exportSiteBtnText;
    document.getElementById('importSiteBtnText').textContent = t.importSiteBtnText;
    document.getElementById('clearSiteBtnText').textContent = t.clearSiteBtnText;
    document.getElementById('exportAllBtnText').textContent = t.exportAllBtnText;
    document.getElementById('importAllBtnText').textContent = t.importAllBtnText;
    document.getElementById('manualJsonBtnText').textContent = t.manualJsonBtnText;
    document.getElementById('cookiesListTitle').textContent = t.cookiesListTitle;
    document.getElementById('manualJsonTitle').textContent = t.manualJsonTitle;
    document.getElementById('manualImportSiteText').textContent = t.manualImportSiteText;
    document.getElementById('manualImportAllText').textContent = t.manualImportAllText;
    document.getElementById('manualCancelText').textContent = t.manualCancelText;
    
    // Set RTL for Arabic
    if (currentLanguage === 'ar') {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
}

// Show status message
function showStatus(message, type = 'success') {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    statusDiv.style.display = 'block';
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 3000);
}

// Load total cookie count
async function loadTotalCookieCount() {
    try {
        const cookies = await chrome.cookies.getAll({});
        currentCookies = cookies;
        document.getElementById('cookieCount').textContent = cookies.length;
        return cookies;
    } catch (error) {
        console.error('Error loading cookies:', error);
        return [];
    }
}

// Get current active tab URL
async function getCurrentTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
}

// Get domain from URL
function getDomainFromUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname;
    } catch (e) {
        return null;
    }
}

// Fetch cookies for a specific domain
async function getCookiesForDomain(domain) {
    const allCookies = await chrome.cookies.getAll({});
    const domainCookies = allCookies.filter(cookie => {
        const cookieDomain = cookie.domain;
        if (cookieDomain.startsWith('.')) {
            return domain === cookieDomain.substring(1) || domain.endsWith(cookieDomain);
        } else {
            return domain === cookieDomain;
        }
    });
    return domainCookies;
}

// Display site cookies in the list
function displaySiteCookies(cookies) {
    const container = document.getElementById('cookiesListContainer');
    const listDiv = document.getElementById('cookiesList');
    
    if (!cookies || cookies.length === 0) {
        container.innerHTML = `<div class="cookie-item">${translations[currentLanguage].noCookies}</div>`;
        listDiv.style.display = 'block';
        return;
    }
    
    container.innerHTML = '';
    cookies.forEach(cookie => {
        const cookieDiv = document.createElement('div');
        cookieDiv.className = 'cookie-item';
        cookieDiv.innerHTML = `
            <div class="cookie-name">${escapeHtml(cookie.name)}</div>
            <div class="cookie-value">${escapeHtml(cookie.value.substring(0, 50))}${cookie.value.length > 50 ? '...' : ''}</div>
            <div class="cookie-domain">${escapeHtml(cookie.domain)}</div>
        `;
        container.appendChild(cookieDiv);
    });
    listDiv.style.display = 'block';
}

// Helper to escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Main function to load site cookies automatically
async function autoLoadSiteCookies() {
    const t = translations[currentLanguage];
    
    try {
        const tab = await getCurrentTab();
        if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('brave://') || tab.url.startsWith('about:')) {
            showStatus(t.cannotAccess, 'error');
            document.getElementById('siteStats').style.display = 'none';
            document.getElementById('exportSiteBtn').style.display = 'none';
            document.getElementById('importSiteBtn').style.display = 'none';
            document.getElementById('clearSiteBtn').style.display = 'none';
            document.getElementById('cookiesList').style.display = 'none';
            return;
        }
        
        const domain = getDomainFromUrl(tab.url);
        if (!domain) {
            showStatus('Invalid URL', 'error');
            return;
        }
        
        currentSiteDomain = domain;
        const cookies = await getCookiesForDomain(domain);
        currentSiteCookies = cookies;
        
        document.getElementById('siteCookieCount').textContent = cookies.length;
        document.getElementById('siteStats').style.display = 'flex';
        
        // Show site-specific action buttons
        document.getElementById('exportSiteBtn').style.display = 'block';
        document.getElementById('importSiteBtn').style.display = 'block';
        document.getElementById('clearSiteBtn').style.display = 'block';
        
        displaySiteCookies(cookies);
        
        // Only show success message if we have cookies, otherwise silent
        if (cookies.length > 0) {
            showStatus(t.siteCookiesLoaded.replace('{count}', cookies.length), 'success');
        }
    } catch (error) {
        console.error('Error auto-loading site cookies:', error);
        showStatus('Error: ' + error.message, 'error');
    }
}

// Refresh site cookies (manual)
async function refreshSiteCookies() {
    await autoLoadSiteCookies();
}

// Export site cookies to JSON - prompts save location
async function exportSiteCookies() {
    if (!currentSiteCookies || currentSiteCookies.length === 0) {
        showStatus(translations[currentLanguage].noCookies, 'error');
        return;
    }
    
    const t = translations[currentLanguage];
    try {
        showStatus(t.processing, 'info');
        
        const formattedCookies = currentSiteCookies.map(cookie => ({
            domain: cookie.domain,
            expirationDate: cookie.session ? undefined : cookie.expirationDate,
            hostOnly: cookie.hostOnly || false,
            httpOnly: cookie.httpOnly || false,
            name: cookie.name,
            path: cookie.path || '/',
            sameSite: cookie.sameSite || 'unspecified',
            secure: cookie.secure || false,
            session: cookie.session || false,
            storeId: cookie.storeId || '0',
            value: cookie.value
        }));
        
        const jsonStr = JSON.stringify(formattedCookies, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Generate filename from domain (remove dots and special chars)
        let domain = currentSiteDomain;
        let filename = domain.replace(/^\.+/, '').replace(/[^a-z0-9]/gi, '_').toLowerCase();
        if (!filename) filename = 'cookies';
        filename = filename + '.json';
        
        // Use chrome.downloads to prompt save location
        chrome.downloads.download({
            url: url,
            filename: filename,
            saveAs: true
        }, (downloadId) => {
            if (chrome.runtime.lastError) {
                console.error('Download error:', chrome.runtime.lastError);
                showStatus(t.exportError, 'error');
            } else {
                showStatus(t.exportSuccess, 'success');
            }
            URL.revokeObjectURL(url);
        });
        
    } catch (error) {
        console.error('Export error:', error);
        showStatus(t.exportError, 'error');
    }
}

// Clear all cookies for current site
async function clearSiteCookies() {
    const t = translations[currentLanguage];
    if (!confirm(t.clearSiteConfirm)) return;
    
    showStatus(t.processing, 'info');
    try {
        for (const cookie of currentSiteCookies) {
            let protocol = cookie.secure ? 'https://' : 'http://';
            let domain = cookie.domain.startsWith('.') ? cookie.domain.substring(1) : cookie.domain;
            let url = `${protocol}${domain}${cookie.path || '/'}`;
            await chrome.cookies.remove({
                url: url,
                name: cookie.name,
                storeId: cookie.storeId
            }).catch(err => console.warn(`Failed to remove ${cookie.name}:`, err));
        }
        
        // Refresh site cookies display
        await autoLoadSiteCookies();
        await loadTotalCookieCount();
        showStatus(t.clearSiteSuccess, 'success');
    } catch (error) {
        console.error('Clear error:', error);
        showStatus(t.importError, 'error');
    }
}

// Import site cookies from JSON file
async function importSiteCookies(file) {
    const t = translations[currentLanguage];
    if (!confirm(t.importSiteConfirm)) return;
    
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const cookiesData = JSON.parse(e.target.result);
                if (!Array.isArray(cookiesData)) throw new Error('Invalid format');
                
                showStatus(t.processing, 'info');
                
                // First, clear existing site cookies
                for (const cookie of currentSiteCookies) {
                    let protocol = cookie.secure ? 'https://' : 'http://';
                    let domain = cookie.domain.startsWith('.') ? cookie.domain.substring(1) : cookie.domain;
                    let url = `${protocol}${domain}${cookie.path || '/'}`;
                    await chrome.cookies.remove({
                        url: url,
                        name: cookie.name,
                        storeId: cookie.storeId
                    }).catch(() => {});
                }
                
                // Import new cookies (only those matching the current site domain)
                let successCount = 0;
                for (const cookie of cookiesData) {
                    let cookieDomain = cookie.domain;
                    if (cookieDomain.startsWith('.')) cookieDomain = cookieDomain.substring(1);
                    if (!currentSiteDomain.includes(cookieDomain) && !cookieDomain.includes(currentSiteDomain)) {
                        continue;
                    }
                    
                    try {
                        const cookieSet = {
                            url: getCookieUrl(cookie),
                            name: cookie.name,
                            value: cookie.value,
                            domain: cookie.domain,
                            path: cookie.path || '/',
                            secure: cookie.secure || false,
                            httpOnly: cookie.httpOnly || false,
                            sameSite: cookie.sameSite || 'unspecified',
                            storeId: cookie.storeId || '0'
                        };
                        if (!cookie.session && cookie.expirationDate) {
                            cookieSet.expirationDate = cookie.expirationDate;
                        }
                        if (cookie.hostOnly && cookieSet.domain && cookieSet.domain.startsWith('.')) {
                            cookieSet.domain = cookieSet.domain.substring(1);
                        }
                        await chrome.cookies.set(cookieSet);
                        successCount++;
                    } catch (err) {
                        console.error(`Failed to set ${cookie.name}:`, err);
                    }
                }
                
                await autoLoadSiteCookies(); // Refresh display
                await loadTotalCookieCount();
                showStatus(t.importSiteSuccess.replace('{count}', successCount), 'success');
                resolve({ successCount });
            } catch (error) {
                showStatus(t.invalidJSON, 'error');
                reject(error);
            }
        };
        reader.onerror = () => reject(new Error('File read error'));
        reader.readAsText(file);
    });
}

// Export all cookies - prompts save location
async function exportAllCookies() {
    const t = translations[currentLanguage];
    try {
        showStatus(t.processing, 'info');
        const cookies = await chrome.cookies.getAll({});
        const formattedCookies = cookies.map(cookie => ({
            domain: cookie.domain,
            expirationDate: cookie.session ? undefined : cookie.expirationDate,
            hostOnly: cookie.hostOnly || false,
            httpOnly: cookie.httpOnly || false,
            name: cookie.name,
            path: cookie.path || '/',
            sameSite: cookie.sameSite || 'unspecified',
            secure: cookie.secure || false,
            session: cookie.session || false,
            storeId: cookie.storeId || '0',
            value: cookie.value
        }));
        
        const jsonStr = JSON.stringify(formattedCookies, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const timestamp = Date.now();
        const filename = `all_cookies_${timestamp}.json`;
        
        chrome.downloads.download({
            url: url,
            filename: filename,
            saveAs: true
        }, (downloadId) => {
            if (chrome.runtime.lastError) {
                console.error('Download error:', chrome.runtime.lastError);
                showStatus(t.exportError, 'error');
            } else {
                showStatus(t.exportSuccess, 'success');
            }
            URL.revokeObjectURL(url);
        });
        
    } catch (error) {
        showStatus(t.exportError, 'error');
    }
}

// Clear all cookies (for import all)
async function clearAllCookies() {
    const cookies = await chrome.cookies.getAll({});
    for (const cookie of cookies) {
        let protocol = cookie.secure ? 'https://' : 'http://';
        let domain = cookie.domain.startsWith('.') ? cookie.domain.substring(1) : cookie.domain;
        let url = `${protocol}${domain}${cookie.path || '/'}`;
        await chrome.cookies.remove({ url: url, name: cookie.name, storeId: cookie.storeId }).catch(() => {});
    }
}

// Import all cookies from file
async function importAllCookies(file) {
    const t = translations[currentLanguage];
    if (!confirm(t.importConfirm)) return;
    
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const cookiesData = JSON.parse(e.target.result);
                if (!Array.isArray(cookiesData)) throw new Error('Invalid format');
                
                showStatus(t.processing, 'info');
                await clearAllCookies();
                
                let successCount = 0;
                for (const cookie of cookiesData) {
                    try {
                        const cookieSet = {
                            url: getCookieUrl(cookie),
                            name: cookie.name,
                            value: cookie.value,
                            domain: cookie.domain,
                            path: cookie.path || '/',
                            secure: cookie.secure || false,
                            httpOnly: cookie.httpOnly || false,
                            sameSite: cookie.sameSite || 'unspecified',
                            storeId: cookie.storeId || '0'
                        };
                        if (!cookie.session && cookie.expirationDate) {
                            cookieSet.expirationDate = cookie.expirationDate;
                        }
                        if (cookie.hostOnly && cookieSet.domain && cookieSet.domain.startsWith('.')) {
                            cookieSet.domain = cookieSet.domain.substring(1);
                        }
                        await chrome.cookies.set(cookieSet);
                        successCount++;
                    } catch (err) {
                        console.error(`Failed to set ${cookie.name}:`, err);
                    }
                }
                await loadTotalCookieCount();
                await autoLoadSiteCookies(); // Refresh site view
                showStatus(t.importSuccess.replace('{count}', successCount), 'success');
                resolve({ successCount });
            } catch (error) {
                showStatus(t.invalidJSON, 'error');
                reject(error);
            }
        };
        reader.onerror = () => reject(new Error('File read error'));
        reader.readAsText(file);
    });
}

function getCookieUrl(cookie) {
    let protocol = cookie.secure ? 'https://' : 'http://';
    let domain = cookie.domain;
    if (domain.startsWith('.')) domain = domain.substring(1);
    let path = cookie.path || '/';
    return `${protocol}${domain}${path}`;
}

let currentImportMode = 'all';

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (currentImportMode === 'all') {
        importAllCookies(file).then(() => {
            document.getElementById('fileInput').value = '';
        }).catch(() => {});
    } else if (currentImportMode === 'site') {
        importSiteCookies(file).then(() => {
            document.getElementById('fileInput').value = '';
        }).catch(() => {});
    }
}

// Manual JSON functions
function toggleManualJsonSection() {
    const section = document.getElementById('manualJsonSection');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        document.getElementById('manualJsonTextarea').value = '';
    } else {
        section.style.display = 'none';
    }
}

async function importFromManualJson(asSite = true) {
    const t = translations[currentLanguage];
    const jsonText = document.getElementById('manualJsonTextarea').value.trim();
    if (!jsonText) {
        showStatus('Please paste JSON data', 'error');
        return;
    }
    
    let cookiesData;
    try {
        cookiesData = JSON.parse(jsonText);
        if (!Array.isArray(cookiesData)) {
            throw new Error('Not an array');
        }
        // Basic validation: each item should have at least name, domain, value
        for (let i = 0; i < cookiesData.length; i++) {
            const cookie = cookiesData[i];
            if (!cookie.name || !cookie.domain || cookie.value === undefined) {
                throw new Error(`Cookie at index ${i} missing required fields (name, domain, value)`);
            }
        }
    } catch (err) {
        showStatus(t.invalidJsonFormat || 'Invalid JSON format', 'error');
        return;
    }
    
    if (asSite) {
        if (!currentSiteDomain) {
            showStatus('No site loaded. Please refresh site cookies first.', 'error');
            return;
        }
        if (!confirm(t.importSiteConfirm)) return;
        
        showStatus(t.processing, 'info');
        // Clear existing site cookies
        for (const cookie of currentSiteCookies) {
            let protocol = cookie.secure ? 'https://' : 'http://';
            let domain = cookie.domain.startsWith('.') ? cookie.domain.substring(1) : cookie.domain;
            let url = `${protocol}${domain}${cookie.path || '/'}`;
            await chrome.cookies.remove({ url: url, name: cookie.name, storeId: cookie.storeId }).catch(() => {});
        }
        
        let successCount = 0;
        for (const cookie of cookiesData) {
            // Optional: filter by domain matching current site
            let cookieDomain = cookie.domain;
            if (cookieDomain.startsWith('.')) cookieDomain = cookieDomain.substring(1);
            if (!currentSiteDomain.includes(cookieDomain) && !cookieDomain.includes(currentSiteDomain)) {
                continue; // skip if not for this site
            }
            try {
                const cookieSet = {
                    url: getCookieUrl(cookie),
                    name: cookie.name,
                    value: cookie.value,
                    domain: cookie.domain,
                    path: cookie.path || '/',
                    secure: cookie.secure || false,
                    httpOnly: cookie.httpOnly || false,
                    sameSite: cookie.sameSite || 'unspecified',
                    storeId: cookie.storeId || '0'
                };
                if (!cookie.session && cookie.expirationDate) {
                    cookieSet.expirationDate = cookie.expirationDate;
                }
                if (cookie.hostOnly && cookieSet.domain && cookieSet.domain.startsWith('.')) {
                    cookieSet.domain = cookieSet.domain.substring(1);
                }
                await chrome.cookies.set(cookieSet);
                successCount++;
            } catch (err) {
                console.error(`Failed to set ${cookie.name}:`, err);
            }
        }
        await autoLoadSiteCookies();
        await loadTotalCookieCount();
        showStatus((t.manualImportSuccess || '✓ Successfully imported {count} cookies').replace('{count}', successCount), 'success');
    } else {
        // Import as all cookies (replace all)
        if (!confirm(t.importConfirm)) return;
        showStatus(t.processing, 'info');
        await clearAllCookies();
        let successCount = 0;
        for (const cookie of cookiesData) {
            try {
                const cookieSet = {
                    url: getCookieUrl(cookie),
                    name: cookie.name,
                    value: cookie.value,
                    domain: cookie.domain,
                    path: cookie.path || '/',
                    secure: cookie.secure || false,
                    httpOnly: cookie.httpOnly || false,
                    sameSite: cookie.sameSite || 'unspecified',
                    storeId: cookie.storeId || '0'
                };
                if (!cookie.session && cookie.expirationDate) {
                    cookieSet.expirationDate = cookie.expirationDate;
                }
                if (cookie.hostOnly && cookieSet.domain && cookieSet.domain.startsWith('.')) {
                    cookieSet.domain = cookieSet.domain.substring(1);
                }
                await chrome.cookies.set(cookieSet);
                successCount++;
            } catch (err) {
                console.error(`Failed to set ${cookie.name}:`, err);
            }
        }
        await loadTotalCookieCount();
        await autoLoadSiteCookies();
        showStatus((t.manualImportSuccess || '✓ Successfully imported {count} cookies').replace('{count}', successCount), 'success');
    }
    // Close the manual section after import
    document.getElementById('manualJsonSection').style.display = 'none';
}

// Save language preference
async function saveLanguagePreference(lang) {
    await chrome.storage.local.set({ language: lang });
    currentLanguage = lang;
    updateUILanguage();
    await loadTotalCookieCount();
    await autoLoadSiteCookies(); // Reload site cookies with new language
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
    await loadLanguagePreference();
    await loadTotalCookieCount();
    
    // Auto-grab site cookies when popup opens
    await autoLoadSiteCookies();
    
    // Manual refresh button
    document.getElementById('getSiteCookiesBtn').addEventListener('click', refreshSiteCookies);
    document.getElementById('exportSiteBtn').addEventListener('click', exportSiteCookies);
    document.getElementById('clearSiteBtn').addEventListener('click', clearSiteCookies);
    
    // Export all
    document.getElementById('exportAllBtn').addEventListener('click', exportAllCookies);
    
    // Import all
    document.getElementById('importAllBtn').addEventListener('click', () => {
        currentImportMode = 'all';
        document.getElementById('fileInput').click();
    });
    
    // Import site
    document.getElementById('importSiteBtn').addEventListener('click', () => {
        if (!currentSiteDomain) {
            showStatus(translations[currentLanguage].noCookies, 'error');
            return;
        }
        currentImportMode = 'site';
        document.getElementById('fileInput').click();
    });
    
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);
    
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        saveLanguagePreference(e.target.value);
    });
    
    // Manual JSON buttons
    document.getElementById('manualJsonBtn').addEventListener('click', toggleManualJsonSection);
    document.getElementById('manualImportSiteBtn').addEventListener('click', () => importFromManualJson(true));
    document.getElementById('manualImportAllBtn').addEventListener('click', () => importFromManualJson(false));
    document.getElementById('manualCancelBtn').addEventListener('click', () => {
        document.getElementById('manualJsonSection').style.display = 'none';
    });
});