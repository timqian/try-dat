var Dat = require('dat-node')

// 1. Tell Dat where to download the files
Dat('/Users/timqian/Documents/try-dat/mirrorAssets', {
  // 2. Tell Dat what link I want
  key: '8fd075ca2055dab808d983b00462fff01444f445e5c4ff0fcc971f11825fe95e' // (a 64 character hash from above)
}, function (err, dat) {
  if (err) throw err

  // 3. Join the network & download (files are automatically downloaded)
  dat.joinNetwork()
})