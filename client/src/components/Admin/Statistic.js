import { useState, useEffect } from "react";
import { statisticSales } from "../../services/AdminsServices";
const Statistic = () => {

    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        statisticSales(month, year, setData)
    }, [month, year])


    return (
        <>
            <label>Chọn tháng</label>
            <select className="form-control" style={{ width: '200px' }} onChange={event => setMonth(event.target.value)} >
                <option>Tháng...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>

            <br></br>
            <label>Chọn Năm</label>
            <select className="form-control" style={{ width: '200px' }} onChange={event => setYear(event.target.value)} >
                <option>Năm...</option>
                <option value={2024}>2024</option>
                <option value={2023}>2023</option>
            </select>
            <br></br>

            <div className="statistic">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2" >
                        <div className="card-body" >
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Doanh Thu (Tháng)</div>
                                    {
                                        data.salesByMonth && data.totalSales ?
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{Number(data.salesByMonth).toLocaleString('vi-VN')}đ</div>
                                            : <div className="h5 mb-0 font-weight-bold text-gray-800">0đ</div>
                                    }

                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Tổng Doanh Thu </div>
                                    {
                                        data.totalSales ?
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{Number(data.totalSales).toLocaleString('vi-VN')}đ</div>
                                            : <div className="h5 mb-0 font-weight-bold text-gray-800">0đ</div>
                                    }

                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Statistic;