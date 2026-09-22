import Edit from "./edit";
import Delete from "./delete";
 
type Props = { onDeleted: () => void };
 
const Home = ({ onDeleted }: Props) => {
  return (
    <div>
      <h2>My account</h2>
      <Edit />
      {/* 👇 level 2: Home just passes App's function down to Delete */}
      <Delete onDeleted={onDeleted} />
    </div>
  );
};
 
export default Home;
 
























































