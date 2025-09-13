export function PriceRangeFilter({min, max, value, onChange}) {
    return (
        <div>
            <div className="flex">
                <div className="p-2 border border-indigo-600">
                    <div>min price</div>
                    <div>${min}</div>
                </div>
                <div className="p-2 border border-indigo-600">
                    <div>max price</div>
                    <div>${max}</div>
                </div>
            </div>
        </div>
    )
}