import '../../styles/CheckOut.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainCheckOut from '../../components/Customer/MainCheckOut';
import SideBarCheckOut from '../../components/Customer/SideBarCheckOut';
const CheckOut = () => {
    return (
        <>
            <div className="wrap">
                <MainCheckOut />
                <SideBarCheckOut />
            </div>
        </>
    )
}
export default CheckOut;