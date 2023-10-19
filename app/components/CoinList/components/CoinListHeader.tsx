import t from '~/utils/t'

function CoinListHeader() {
  return (
    <div className="mb-4 ml-2 flex max-w-full flex-row items-start justify-between gap-5 px-5 max-md:flex-wrap">
      <span className="text-xs font-semibold text-gray-400">
        {t('coins.coin')}
      </span>
      <div className="flex max-w-full flex-row items-start justify-between gap-5 self-center">
        <span className="mr-6 text-right text-xs font-semibold text-gray-400">
          {t('coins.price')}
        </span>
        <span className="mr-2 text-right text-xs font-semibold text-gray-400">
          {t('coins.favorite')}
        </span>
      </div>
    </div>
  )
}

export default CoinListHeader
