import { cardType } from "./types";

const Card: React.FC<cardType> = ({ question, options, submit }) => {
  return (
    <>
      <h1>{question}</h1>
      <form onSubmit={submit}>
        <h3>
          {options.map((i: string, index: number) => (
            <div>
              <label>
                <input type="radio" value={i} />

                {i}
              </label>
            </div>
          ))}
        </h3>
        <input type="submit" />
      </form>
    </>
  );
};
export default Card;
