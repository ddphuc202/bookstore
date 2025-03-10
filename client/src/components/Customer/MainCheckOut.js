import { useEffect, useState } from 'react';
import image from '../../image/Khai_Tam.png';
import { Link } from 'react-router-dom';
import { createNewOrder } from '../../services/OrderServices';
import { useNavigate } from 'react-router-dom';
import { getCustomerById } from '../../services/CustomerServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainCheckOut = () => {

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (!data.name || !data.phone || !data.address) {
            toast.error("Vui lòng nhập đủ thông tin nhận hàng!")
            return;
        }
        if (!data.name) {
            toast.error("Vui lòng nhập đủ thông tin nhận hàng!")
            return;
        }
        if (!data.phone) {
            toast.error("Vui lòng nhập đủ thông tin nhận hàng!")
            return;
        }
        if (!data.address) {
            toast.error("Vui lòng nhập đủ thông tin nhận hàng!")
            return;
        }
        createNewOrder(data, navigate)
    }

    useEffect(() => {
        getCustomerById(localStorage.getItem('userId'), setData);
    }, [])

    return (
        <>
            <ToastContainer />
            <main className="main">
                <header className="main__header">
                    <div className="logo logo--left">
                        <Link to={"/"}>
                            <img className="logo__image  logo__image--large " alt="Nhã Nam"
                                src={image} />
                        </Link>
                    </div>
                </header>
                <div className="main__content">
                    <article className="animate-floating-labels row">
                        <div className="col col--two">
                            <section className="section">
                                <div className="section__header">
                                    <div className="layout-flex">
                                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                            <i
                                                className="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop"></i>

                                            Thông tin nhận hàng

                                        </h2>

                                    </div>
                                </div>


                                <div className="section__content">
                                    <div className="fieldset">

                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label className="field__label">Họ và tên</label>
                                                <input name="billingName" id="billingName" type="text"
                                                    className="form-control" value={data.name} onChange={event => setData({ ...data, name: event.target.value })} />
                                            </div>

                                        </div>

                                        <div className="field ">
                                            <div className="field__input-wrapper field__input-wrapper--connected"
                                                data-define="{phoneInput: new InputPhone(this)}">
                                                <label className="field__label">
                                                    Số điện thoại
                                                </label>
                                                <input name="billingPhone" id="billingPhone" type="text"
                                                    className="form-control" value={data.phone} onChange={event => setData({ ...data, phone: event.target.value })} required />
                                            </div>
                                        </div>


                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label className="field__label">
                                                    Địa chỉ
                                                </label>
                                                <input name="billingAddress" id="billingAddress" type="text"
                                                    className="form-control" value={data.address} onChange={event => setData({ ...data, address: event.target.value })} required />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div>
                                            <button className='btn btn-success' onClick={() => handleSubmit()}>
                                                <h5 style={{ marginTop: "5px" }}>ĐẶT HÀNG</h5>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>


                        <div className="col col--two">
                            <section className="section" >
                                <div className="section__header">
                                    <div className="layout-flex">
                                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                            <i className="fa fa-truck fa-lg section__title--icon hide-on-desktop"></i>
                                            Vận chuyển
                                        </h2>
                                    </div>
                                </div>
                                <div className="section__content" id="shippingMethodList">
                                    <div className="alert alert--info">
                                        Vui lòng nhập thông tin giao hàng
                                    </div>
                                </div>
                            </section>

                            <section className="section">
                                <div className="section__header">
                                    <div className="layout-flex">
                                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                                            <i
                                                className="fa fa-credit-card fa-lg section__title--icon hide-on-desktop"></i>
                                            Thanh toán
                                        </h2>
                                    </div>
                                </div>
                                <div className="section__content">
                                    <div className="content-box">
                                        <div className="content-box__row">
                                            <div className="radio-wrapper">
                                                <label className="radio__label">
                                                    <span className="radio__label__primary">Vui lòng thanh toán khi nhận
                                                        hàng (COD) </span>
                                                    <span className="radio__label__accessory">
                                                        <span className="radio__label__icon">
                                                            <i className="payment-icon payment-icon--4"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>

            </main>
        </>
    )
}
export default MainCheckOut;