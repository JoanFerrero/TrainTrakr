import ListChairs from "../../../components/admin/chairs/ListChairs";
import { ChairsContext } from "../../../context/chairs/ChairsProvider";
import { useContext } from "react";

const ListChairsPage = () => {
  const { ChairsState } = useContext(ChairsContext);
  return (
    <div className="p-4 mt-4">
      <ListChairs chairs={ChairsState.chairs}/>
    </div>
  )
};

export default ListChairsPage;