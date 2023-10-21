chrome.runtime.oninstalld.addListener(async => {
   let url = chrome.runtime.getUrl('welcome/hello.html')
   let tab = await chrome.tabs.create({ url })
   console.log(`Created tab ${tab.id}`)
})

