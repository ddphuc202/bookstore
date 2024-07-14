import { useEffect, useState } from "react";
import { getCategories } from "../../services/GenresServices";
import 'bootstrap/dist/css/bootstrap.min.css';
const SideBarCategories = (props) => {

    const [records, setRecords] = useState([]);
    const [data, setData] = useState();

    const handleClick = (id) => {
        props.category(id)
        console.log(id)
    }



    useEffect(() => {
        getCategories(setRecords)
    }, [])

    return (
        <>
            <aside className="filter-sidebar side-bar left-content col-lg-3 col-md-4 col-sm-4">
                <div className="wrap_background_aside asidecollection">
                    <div className="row">
                        <div className="col-12 col-lg-12 order-1 order-lg-2">
                            <div className="filter-content aside-filter">
                                <div className="filter-container">

                                    <aside className="aside-item filter-vendor f-left">
                                        <div className="aside-title">
                                            <h2 className="title-filter title-head margin-top-0"><span
                                                className="leaf">Thể Loại</span></h2>
                                        </div>
                                        <div className="aside-content margin-top-0 filter-group">
                                            <ul>
                                                <li className="filter-item filter-item--check-box filter-item--green vendorxxx">
                                                    <span>
                                                        <label >
                                                            <input className="form-check-input" type="radio"
                                                                value={0}
                                                                onClick={() => handleClick(0)}
                                                                checked={0}
                                                                id="check-item"
                                                            />
                                                            <span htmlFor='check-item' style={{ marginLeft: "5px" }}>Mặc định</span>
                                                        </label>
                                                    </span>
                                                </li>
                                                {Array.isArray(records.categories) && records.categories.map((item, index) => (
                                                    <li key={index} className="filter-item filter-item--check-box filter-item--green vendorxxx">
                                                        <span>
                                                            <label >
                                                                <input className="form-check-input" type="radio"
                                                                    value={item.id}

                                                                    onClick={() => handleClick(item.id)}
                                                                    checked={records.id === item.id}
                                                                    id="check-item"
                                                                />
                                                                <span htmlFor='check-item' style={{ marginLeft: "5px" }} >{item.name}</span>
                                                            </label>
                                                        </span>
                                                    </li>
                                                ))}


                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    )
}
export default SideBarCategories;