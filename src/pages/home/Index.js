import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './index.scss';

// 變色的classname屬性要用props傳送，用三元運算流程判斷
// React Observe 資料變化改變CSS https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c
function Index() {
  return (
    <>
      <Header />
      <div className="home">
        <div style={{ display: 'flex' }}>
          <AsideLeft />
          <div style={{ width: '100%' }}>
            <Title title={''} />
            <br />
            <div className="home-page">
              {/* PC index top */}
              {/* todo: scroll down opacity 0 */}
              <div className="d-none d-sm-block">
                <div className="pc-index-top">
                  <svg width="65" height="105" viewBox="0 0 65 105" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.4807 58.6819C26.668 58.7901 26.8805 58.8471 27.0968 58.8471C27.368 58.8471 27.6316 58.7575 27.8468 58.5923C28.062 58.4271 28.2167 58.1955 28.2869 57.9334C28.3571 57.6713 28.3389 57.3933 28.2351 57.1426C28.1313 56.8919 27.9477 56.6825 27.7128 56.5468L9.64021 46.1071C9.1418 45.8186 8.65448 44.9748 8.65448 44.4009V42.6071L23.5514 51.2163C23.7386 51.325 23.9511 51.3822 24.1675 51.3821C24.4389 51.3823 24.7028 51.2929 24.9182 51.1276C25.1336 50.9624 25.2885 50.7306 25.3587 50.4683C25.4289 50.206 25.4106 49.9278 25.3066 49.677C25.2027 49.4262 25.0188 49.2167 24.7836 49.0811L8.65448 39.7598V19.274C8.65448 18.6996 9.14303 17.8545 9.64021 17.5679L31.3877 5.00414C31.8868 4.71691 32.862 4.71691 33.3592 5.00414L54.896 17.4462L33.3404 30.4134C32.0965 31.1616 31.1589 32.8203 31.1589 34.2719V60.6722C31.1589 60.9992 31.2887 61.3128 31.5198 61.5439C31.7508 61.7751 32.0642 61.905 32.391 61.905C32.5529 61.9052 32.7133 61.8734 32.8629 61.8115C33.0126 61.7496 33.1485 61.6589 33.2631 61.5444C33.3776 61.4299 33.4685 61.2939 33.5305 61.1443C33.5925 60.9946 33.6244 60.8342 33.6244 60.6722V34.2719C33.6244 33.6907 34.1117 32.8259 34.6101 32.5269L56.0924 19.6033V44.1112L50.8385 41.0761C50.6983 40.9939 50.5433 40.9403 50.3823 40.9182C50.2213 40.8962 50.0575 40.9063 49.9004 40.9478C49.7433 40.9894 49.596 41.0616 49.4669 41.1604C49.3378 41.2591 49.2296 41.3824 49.1483 41.5232C49.0671 41.664 49.0144 41.8195 48.9935 41.9807C48.9726 42.142 48.9837 42.3057 49.0263 42.4626C49.0688 42.6195 49.142 42.7665 49.2416 42.8949C49.3411 43.0234 49.4651 43.1309 49.6064 43.2113L55.1092 46.3894C55.9199 46.8584 56.7818 46.8985 57.4718 46.4997C58.1618 46.1009 58.558 45.3347 58.558 44.3972V19.274C58.558 17.8138 57.6043 16.1625 56.3401 15.4321L34.5926 2.86899C33.3265 2.13858 31.421 2.13919 30.1568 2.86899L8.40928 15.4321C7.14386 16.1625 6.19141 17.8138 6.19141 19.274V44.4009C6.19141 45.8605 7.14509 47.5124 8.40928 48.2422L26.4807 58.6819ZM25.8639 40.4171V43.6724L13.2756 36.3991C12.9932 36.244 12.6613 36.2058 12.3511 36.2925C12.0408 36.3793 11.7769 36.5842 11.6158 36.8633C11.4547 37.1424 11.4092 37.4735 11.4892 37.7857C11.5691 38.0979 11.7681 38.3664 12.0434 38.5336L26.4806 46.8757C26.6678 46.9842 26.8803 47.0412 27.0967 47.0409V47.0415C27.4234 47.0415 27.7368 46.9117 27.9679 46.6805C28.199 46.4493 28.3288 46.1357 28.3288 45.8088V39.7837C28.332 39.7327 28.332 39.6816 28.3288 39.6307V33.6044C28.3288 33.388 28.2719 33.1754 28.1637 32.988C28.0556 32.8006 27.9 32.645 27.7127 32.5368L13.2756 24.1953C13.1353 24.1101 12.9795 24.0538 12.8172 24.0297C12.6549 24.0056 12.4894 24.0141 12.3305 24.0549C12.1715 24.0956 12.0223 24.1677 11.8916 24.2669C11.7609 24.3661 11.6513 24.4904 11.5692 24.6326C11.4871 24.7747 11.4343 24.9318 11.4137 25.0947C11.3932 25.2575 11.4054 25.4229 11.4495 25.581C11.4937 25.7391 11.569 25.8867 11.671 26.0153C11.773 26.1439 11.8996 26.2508 12.0434 26.3298L25.8639 34.3157V37.5699L13.2769 30.2969C12.9941 30.136 12.6591 30.0935 12.3451 30.1788C12.0311 30.2641 11.7636 30.4702 11.6009 30.7521C11.4382 31.0341 11.3935 31.3689 11.4767 31.6836C11.5599 31.9984 11.7641 32.2674 12.0448 32.432L25.8639 40.4171ZM30.3276 27.6994C30.515 27.8074 30.7274 27.8642 30.9437 27.864C31.1597 27.8632 31.3717 27.8056 31.5585 27.6969L36.8759 24.6255C37.0633 24.5174 37.219 24.3617 37.3272 24.1742C37.4355 23.9868 37.4924 23.7741 37.4924 23.5576C37.4924 23.3411 37.4355 23.1285 37.3272 22.941C37.219 22.7535 37.0633 22.5979 36.8759 22.4897L24.6554 15.4525L27.5084 13.8055L40.9629 21.5541C41.1502 21.6623 41.3627 21.7192 41.579 21.7192C41.7953 21.7192 42.0078 21.6623 42.1951 21.5541L47.5118 18.4832C47.699 18.375 47.8544 18.2194 47.9624 18.0321C48.0705 17.8447 48.1273 17.6323 48.1273 17.416C48.1273 17.1997 48.0705 16.9872 47.9624 16.7999C47.8544 16.6126 47.699 16.457 47.5118 16.3487L33.4412 8.24265C33.158 8.07918 32.8215 8.03497 32.5056 8.11976C32.1898 8.20455 31.9206 8.41139 31.7572 8.69477C31.5938 8.97815 31.5496 9.31487 31.6344 9.63085C31.7191 9.94683 31.9259 10.2162 32.2091 10.3797L44.4278 17.4188L41.5766 19.0657L28.1239 11.3147C27.9366 11.2065 27.7241 11.1495 27.5078 11.1495C27.2915 11.1495 27.079 11.2065 26.8917 11.3147L21.575 14.3861C21.3875 14.4943 21.2319 14.6499 21.1236 14.8374C21.0154 15.0249 20.9584 15.2375 20.9584 15.454C20.9584 15.6705 21.0154 15.8832 21.1236 16.0707C21.2319 16.2581 21.3875 16.4138 21.575 16.5219L33.7943 23.561L30.9431 25.208L17.4879 17.4564C17.3476 17.3716 17.1917 17.3157 17.0295 17.292C16.8672 17.2683 16.7019 17.2772 16.5432 17.3183C16.3844 17.3593 16.2355 17.4316 16.105 17.531C15.9746 17.6303 15.8652 17.7547 15.7835 17.8969C15.7017 18.039 15.6491 18.1961 15.6287 18.3589C15.6084 18.5216 15.6207 18.6868 15.665 18.8448C15.7092 19.0027 15.7846 19.1502 15.8865 19.2786C15.9885 19.4071 16.1151 19.5139 16.2589 19.5927L30.3276 27.6994Z"
                      fill="#C4C4C4"
                    />
                    <g clipPath="url(#clip0_868_3175)">
                      <path
                        d="M14.5962 95.9375L7.71927 99.9454L7.61457 89.2945L15.8664 84.4848C16.1521 84.3158 16.3599 84.0396 16.4445 83.7164C16.5291 83.3933 16.4837 83.0495 16.3182 82.7601C16.1526 82.4706 15.8803 82.259 15.5608 82.1714C15.2413 82.0839 14.9004 82.1274 14.6125 82.2926L7.58635 86.3878L7.51551 79.1651L15.6175 74.4434C15.7613 74.3609 15.8874 74.2505 15.9888 74.1186C16.0901 73.9867 16.1645 73.8358 16.2079 73.6747C16.2512 73.5136 16.2625 73.3455 16.2412 73.18C16.2199 73.0144 16.1664 72.8548 16.0837 72.7102C16.001 72.5657 15.8908 72.4391 15.7594 72.3377C15.6281 72.2363 15.4781 72.1621 15.3183 72.1194C15.1584 72.0768 14.9918 72.0664 14.8279 72.0891C14.6641 72.1117 14.5063 72.1668 14.3636 72.2512L5.63091 77.3425C5.43845 77.4546 5.27897 77.6164 5.16881 77.8112C5.05865 78.006 5.00176 78.2269 5.00397 78.4512L5.23594 102.138C5.23813 102.359 5.29766 102.575 5.4086 102.766C5.51955 102.957 5.67804 103.115 5.86829 103.224C6.05854 103.334 6.27391 103.391 6.49295 103.391C6.712 103.39 6.92708 103.332 7.11677 103.221L15.8501 98.1297C15.9939 98.0472 16.12 97.9368 16.2214 97.8049C16.3227 97.673 16.3971 97.5221 16.4405 97.3611C16.4838 97.2 16.4951 97.0318 16.4738 96.8663C16.4525 96.7008 16.399 96.5411 16.3163 96.3966C16.2336 96.252 16.1234 96.1254 15.992 96.024C15.8607 95.9226 15.7107 95.8484 15.5509 95.8058C15.391 95.7631 15.2243 95.7528 15.0605 95.7754C14.8967 95.798 14.7389 95.8531 14.5962 95.9375Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M20.5097 104.792C20.1772 104.792 19.8583 104.659 19.6231 104.422C19.388 104.184 19.2559 103.862 19.2559 103.527V78.4387C19.256 78.2166 19.314 77.9985 19.424 77.8062C19.5341 77.6139 19.6923 77.4542 19.8828 77.3432L27.3008 73.0126C27.4914 72.9015 27.7075 72.843 27.9276 72.843C28.1476 72.843 28.3638 72.9014 28.5544 73.0124C28.745 73.1234 28.9033 73.2831 29.0134 73.4754C29.1235 73.6678 29.1815 73.8859 29.1816 74.1081V92.7392C29.1813 92.961 29.1232 93.1789 29.0132 93.3709C28.9031 93.563 28.745 93.7225 28.5547 93.8334L24.8263 96.0192C24.5387 96.1878 24.1965 96.2342 23.8751 96.1482C23.5536 96.0621 23.2792 95.8507 23.1122 95.5604C22.9452 95.2701 22.8992 94.9248 22.9845 94.6003C23.0697 94.2758 23.2792 93.9988 23.5667 93.8302L26.6714 92.0101V76.3021L21.7599 79.169V103.527C21.7599 103.862 21.6283 104.183 21.394 104.42C21.1596 104.658 20.8416 104.791 20.5097 104.792Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M42.5339 84.1185C42.7541 84.1183 42.9703 84.0596 43.1609 83.9483L51.3212 79.1823C51.6014 79.0105 51.8039 78.7349 51.8852 78.4143C51.9666 78.0938 51.9203 77.7538 51.7564 77.4673C51.5924 77.1808 51.3238 76.9704 51.0081 76.8813C50.6924 76.7922 50.3547 76.8315 50.0673 76.9907L41.9051 81.7586C41.6664 81.898 41.4799 82.1131 41.3745 82.3703C41.2691 82.6276 41.2506 82.9128 41.322 83.1817C41.3934 83.4506 41.5507 83.6883 41.7695 83.8579C41.9882 84.0275 42.2562 84.1195 42.532 84.1198L42.5339 84.1185Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M58.9399 101.289L51.6084 97.7944C51.4203 97.6917 51.2092 97.6393 50.9954 97.6422C50.7815 97.6451 50.5719 97.7031 50.3865 97.8108L43.8412 101.626L43.8274 97.7324L54.957 91.4083C55.1518 91.2982 55.314 91.1375 55.4268 90.9429C55.5395 90.7483 55.5987 90.5269 55.5983 90.3014L55.5689 80.6935C55.5681 80.4717 55.5096 80.254 55.3992 80.0622C55.2888 79.8704 55.1305 79.7113 54.94 79.6007C54.7495 79.4901 54.5336 79.4321 54.3139 79.4323C54.0941 79.4324 53.8783 79.4909 53.688 79.6018L41.9121 86.46C41.7209 86.5715 41.5621 86.732 41.4521 86.9252C41.342 87.1185 41.2844 87.3376 41.2852 87.5606L41.304 92.219C41.2833 92.3515 41.2833 92.4864 41.304 92.6189L41.341 103.541C41.3417 103.838 41.447 104.126 41.6381 104.353C41.6381 104.358 41.6425 104.364 41.6457 104.369C41.8119 104.66 42.0858 104.872 42.407 104.959C42.7282 105.046 43.0705 105 43.3585 104.832L51.0699 100.339L57.8704 103.581C58.0193 103.652 58.1807 103.693 58.3454 103.701C58.51 103.709 58.6746 103.685 58.8299 103.629C58.9851 103.573 59.1278 103.486 59.25 103.375C59.3721 103.263 59.4712 103.128 59.5415 102.977C59.6119 102.827 59.6522 102.664 59.6602 102.498C59.6681 102.332 59.6435 102.165 59.5877 102.009C59.5319 101.852 59.4461 101.708 59.3352 101.585C59.2243 101.462 59.0904 101.362 58.9412 101.292L58.9399 101.289ZM43.818 94.8339L43.8118 93.1353L53.0799 87.734L53.0855 89.5692L43.818 94.8339ZM53.0648 82.8863L53.0711 84.8153L43.8023 90.2173L43.7954 88.2883L53.0648 82.8863Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M59.2489 75.8458L50.7976 72.1056C50.2915 71.9769 49.7583 72.0083 49.2704 72.1955L35.0131 80.5048C34.8693 80.5873 34.7431 80.6977 34.6418 80.8296C34.5405 80.9616 34.466 81.1124 34.4227 81.2735C34.3794 81.4346 34.3681 81.6027 34.3894 81.7683C34.4107 81.9338 34.4642 82.0934 34.5469 82.238C34.6296 82.3825 34.7398 82.5092 34.8711 82.6106C35.0025 82.712 35.1524 82.7861 35.3123 82.8288C35.4722 82.8714 35.6388 82.8818 35.8027 82.8592C35.9665 82.8365 36.1243 82.7814 36.2669 82.697L50.172 74.5965L58.242 78.1677C58.5466 78.3025 58.8918 78.3096 59.2016 78.1875C59.5114 78.0653 59.7605 77.824 59.894 77.5165C60.0275 77.209 60.0346 76.8606 59.9136 76.5479C59.7926 76.2351 59.5535 75.9837 59.2489 75.8489V75.8458Z"
                        fill="#C4C4C4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_868_3175">
                        <rect
                          width="55"
                          height="33"
                          fill="white"
                          transform="translate(5 72)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              {/* index content */}
              {/* todo: 下排圖片改變時，process的innerHTML要換字 */}
              <div className="index-content">
                <div className="en-title-14-10 content-top d-flex justify-content-between">
                  <div className="col-12 number">NO.897532</div>
                  <div className="col-12 process">Constructing...</div>
                </div>
                {/* todo: content-bottom 當火車頭 */}
                <div className="content-bottom d-flex justify-content-evenly">
                  <div className="col-12 index-cube-img">
                    <img src="/img/home/intro-contructing.svg" alt="cube" />
                  </div>
                  <div className="col-12 index-cube-txt">
                    <img
                      src="/img/home/intro-contructing-txt.svg"
                      alt="description"
                    />
                  </div>
                </div>
              </div>
              {/* view product & scroll area */}
              <div className="en-title-14-5 view-product-area d-flex justify-content-end">
                <p>View Product</p>
                <div className="view-product-arrow">
                  <img src="/img/home/index-arrowsm.svg" alt="view-product" />
                </div>
              </div>
              <div className="scroll-hint">
                <p className="scroll-down">SCROLL</p>
                <div className="vertical-line">
                  <img src="/img/home/intro-vertical-line.svg" alt="scroll" />
                </div>
              </div>
            </div>
            {/* about us */}
            <div className="home-page">
              <div className="en-title-24 about-us-title">About us</div>
              <div className="about-us-content">
                <div className="about-us-text-area">
                  <div className="about-title">
                    <p className="ch-title-22 about-ch-title">創造新食感</p>
                    <p className="en-title-14-10 about-en-title">
                      Create New Taste
                    </p>
                  </div>
                  <div className="about-content">
                    <p className="ch-cont-14 about-ch-content">
                      新穎的3D食品列印技術 <br />
                      前所未有的口感與視覺衝擊
                    </p>
                  </div>
                </div>
                <div className="about-img">
                  <img src="/img/home/index-aboutus01.svg" alt="aboutus01" />
                </div>
              </div>
            </div>
            <div className="home-page">
              <div className="en-title-24 about-us-title">About us</div>
              <div className="about-us-content">
                <div className="about-us-text-area">
                  <div className="about-title">
                    <p className="ch-title-22 about-ch-title">精準客製飲食</p>
                    <p className="en-title-14-10 about-en-title">
                      Customized Diet
                    </p>
                  </div>
                  <div className="about-content">
                    <p className="ch-cont-14 about-ch-content">
                      量身打造的菜單
                      <br />
                      精準掌握營養素的攝取
                    </p>
                  </div>
                </div>
                <div className="about-img">
                  <img src="/img/home/index-aboutus02.svg" alt="aboutus02" />
                </div>
              </div>
            </div>
            <div className="home-page">
              <div className="en-title-24 about-us-title">About us</div>
              <div className="about-us-content">
                <div className="about-us-text-area">
                  <div className="about-title">
                    <p className="ch-title-22 about-ch-title">食物藝術</p>
                    <p className="en-title-14-10 about-en-title">Food Art</p>
                  </div>
                  <div className="about-content">
                    <p className="ch-cont-14 about-ch-content">
                      餐桌上不再是平凡無奇的菜餚
                      <br />
                      而是豐富的食物藝術品
                    </p>
                  </div>
                </div>
                <div className="about-img">
                  <img src="/img/home/index-aboutus03.svg" alt="aboutus03" />
                </div>
              </div>
            </div>
            {/* promotion */}
            {/* todo scroll down to change bg color */}
            <div className="home-page">
              <Title title={'Promotion'} />
              <div className="promotion-wrap">
                <ul className="promotion-list">
                  <li>
                    <div className="promotion-card">
                      <div className="promotion-img">
                        <img
                          src="/img/home/sushi/鮪魚壽司.png"
                          alt="tuna-sushi"
                        />
                      </div>
                      <div className="ch-title-22 promotion-prod-ch-name">
                        鮪魚壽司
                      </div>
                      <div className="en-title-18 promotion-prod-en-name">
                        Tuna Sushi
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="promotion-card">
                      <div className="promotion-img">
                        <img
                          src="/img/home/sushi/鮪魚壽司.png"
                          alt="tuna-sushi"
                        />
                      </div>
                      <div className="ch-title-22 promotion-prod-ch-name">
                        鮪魚壽司
                      </div>
                      <div className="en-title-18 promotion-prod-en-name">
                        Tuna Sushi
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* just for you --> */}
            <div className="home-page">
              <Title title={'Just For You'} />
              {/* <div className="page-title">Just For You</div> */}
              <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                <div className="col-12 index-category-name">CUSTOMIZATION</div>
                <div className="col-12 index-category-name">MEAL PLAN</div>
              </div>
              <div className="index-category-content">
                <div className="index-category-img d-flex justify-content-center">
                  <img
                    className="d-md-none"
                    src="/img/home/jfy-mobile-img.svg"
                    alt="just-for-you"
                  />
                  <img
                    className="d-none d-sm-block"
                    src="/img/home/jfy-pc-img.svg"
                    alt="just-for-you"
                  />
                </div>
                <div className="just-for-you-txt">
                  <p className="ch-title-22 jfy-category-title">客製化服務</p>
                  <p className="ch-cont-14 jfy-category-content">
                    創意打造專屬你的壽司
                    <br />
                    漂亮擺盤，經驗你的視覺感官
                  </p>
                </div>
              </div>
              <div className="index-view-more d-flex justify-content-end">
                <p className="en-cont-14">Customization</p>
                <div className="view-product-arrow">
                  <img
                    src="/img/home/index-arrowsm-black.svg"
                    alt="view-customization"
                  />
                </div>
              </div>
            </div>
            {/* news  */}
            <div className="home-page">
              <Title title={'Latest News'} />
              {/* <div className="page-title">Latest News</div> */}
              <div className="en-title-14-5 index-category d-flex justify-content-evenly">
                <div className="col-8 index-category-name">NEWS</div>
                <div className="col-8 index-category-name">EVENTS</div>
                <div className="col-8 index-category-name">SHARE</div>
              </div>
              <div className="news-carousel-wrap d-flex overflow-hidden">
                <div className="col-24 lastest-new-content">
                  <div className="index-category-img news-img d-flex justify-content-center">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="promo01"
                    />
                  </div>
                  <div className="news-right-wrap">
                    <div className="news-content-top d-flex justify-content-between">
                      <div className="news-title">春天來了！</div>
                      <div className="news-tag">新品上市</div>
                    </div>
                    <div className="news-date">2022.05.06</div>
                    <div className="news-text d-none d-md-block">
                      春天新品上市！
                      <br />
                      清爽羊羹搭配酸甜的櫻花口感
                      <br />
                      給你滿滿的初戀滋味
                    </div>
                  </div>
                </div>
                <div className="col-24 lastest-new-content">
                  <div className="index-category-img news-img d-flex justify-content-center">
                    <img
                      src="/img/home/news/pro-cherry-blossom.png"
                      alt="promo01"
                    />
                  </div>
                  <div className="news-right-wrap">
                    <div className="news-content-top d-flex justify-content-between">
                      <div className="news-title">春天來了！</div>
                      <div className="news-tag">新品上市</div>
                    </div>
                    <div className="news-date">2022.05.06</div>
                    <div className="news-text d-none d-md-block">
                      春天新品上市！
                      <br />
                      清爽羊羹搭配酸甜的櫻花口感
                      <br />
                      給你滿滿的初戀滋味
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-news-pagination">
                <div className="latest-news-left-arrow d-none d-md-block">
                  <img src="/img/home/left.svg" alt="left-arrow" />
                </div>
                <div className="latest-news-dots d-none d-md-block">
                  <ul className="pagination-list">
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                    <li className="pagination-dots"></li>
                  </ul>
                </div>
                <div className="latest-news-right-arrow d-none d-md-block">
                  <img src="/img/home/right.svg" alt="right-arrow" />
                </div>
              </div>
              <div className="index-view-more d-flex justify-content-end">
                <p className="en-cont-14">Browse News</p>
                <div className="view-product-arrow">
                  <img
                    src="/img/home/index-arrowsm-black.svg"
                    alt="browse-news"
                  />
                </div>
              </div>
            </div>
            {/* footer */}
            {/* todo scroll down to change bg color */}
            <div className="home-page">
              <Title title={''} />
              <div className="footer-top">
                <img
                  src="/img/home/footer-toproduct-arrow.svg"
                  alt="to-product"
                />
              </div>
              <div className="footer-logo d-none d-md-block">
                <img src="/img/home/footer-pc-logo.svg" alt="footer-logo" />
              </div>
              <div className="footer-bottom">
                <div className="footer-contact">
                  <p className="en-title-14-10 footer-slogan">
                    Print A Wonderful Life
                  </p>
                </div>
                <div className="footer-link-area">
                  <ul className="ch-cont-12 footer-link">
                    <li>關於我們</li>
                    <li>聯繫我們</li>
                    <li>加入我們</li>
                  </ul>
                  <ul className="ch-cont-12 footer-link">
                    <li>隱私權</li>
                    <li>客服中心</li>
                  </ul>
                </div>
              </div>
              <div className="footer-social">
                <div className="footer-social-icon">
                  <img src="/img/home/facebook.svg" alt="facebook" />
                </div>
                <div className="footer-social-icon">
                  <img src="/img/home/twitter.svg" alt="twitter" />
                </div>
                <div className="footer-social-icon">
                  <img src="/img/home/instagram.svg" alt="instagram" />
                </div>
              </div>
              <div className="en-cont-12 footer-copy-right">
                PRIMEAL COPY RIGHT &copy; 2022
              </div>
            </div>
            {/* <Footer /> */}
          </div>
          <AsideRight />
        </div>
      </div>
    </>
  );
}

export default Index;
