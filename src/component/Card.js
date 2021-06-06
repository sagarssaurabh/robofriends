// in earlier version we needed to import react to xecute JSX-i.e HTML like syntax but it is not required now

// instead of props as parameter we can do sestructuring here
const Card = ({ id,name,email }) => {
  return(
      <div className="bg-light-green dib br3 mpa2 ma2 grow bw2 shadow-5 tc">
      <img alt='robots' src={`https://robohash.org/${id}?100x100`} />
        <div>
            <h2>{name} </h2>
            <p> {email} </p>
        </div>
      </div>
  );
}

export default Card;
