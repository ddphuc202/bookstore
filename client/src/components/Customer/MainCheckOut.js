import image from '../../image/Khai_Tam.png';
import { Link } from 'react-router-dom';
const MainCheckOut = () => {
    return (
        <>
            <main class="main">
                <header class="main__header">
                    <div class="logo logo--left">
                        <Link to={"/"}>
                            <img class="logo__image  logo__image--large " alt="Nhã Nam"
                                src={image} />
                        </Link>
                    </div>
                </header>
                <div class="main__content">
                    <article class="animate-floating-labels row">
                        <div class="col col--two">
                            <section class="section">
                                <div class="section__header">
                                    <div class="layout-flex">
                                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                            <i
                                                class="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop"></i>

                                            Thông tin nhận h�&nbsp;ng

                                        </h2>


                                        <a
                                            href="/account/login?returnUrl=/checkout/82169919ff2e49b5a33976ad133c7f89">
                                            <i class="fa fa-user-circle-o fa-lg"></i>
                                            <span>Đăng nhập </span>
                                        </a>
                                    </div>
                                </div>


                                <div class="section__content">
                                    <div class="fieldset">
                                        <div class="field " >
                                            <div class="field__input-wrapper">
                                                <label for="email" class="field__label">
                                                    Email
                                                </label>
                                                <input name="email" id="email" type="email" class="field__input"
                                                    data-bind="email" value="" />
                                            </div>

                                        </div>



                                        <div class="field "
                                            data-bind-class="{'field--show-floating-label': billing.name}">
                                            <div class="field__input-wrapper">
                                                <label for="billingName" class="field__label">Họ v�&nbsp;
                                                    tên</label>
                                                <input name="billingName" id="billingName" type="text"
                                                    class="field__input" data-bind="billing.name" value="" />
                                            </div>

                                        </div>

                                        <div class="field "
                                            data-bind-class="{'field--show-floating-label': billing.phone}">
                                            <div class="field__input-wrapper field__input-wrapper--connected"
                                                data-define="{phoneInput: new InputPhone(this)}">
                                                <label for="billingPhone" class="field__label">
                                                    Số điện thoại (tùy chọn)
                                                </label>
                                                <input name="billingPhone" id="billingPhone" type="tel"
                                                    class="field__input" data-bind="billing.phone" value="" />
                                                <div class="field__input-phone-region-wrapper">
                                                    <select class="field__input select-phone-region"
                                                        name="billingPhoneRegion" data-init-value="VN"></select>
                                                </div>
                                            </div>

                                        </div>


                                        <div class="field "
                                            data-bind-class="{'field--show-floating-label': billing.address}">
                                            <div class="field__input-wrapper">
                                                <label for="billingAddress" class="field__label">
                                                    Địa chỉ (tùy chọn)
                                                </label>
                                                <input name="billingAddress" id="billingAddress" type="text"
                                                    class="field__input" data-bind="billing.address" value="" />
                                            </div>

                                        </div>


                                        <div class="field field--show-floating-label ">
                                            <div class="field__input-wrapper field__input-wrapper--select2">
                                                <label for="billingProvince" class="field__label">Tỉnh
                                                    th�&nbsp;nh</label>
                                                <select name="billingProvince" id="billingProvince" size="1"
                                                    class="field__input field__input--select"
                                                    data-bind="billing.province" value=""
                                                    data-address-type="province" data-address-zone="billing">

                                                </select>
                                            </div>

                                        </div>

                                        <div class="field field--show-floating-label ">
                                            <div class="field__input-wrapper field__input-wrapper--select2">
                                                <label for="billingDistrict" class="field__label">
                                                    Quận huyện (tùy chọn)
                                                </label>
                                                <select name="billingDistrict" id="billingDistrict" size="1"
                                                    class="field__input field__input--select" value=""
                                                    data-bind="billing.district" data-address-type="district"
                                                    data-address-zone="billing">

                                                </select>
                                            </div>

                                        </div>

                                        <div class="field field--show-floating-label ">
                                            <div class="field__input-wrapper field__input-wrapper--select2">
                                                <label for="billingWard" class="field__label">
                                                    Phường xã (tùy chọn)
                                                </label>
                                                <select name="billingWard" id="billingWard" size="1"
                                                    class="field__input field__input--select" value=""
                                                    data-bind="billing.ward" data-address-type="ward"
                                                    data-address-zone="billing">

                                                </select>
                                            </div>

                                        </div>




                                    </div>
                                </div>
                            </section>

                            <div class="fieldset">
                                <h3 class="visually-hidden">Ghi chú</h3>
                                <div class="field " data-bind-class="{'field--show-floating-label': note}">
                                    <div class="field__input-wrapper">
                                        <label for="note" class="field__label">
                                            Ghi chú (tùy chọn)
                                        </label>
                                        <textarea name="note" id="note" class="field__input"
                                            data-bind="note"></textarea>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div class="col col--two">

                            <section class="section" >
                                <div class="section__header">
                                    <div class="layout-flex">
                                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                            <i class="fa fa-truck fa-lg section__title--icon hide-on-desktop"></i>
                                            Vận chuyển
                                        </h2>
                                    </div>
                                </div>
                                <div class="section__content" id="shippingMethodList">
                                    <div class="alert alert--loader spinner spinner--active">

                                    </div>


                                    <div class="alert alert--info hide">
                                        Vui lòng nhập thông tin giao hàng
                                    </div>
                                </div>
                            </section>

                            <section class="section">
                                <div class="section__header">
                                    <div class="layout-flex">
                                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                            <i
                                                class="fa fa-credit-card fa-lg section__title--icon hide-on-desktop"></i>
                                            Thanh toán
                                        </h2>
                                    </div>
                                </div>
                                <div class="section__content">


                                    <div class="content-box">


                                        <div class="content-box__row">
                                            <div class="radio-wrapper">
                                                <div class="radio__input">
                                                    <input name="paymentMethod" id="paymentMethod-432316"
                                                        type="radio" class="input-radio" />
                                                </div>
                                                <label for="paymentMethod-432316" class="radio__label">
                                                    <span class="radio__label__primary">Thanh toán khi giao
                                                        hàng (COD)</span>
                                                    <span class="radio__label__accessory">
                                                        <span class="radio__label__icon">
                                                            <i class="payment-icon payment-icon--4"></i>
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