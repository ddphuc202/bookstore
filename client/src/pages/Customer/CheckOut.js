import '../../styles/CheckOut.css';
import MainCheckOut from '../../components/Customer/MainCheckOut';
import SideBarCheckOut from '../../components/Customer/SideBarCheckOut';
const CheckOut = () => {
    return (
        <>
            <div class="wrap">
                <MainCheckOut />
                <SideBarCheckOut />
            </div>
        </>
    )
}
export default CheckOut;