import LeftHomeData from "./LeftHomeData";
import LeftProfile from "./LeftProfile";

export default function LeftPart() {
  return (
    <>
      <div>
        <LeftProfile />
      </div>
      <div>
        <LeftHomeData />
      </div>
      <div>{/* <LeftHomeData /> */}</div>
    </>
  );
}
