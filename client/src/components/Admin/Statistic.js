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
            <input className="form-control" type="year" style={{ width: '200px' }} value={month} onChange={event => setMonth(event.target.value)} />
            <br></br>
            <label>Chọn Năm</label>
            <input className="form-control" type="year" placeholder="Chọn năm" style={{ width: '200px' }} value={year} onChange={event => setYear(event.target.value)} />


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
                                        data.salesByMonth && data.totalSales ?
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