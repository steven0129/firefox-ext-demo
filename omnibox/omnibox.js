browser.omnibox.setDefaultSuggestion({
    description: `e.g. www.google.com`
});

browser.omnibox.onInputChanged.addListener((text, suggest) => {
    console.log(text)
    let result = []
    result.push({
        description: '簡介',
        content: '這是Google搜尋引擎的首頁'
    })
    if (text === 'www.google.com') suggest(result)
});