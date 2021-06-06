import Card from './Card';

const CardList = ({ robots }) => {
  // insted of creating this cardArray we can directly pass this inside div(in the bottom code)
  // const cardArray = robots.map((item,i) => {
    // we get a warning that each child should have unique key props
    // when working with react the way the virtual DOM remember each card is through key, and if any card gets deleted and if we
    // dont have key prop ,React don't know which card is which and it will have to change the entire DOM.
    // to it will remeber which card to delete and this will minimize the work for DOM manupulation
    // key prop should be something that doesn't change and if we delete the elements then we might change index after shifting
     //  so we choose something like id


  return(
    <div>
      {
          robots.map((item,i) => {
          return (
            < Card
             key={robots[i].id}
             id={robots[i].id}
             name={robots[i].name}
             email={robots[i].email}
             />
           );
        })
      }
    </div>
  )};
export default CardList;
