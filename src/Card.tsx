// export default function Card:React.FC<any>(question) {
//   return <div>Card</div>;
// }

const Card: React.FC<any> = ({ que }) => {
  console.log(que);

  return (
    <>
      <h1>{que}</h1>
    </>
  );
};
export default Card;
