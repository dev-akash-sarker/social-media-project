import RightFriends from "./RightFriends";
import Stories from "./stories";

export default function RightPart() {
  return (
    <>
      <div>
        <div>
          <RightFriends />
        </div>
        <div className="mt-10">
          <Stories />
        </div>
      </div>
    </>
  );
}
