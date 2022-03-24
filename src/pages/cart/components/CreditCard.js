import React from 'react';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { FaBitcoin, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import Payment from 'payment';
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
    cvc: '',
    expiry: '',
    // expiry_year: '',
    // expiry_mon: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          className="my-3"
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          // expiry_mon={this.state.expiry_mon}
          // expiry_year={this.state.expiry_year}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
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
              name="number"
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
              name="name"
              className="form-control ch-cont-14 "
              placeholder="Name"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <div class="invalid-feedback">
              Example invalid input group feedback
            </div>
          </div>
          {/*  */}
          {/* <div className="form-group mt-3">
            <div className=" d-flex justify-content-between">
              <div className="form-group col-md-8 px-0">
                <label htmlFor="expire-date" className="expire-date">
                  有效月
                </label>
                <select
                  className="custom-select form-control mt-3 "
                  aria-label="Default select example"
                  name="month"
                  // className="month"
                  id="month"
                >
                  <option value="01">01</option>
                  <option value="01">02</option>
                  <option value="01">03</option>
                  <option value="01">04</option>
                  <option value="01">05</option>
                  <option value="01">06</option>
                  <option value="01">07</option>
                  <option value="01">08</option>
                  <option value="01">09</option>
                  <option value="01">10</option>
                  <option value="01">11</option>
                  <option value="01">12</option>
                </select>
                <div class="invalid-feedback">請填寫信用卡有效月份</div>
              </div>
              <div className="mx-1"></div>
              <div class="form-group col-md-8 px-1">
                <label htmlFor="expire-date" className="expire-date">
                  有效年
                </label>
                <select
                  className="custom-select mt-3 "
                  aria-label="Default select example"
                  name="year"
                  // className="year"
                  id="year"
                >
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
                <div class="invalid-feedback">請填寫信用卡有效年份</div>
              </div>
              
           
              
              <div className="mx-1"></div>
              <div className="div col-md-8 px-0">
                <label htmlFor="cvc" className="cvc">
                  驗證碼
                </label>
                <input
                  type="text"
                  className="form-control mt-3"
                  maxLength="3"
                  size="15"
                />
                <div class="invalid-feedback">請填寫正確驗證碼</div>
              </div>
            </div>
          </div> */}
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
            <div className="form-actions">
              <button className="btn btn-primary btn-block creditBtn">PAY</button>
            </div>
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
