import "./board.css";
import { getChar } from "../../helper";
import Ranks from "./Bits/Ranks";
import Files from "./Bits/Files";

const Board = () => {
  const getClassName = (i, j) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--dark " : " tile--light ";
    return c;
  };
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => getChar(i));
  return (
    <div className='board '>
      <Ranks ranks={ranks}  />
      <div className='tiles'>
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div
              key={file + "" + rank}
              i={i}
              j={j}
              className={`${getClassName(7 - i, j)}`}
            ></div>
          ))
        )}
      </div>
      <Files files={files} />
    </div>
  );
};
export default Board;
