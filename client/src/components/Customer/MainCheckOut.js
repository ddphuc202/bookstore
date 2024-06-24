import { useState } from 'react';
import image from '../../image/Khai_Tam.png';
import { Link } from 'react-router-dom';
import { createNewOrder } from '../../services/OrderServices';
import { useNavigate } from 'react-router-dom';

const MainCheckOut = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        createNewOrder(name, phone, address, navigate)
    }

    return (
        <>
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
                                                    className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                                            </div>

                                        </div>

                                        <div className="field ">
                                            <div className="field__input-wrapper field__input-wrapper--connected"
                                                data-define="{phoneInput: new InputPhone(this)}">
                                                <label className="field__label">
                                                    Số điện thoại (tùy chọn)
                                                </label>
                                                <input name="billingPhone" id="billingPhone" type="text"
                                                    className="form-control" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                            </div>
                                        </div>


                                        <div className="field ">
                                            <div className="field__input-wrapper">
                                                <label className="field__label">
                                                    Địa chỉ (tùy chọn)
                                                </label>
                                                <input name="billingAddress" id="billingAddress" type="text"
                                                    className="form-control" value={address} onChange={(event) => setAddress(event.target.value)} />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div>
                                            <button className='btn btn-primary' onClick={() => handleSubmit()}>
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
                                                <div className="radio__input">
                                                    <input name="paymentMethod" id="paymentMethod-432316"
                                                        type="radio" className="input-radio" />
                                                </div>
                                                <label className="radio__label">
                                                    <span className="radio__label__primary">Thanh toán khi nhận
                                                        hàng (COD)</span>
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