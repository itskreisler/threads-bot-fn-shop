import { shopApi } from '../utils/services'
const { shop } = await shopApi()
const Shop = () => {
    return <>
        {shop.map(({ mainId, displayAssets: [{ full_background }], displayName, price: { regularPrice, finalPrice } }) => (
            <div className="overflow-hidden rounded-lg bg-white" key={mainId}>
                <img alt={displayName} loading="lazy" src={full_background} />
                <div className="p-2 divide-y-[1px] divide-gray-500/60 flex flex-col">
                    <span className="font-bold">{displayName}</span>
                    {
                        regularPrice === finalPrice
                            ? <span className='text-[1.8rem]'>{finalPrice} $</span>
                            : <div>
                                <span className="text-[1.4rem] line-through text-red-500">{regularPrice} $</span>
                                <span className="text-[1.8rem]">{finalPrice} $</span>
                            </div>
                    }
                </div>
            </div>
        ))}
    </>
}

export default Shop