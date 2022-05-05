
// @ts-ignore
export const StatusFilter = ({ column }) => {
    const { filterValue, setFilter } = column;

    return (
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <select data-testid="status-filter" value={filterValue} onChange={(e) => setFilter(e.target.value)} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option value="">All</option>
                    <option value="default">Default</option>
                    <option value="in_progress">In progress</option>
                    <option value="not_started">Not started</option>
                    <option value="paid">Paid</option>
                    <option value="ready">Ready</option>
                </select>
            </div>
        </div>
    )
}