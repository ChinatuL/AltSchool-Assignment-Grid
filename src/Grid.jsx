import { range } from "./utils";

function Grid({ numRows, numCols }) {
    return (
        <div className='grid'>
            {range(0, numRows).map((index) => (
                <div
                    className='row'
                    key={index}
                    style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
                >
                    {range(0, numCols).map((index) => (
                        <div className='cell' key={index}>
                            {" "}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;
