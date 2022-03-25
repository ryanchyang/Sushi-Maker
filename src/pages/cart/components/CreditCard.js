import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { FaBitcoin, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import Payment from 'payment';
import config from '../../../Config';

function clearNumber(value = '') {
  return value.replace(/\D+/g, '');
}
export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}

class CreditCard extends React.Component {
  state = {
    // cvc: '',
    // expiry: '',
    focus: '',
    creditcard_holder: '',
    order_num: '',
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  // 表單送出
  handleSubmit = e => {
    e.preventDefault();
    // TODO:  member id =1 鮮血死 測試用
    const mem_id = 1;
    // const mem_id = getMemId();
    // console.log('mem_id:', mem_id);
    // const { id } = useParams();

    // get form data
    const formData = new FormData(e.target);
    const dataObj = {};
    for (let i of formData) {
      dataObj[i[0]] = i[1];
    }
    dataObj.mem_id = mem_id;
    console.log('dataObj', { dataObj });

    // fetch
    const r = fetch(config.POST_PAY_INFO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    })
      .then(r => r.json())
      .then(obj => {
        this.setState({ r: dataObj });
        console.log('obj', obj);
        if (obj.success) {
          console.log(obj.success);
        }
      });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          className="my-3"
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.creditcard_holder}
          number={this.state.order_num}
        />
        <form
          ref={c => (this.form = c)}
          onSubmit={this.handleSubmit}
          className="my-5 creditForm"
        >
          <div className="form-group">
            <label htmlFor="credit-card" className="credit-card">
              請輸入信用卡卡號
            </label>
            &nbsp;&nbsp;
            <FaCcVisa className="mx-1" style={{ fontSize: '1.5rem' }} />
            <FaCcMastercard className="mx-1" style={{ fontSize: '1.5rem' }} />
            <FaCcJcb className="mx-1" style={{ fontSize: '1.5rem' }} />
            <FaBitcoin className="mx-1" style={{ fontSize: '1.5rem' }} />
            <input
              type="tel"
              name="order_num"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              maxLength="16"
              // pattern="/^\d{4}\d{4}\d{4}\d{4}$/"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="form-group">
            <label className="form-label ch-cont-14">持卡人姓名</label>
            <input
              type="text"
              name="creditcard_holder"
              className="form-control ch-cont-14 "
              placeholder="Name"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <div class="invalid-feedback">不可輸入特殊字元符號</div>
          </div>

          <div className="row">
            <div className="col-md-12 col-12">
              <label htmlFor="expire-date" className="expire-date">
                有效月/年
              </label>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="MM/YY"
                pattern="\d\d/\d\d"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-md-12 col-12">
              <label htmlFor="cvc" className="cvc">
                驗證碼
              </label>
              <input
                type="num"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                maxLength="3"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            {/* <input type="hidden" name="issuer" value={issuer} /> */}
            {/* <div className="form-actions"> */}
            <button
              className="btn btn-primary btn-block creditBtn"
              type="submit"
            >
              PAY
            </button>
            {/* </div> */}
          </div>
        </form>
        {/* {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )} */}
      </div>
    );
  }
}

export default CreditCard;
