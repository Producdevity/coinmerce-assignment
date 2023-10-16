const https = require('https')
const fs = require('fs')
const path = require('path')

const coins = [
  'ADA',
  'ALPINE',
  'APE',
  'APT',
  'ARB',
  'ATOM',
  'AVAX',
  'BCH',
  'BNB',
  'BTC',
  'CHZ',
  'DAR',
  'DOGE',
  'DOT',
  'EDU',
  'EGLD',
  'ENJ',
  'EOS',
  'ETC',
  'ETH',
  'FTM',
  'GAL',
  'GALA',
  'GMT',
  'GRT',
  'HOT',
  'ICP',
  'ID',
  'JASMY',
  'LAZIO',
  'LINK',
  'LTC',
  'LUNA',
  'MATIC',
  'NEAR',
  'OP',
  'PORTO',
  'RUNE',
  'SHIB',
  'SOL',
  'SUI',
  'SXP',
  'THETA',
  'TRX',
  'UNI',
  'VET',
  'WAVES',
  'WIN',
  'WRX',
  'XLM',
  'XRP',
  'YFI',
  'ZIL',
]

/**
 * Downloads all coin images from Coinmerce.
 * @param {number} size - Can be either 30 or 44.
 */
function downloadCoinImages(size) {
  const outputDir = path.join(
    __dirname,
    `./../public/images/coins/${size}x${size}`,
  )

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  const downloadImage = (url, callback) => {
    const outputFilename = path.join(outputDir, path.basename(url))
    const fileStream = fs.createWriteStream(outputFilename)

    https
      .get(url, (response) => {
        response.pipe(fileStream)

        fileStream.on('finish', () => {
          fileStream.close(callback) // close the stream and call callback
        })
      })
      .on('error', (err) => {
        fs.unlink(outputFilename) // Delete the file on error
        console.error(`Error downloading ${url}: ${err.message}`)
        callback(err) // Call the callback with error
      })
  }

  const downloadAllImages = () => {
    let currentIndex = 0

    const next = () => {
      if (currentIndex >= coins.length) {
        console.log('Finished downloading all images.')
        return
      }

      const coin = coins[currentIndex]
      const coinImageUrl = `https://coinmerce.io/assets/images/icons/coins/${size}x${size}/${coin}.png`
      currentIndex++

      downloadImage(coinImageUrl, (err) => {
        if (!err) {
          console.log(`Downloaded ${coinImageUrl}`)
        }
        next() // Proceed to next image
      })
    }

    next() // Start the download chain
  }

  downloadAllImages()
}

downloadCoinImages(30)
downloadCoinImages(44)
