import Failed from "./Failed";
import Data from "./Data";

export default function MainSection({ userData }) {
    return <>{userData ? <Data userData={userData} /> : <Failed />}</>;
}
