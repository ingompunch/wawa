import React, { useEffect } from 'react';

const cardStyles = `
.card-page-wrapper {
  min-height: 100vh;
  background: #eef1f5;
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Malgun Gothic", Arial, sans-serif;
  color: #111827;
  padding: 24px;
  box-sizing: border-box;
}
.card-page-wrapper * {
  box-sizing: border-box;
}
.card-page-wrapper .card {
  max-width: 980px;
  margin: auto;
  background: #fff;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 18px 55px rgba(16, 36, 75, .14);
  position: relative;
}
.card-page-wrapper .top {
  height: 72px;
  padding: 18px 34px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.card-page-wrapper .partner {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 15px;
  font-weight: 800;
  color: #10244b;
}
.card-page-wrapper .partner img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 9px;
}
.card-page-wrapper .content {
  display: grid;
  grid-template-columns: 1fr 1px 0.88fr;
  gap: 0;
  padding: 14px 52px 50px;
}
.card-page-wrapper .left {
  padding-right: 48px;
}
.card-page-wrapper .divider {
  background: #dfe3e8;
  width: 1px;
}
.card-page-wrapper .right {
  padding-left: 48px;
  text-align: center;
}
.card-page-wrapper .airport {
  font-size: 18px;
  font-weight: 800;
  color: #b4873b;
  letter-spacing: 1px;
  margin-top: 18px;
}
.card-page-wrapper h1 {
  font-size: clamp(48px, 7vw, 78px);
  line-height: 1;
  letter-spacing: -5px;
  margin: 17px 0 12px;
  color: #161616;
}
.card-page-wrapper h1 .blue {
  color: #10244b;
}
.card-page-wrapper .sub {
  font-size: 23px;
  color: #596170;
  margin-bottom: 32px;
}
.card-page-wrapper .goldline {
  width: 72px;
  height: 3px;
  background: #c59a4b;
  margin-bottom: 27px;
}
.card-page-wrapper .info {
  max-width: 500px;
}
.card-page-wrapper .info a,
.card-page-wrapper .info div {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #111827;
  text-decoration: none;
  font-size: 21px;
  margin: 17px 0;
}
.card-page-wrapper .icon {
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 50%;
  background: #10244b;
  color: #d2aa62;
  display: grid;
  place-items: center;
  font-size: 20px;
}
.card-page-wrapper .right h2 {
  font-size: 27px;
  color: #10244b;
  margin: 19px 0 17px;
  letter-spacing: -1px;
}
.card-page-wrapper .qrbox {
  display: block;
  width: min(320px, 100%);
  margin: auto;
  background: #fff;
  border: 3px solid #10244b;
  border-radius: 18px;
  padding: 12px;
}
.card-page-wrapper .qrbox img {
  display: block;
  width: 100%;
  height: auto;
}
.card-page-wrapper .btn {
  display: block;
  width: min(320px, 100%);
  margin: 16px auto 0;
  padding: 15px;
  border-radius: 13px;
  background: #10244b;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 18px;
}
.card-page-wrapper .note {
  font-size: 13px;
  color: #697386;
  margin-top: 10px;
}
.card-page-wrapper .bottom {
  height: 18px;
  background: #10244b;
  position: relative;
}
.card-page-wrapper .bottom:before {
  content: "";
  position: absolute;
  right: 0;
  top: -95px;
  width: 50%;
  height: 120px;
  background: #10244b;
  border-radius: 100% 0 0 0;
}
@media (max-width: 720px) {
  .card-page-wrapper {
    padding: 12px;
  }
  .card-page-wrapper .top {
    height: 64px;
    padding: 13px 18px;
  }
  .card-page-wrapper .content {
    grid-template-columns: 1fr;
    padding: 5px 25px 35px;
  }
  .card-page-wrapper .left {
    padding-right: 0;
  }
  .card-page-wrapper .divider {
    display: none;
  }
  .card-page-wrapper .right {
    padding: 30px 0 0;
    margin-top: 18px;
    border-top: 1px solid #e3e6eb;
  }
  .card-page-wrapper h1 {
    font-size: clamp(43px, 12vw, 62px);
    letter-spacing: -4px;
  }
  .card-page-wrapper .sub {
    font-size: 19px;
  }
  .card-page-wrapper .info a,
  .card-page-wrapper .info div {
    font-size: 18px;
  }
}
`;

export const Card = () => {
  useEffect(() => {
    document.title = '와와주차대행 | 인천공항';
  }, []);

  return (
    <div className="card-page-wrapper">
      <style>{cardStyles}</style>
      <main className="card">
        <div className="top">
          <div className="partner">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACgCAIAAACUvom1AAAQAElEQVR4AeydCZhkVXn33/fcqurqbaZ7FlZBEFFBwaCfuCCoEVzygYYtagSNSlzwe1RQExONE6IxX9SYxceYCH4i4EL0wYgJoKAiuKCIKIthc2QZ1mF6eq3qqrr3nu/3nnOrugcxmemuHrqgD+95z7udc2/9/3XuvVXVjs43xv3sVpP6mJ/ZvCKLRQAYI54A+0iIkzwzyVLTstIWjQB4RjAxvF/0cju8AIzm8kgceIfPtLcmAGme2yaB3Z175m7nHu4xdjR4RdKWUbuzXvoKozsFafar8ZrvhIOtMLoTQG4fgjsr1Pql5XWF0TbcO2c0UnkUXUJSVxjdOUzOOwrPv+xUZF6si+YKo10EczuWKkq8+EyW5vK7wmiB8c4e2KkZpDJ0+cgrjHYZ0B1bjk+r3d6pK4zuGAXdr7ZnpW4+KK0w2n2OdmxFrrs8JSE7Nu23Vq8w+luh2YmJbj4orTC6E4n7bw7FTkX+m4LtTq0wut1QLXVhl26oK4wuNVE7sj6k7kj5w9auMDoflmVgL5rUFUaXAYvzT2HRD70rjM6Hc3nYfO2wiBNZYXQR4C3dVH4nX+jiK4wuFLmlmwedi/hqcIXRpWNmESsbqQv8fLrC6CJwX7qpMLrQxVcYXShySz1voaSuMLrUzCx0/YV+MO0lRheKzWNr3vJi1IdLjW/Otm6/YfrSz49/8SNj5/3V2DlnjJ3zl3Py+Q1jZ28Y+zwR9IYtZ2/Y8vkNW87ZMIace8b4Vz5W//4F2b0bJX5UX+DjRQ+/CZYRo9CpqtnkltqFn5r53PtnLjl7+scX1a/+Vu2aS6PUr7k0irk/vbT200tnfhoi6KvNtsgPvzF94aem/vX02e99OWvOivYwNws79WXDqPfQmW7eNH3mn85edeHk5Hgry4kYJSoY6pw4RxEaW52iXWJBcSrO4asKb4vZZmtqYmvrm5+pfekj2fS49G5LWws49+XBKDyIz2cm6l//p+Y9t9QycT4TyUSVqyaEYogE2yJqvEZDSJpQ5kVzryKiPnc+n2xp679+2Ljiq1zDRbw8ZtryYNQ2l9Su/U668edNSVx4zFPVSuL6y6VqOamWENdfSgopJ/3lZKCURLeaRMP1l10lcUwU76XVbKR5+svLG3fc9FgiVJYHozAwW8tvvbpeb3guNcrWk1J1sP85xwweeXKUoSNPRrCHjiqMwaNOfqgceXL14BeUyhWjkE2cpbXN96V3XO/zVBbxvVpvbe9lwCj7iavuzHipNmG3Q1yRpG9g+Oi3DRz91uqLXxel78Wv+02Jqf4jX9+RoRNOHz7i+KSvTxIuvZnzPpncHC68vcXLws92GTDKyXuft5p5o67c71RLSTKw95PK+/+OliqSJDsgPB9Vh91Tnte/bjdVx8J8hvGNWZ9lZj82enjZXXmpi1zEtqaK2iqqzpXKqok6JxCzI6I0HoltNRG15VCIPGaaWy6vVGmdc7GtGvgwSjrR7TGYKcp/Iqrhbsrjr8XkMdOWD6NiHChaBAtDFtxU2NxC80aqLGotVuktWTaMgrsrKY+pSVlLZS+LODGnkpRESz4pS6nidRFLSe+1ZfJq+aiRV4cGVw8OrF29aniwv1Kt2s6yvuOYZtlAf2V01eC6kZFVQwPlalX41iHeWeXR33Yuo8AahW9xfLsBsmqydg99xbvKb/p48qaPl075u9Lvvc2tXieBiXbddoxMUC3v8cTkhPeX//gTpVM+XnrT3+nhr9bqgIbHpc4SEiy0POrazmI0Eqlx03F789puBqmqVKpu3V6l3fcr77l/afcnunV7SqkiumMtLgV/bpfHl3Z7QmmPJ7JgsmY3cSXZdi0IjXR2DHm0NLczXgh0qgKpbzXysbubt15b+8nF05f/2/R3v4zMXH5+R2NMf8eCGBa/vLCnQiXBbYRKJKYwLj9/5nss9aUZm/WluXW+++Xa5cQ7S50/feUFjZ9/l++S8sktKrkhkAdtVs/3pWeUr9+4SzZqzRuuHP9/f17/l3e1ztvQ/Pd/aF3ymeY3z2peEgQjCu43z2xecmbzm2e2iJh7ltkhYvUETc6MNTHVCll0i/pLzooTW98ywyJWb3acbtmLPt244GONs/+89i/vnP76p1p33xo+39iVo4f4/G2nusSMQmee28/X5/xl7ey/aPzyqq0PPjg+PTPTbNWaWa2R1ptpvZHWZlNskyYG8azeQGNHyUKxRWaK4hBpWplFmmm9mc00WtjBsOzMbIrUmmmtYUIqGqZn06nZxsR0feK+u+pXfGXqn95av/isbHKc67DnhH8bVD0SXzJGudICz+xM6ycXTZz1J/WbrprOfOYSzVPNW5K1JE/5yUx9hjghWIjzqfqUrPjUij1lKRHEsQBBJE8d4lOr8ZnkSKp5pnmI5Ngp9SrmSp4isZ4CzVsmrXAOPm+I1lrZ7He/MPW59zVuuUayVDjzHiHvYU9zyRgVn9ensx99vX7JZ2Znplo5j60ZMe6n4RLHyTCa2MWOkYCICi04WF4oZgzfEgjag7WnwOKigmdREoVYyswwmqIYEWoJ22xbTdqN+V6U39XzrJ75+u2/nLnwk62bfwr9Ydl2Wa+NS8Mo6KWt5s++NXXFV6empsBeuZp5wwZlsHpD2WC2mNkEEfOUFiL4PmCrwbUcPgOrs6SH05AhYgVWat/0m2s2q0czOJYJ84ipSpwgRfOSZ7zlGvffWfvOedkDd3oelOC7yPbYsBSMgrtP77+j/qNvNCa2+jzjGIQijGigBlMiHsu3sSURZT6ARDrunI3FVHSYL6yAzZKBYimahSzvo+/JU+jpIeClbUlsvOfyLMvuumn2Jxd5fqON0R7UoN3ts85zn6bpLy7PH7gj9znIgp4dA4sBLtAS8VQGsl7loY0oIS9GBAb7DFtinW8HbAwhi1gXqwgR9XFR5lvCOtd9UdurEE1NFBFRoYh6T2+kafNHF2abbrGY9GTrNqPei0vyrffXrvlmM+VXSaA0DvUh4FAmBloRx6VQrGGCOAxyYUXb5DAUlVYSuqraAtiBJDECFY9itLecNwNVrCEWk9DsIBjkOjrMpdL71mztR9/wPfuTatcZzWGi+aufJ9NbwDjApBoGww7ERILHFVJiw1XVGCWC2bFxjSlfBLxnSYSwVTFIyKjMb944ZbsJxrw4HvND0IdZ3s9lw3mZyx10Ns3TG7+fjd1nfg/2rjIKSOpEXe2G77fSDA/QDNs2LkCPBI9MGOG/TS71MQTs3kC3zQfW3iiCDUYylNga5hQmQ1ssYzNF7PLK/BAQa1hIMY3AnMXxyRCKkovTxnRj4y+iu0D9yE1z3Ty0Kkjms9OtO3/Zyrktic5f3Yv5hBAs0yLCHDHTo6ENhuXhmxXNZcyje2GatFt4TxBFvLAwXMUUgWiY9vYOEUJmxBKzrBMU5qVZ1th4ndX2YO8qo7aFfD4zWW7Vc9tceRtinG2xMeioBkV0kTLHvDCpQJ06JGTEsA4OLmKlQjNTLCfWzKPInoLCOtiIQByDCnRZFb04JeoRS6jGC7r4PM19+sCdFPWidJVRsPGSpy3f4psXBQ6ANGoiVARCQUGFAR4uyV4wUeTDFMGIgjtPiBVTCbKS0uNUjsF8KSZSZKVCi6Mqo1pWoM2KvecdR14UpaqMthiOmOO91/q0eT3Yu8po8fp9gU4xajvcGUEslFgBbGMjEAHYsSYkOp6ogLO5xTtERMVcZkVDyCP4MBuEvKVETBNXfh/Nc5+2tFRJVq0r77K36xuQnKdxhV3vOQ2JjWIMv/KsCwqFGDgRlkBSVCEXsCbVRllgIey0kDVle4iIFZgbe/BUGVT5ZjhJQpjFFCZYDhfDtiuWUDZvwHROuPzP1sprdhs64sTRk/5izZv/LzL6xr/mt3FIVWUKB6XUJptno7m92Jdij7J9DCMJuHi7pcGqF8EP8bkN4Y0Wi0u78XYwYYkgTEFslk9T36jls1N5bUqyVNVp4sQ5FbW5LGRD7ERY2WxVJ83ZZGBo1dFvWfvuM1e/+k+qz3xxee8D3Lrd+w46rO9pz/dZuP7a2QnTbE7s2zgx1Bt6SRgNb3NAghszAQcRaJWAWrh2hohYa5cQQWwaUYZQW6g8q+xzwPr3nLXmj/926IgTKns9WUtlnzaV31WMS+YxB7FpDBKmqTp1buCZL1l3+pnDx79TV6/xWaPYlJowPd18pyZxrq0iscU1oo6RntJLwShgIAYDOGEh5hilFogQhojSMGKBl3bGS8cUZuV5eY/9R177wcoBz+5/ztGr/+iv1p72L+ve9enRkz4wePgJfU84qLR6vfb1i/JOySGMGSY+L+269+pXvXf16zcku+/L5rYLq7M/T/E+5ybavOnqxg0/EE04hHBkS3Ng89oX8GD3mloKRg0bCSCJNYPJuliIHm00W9i0CEEgNRoktOAEK2CrkjdqzY3X++lxn2e+VZe+/tI+T+0/7NhVJ54+esrfrDnlIyOveu/wi17T/9TDyrvu46qDrtw/eOjvjbzxr/ufe4ywm8NVmsPFQ2hSad158+TXPulb/DxaHEw5CbtBcEbxyBqHntPdZ1RVVHVbIIAp0kxYlaRSI4onps3QAHjhWiCQ6SlWdenYvRNf/+TE+R/N77tdy1WBmZTPSA1bd9VoeZ+nVp/10qFj3rL6dRtG3/y3o+jXb1j1B+8u77ZP2LIirCKsqaypSbm16dbx8z7cuudXkrBlJbT4kMW3IpSxqli59GTrPqMGA5ioL0DxFgAnRGIImjweYptCYuN6HA1g11Cn5jMbwfLN+szV39r892+rXfFVDTdIoQCqvGfjMkmSRPuHkl32qhx0WOXpR0ilypKeArFCoXmvpUpz43VbP7+hdfet6hJoJIyElViDk/a+XU68F6X7jAKJAeHZR3QxSG20bnG64cduwRLBltjahRYCWRJBmBdXzHNNStnM+PgX/2b87A3ZlnuhhFXggfk+zFJVQajPc1HCiNHqOZfcU9/4+ffGPvv+1t23CR9C7UnNU4VYHbMsYia9d6X7jAJpRDmAYnARCTbKF0C3x20xVBqRztZhQlGPpSp5bimXzPz4P8c+fXr9J5fwyUTYr2pHgTVvrFgp3cQTs1H5mFufmb7kc1vPOSPbej/UWtSSxUQzZe5Q0sut+4yCBkiiH17IIeQCmOwRvCjEoNNwtdRcDA+xbBx8uHjeu3GMzfqVTzR/faPPUsvSrYCJIoqlqoxKa/36+vEvfHjyP87MZ2tGp2fjSmyxmoBGVmMUTQjdg7IEjBpI4GNgMHhBmS3cNL3M4RZQtZwFiQcx32gNjimuv7aAmrK5GiymuBJbtnbVN2YuP9/XZyhVCTWkJBQKnHjfatV++I2t53x49vorLc10wiJsWstjiDXmxnnm9HjvPqNsOwAKsLRHwYAaz+hDAsNGSPWFSUWMADSlQthDDB1tQq3EBitK2vn61MBBh68+7p1ueIRZkSkSVFHig5Vuvmvyks+nm/khhQs2SofwuAAAEABJREFUa+RqabqlOZA3U7yqxYOtlglWb6ruM6oGRAAKDEWAKjiigsk+lciPaYkZ0eCQmBuDg6LCxOiiCqEErercyCvevubt/+hWr+VZl8q2KKsyxVwYnJ3RtKHKFE+3oJjhRfkvrOUtaOuHQHBMdbzg9JDqPqPxxasNqsUgc/iECFAGIAWDbtowJUZazSUaJ2MgwUZRgVfe7fGjJ39g6BVvzVuzgU4VcmGaipmmvcC6n5nI6zM+l9jUEpiQ6kVwJDRcG+eHzO/NvjSMcpsy8AwSYLKBbgDSESmCfg5U8kG88aKcFYYoX/e0mj5tWdB+DuMbgLx64HNGXvO+6jOP9BlxVkPI53y2UZsYliHAQdTltUn7+31KVNpnFAvUhqAKQ62ZTaGZnVyI9Y4Cu+6frLERVmXjAQw6eCI40m5ewM1S1kXtesx9jVGhw/X1D73oD0ZP/uDwi/+wut/T+WJPGjXqh3/3Nav/8H3lfQ/y7DsKlW4Lark/H7vPTz4ozr6n9cRYViWfnohPwmpHCOvbgSxNF4JCU3ohYUGbPi9WpHpk6D6jIMlzCqwgBosXQ8njmTAaMiTYx1bKVgrlKiom+Hz6d0Oj/c9+ZfUZL1p14mlr3vGpde/41Orf/z9r3vCh4ePf7YZHoVNVqeRxVxP7V1XqP/7PBz76xtlrL5ekz4dl7WCi2dRWcykWC3AITkCL4xBC1BIhghPs6FAYAr2mus8oCEkbEx5NfPDbgTCqaogqKUTmGigyhftf+uCmifM/kk+O2w5LXLL3kwaPObXv0JfZ1/RhDR+0Jkl6101bz/qzrWdvYIr9AV/esowP1OTs0a0quXLAEOBIdsB2xw1ifjCi4hSCRK/XdPcZNUCVS5sCBV3ZSoavdcUnWggRg5kYwj4tfAY2mSvN3vyzsbP+LN+62S6k/Nw9O+WbdXHhhFkoz7MH75m68NMPfvIdtWsuk6TED2StTbf56a2izs7BjpvlMxMcjfU4hNqpiKU4hAquWCPZPjhTLKLkLWp273W3FKestmjYhlDG0ww6iIXJAZhIMYIrVswaiiq2n2yLuEqlefct/IrJliUo8CQaCjXfcu/MZefB99S3zs2nx7VcFp9rqZSN359tvltdIizFOlkrMKpQaSuG45IRGjZihiVZ16bgmsQzt5h5vdaXhNEIAogh0UYXCBWIEjB+gJONYRCSRnBChufb8p77r3nDh6vPOspn9vddFmauS9JfX7/1nA9NXnw2O1LUqXPMC+t4vuRL7/212MIo55uNbGbCc73Ai0Fb38u8xvtNKYB+e7NozFhFYcZAL+klZLQDgypwqqCAKjhirYgYnR1XnVCQZYPPOWbNWz7W97TnSrliSWOC0atLGr+6bvbWn0ne0sQJHBOGT4yc1X1r0832cYUgn3ZmZ/LalC3IDiXCIpQIxxVTzBJr807AWBXhDKIhvdjcDp/09k1owxSqwTHAaDhhE8NFMOIGExxvQPrclcqrTzht5OT3JyPrxUiiyGurKVkWp2ZTY0akpTy7izRMiVlenGvd92tfnxZVuM9rk362JqqWlNBUNYxRBdsiGPCLWByHIWqMXpOlYjSgPAcGW8jjGXoMbQkQEjMRINS+vQ9c+9ZPDB75Woo9t0auqLlv3HjV2LkfSjfdQoXkaT7Fs49YudB4irFa3iu2iLp07L5sfLOQdi7nKakVvgKk5CEnJMygm7CBPefHhdfK7CDelKV6sS8BoyAkAr5S4AJaYi26UZtvPXgQ6111YPDw40bf9Nflp/wvnzbYhZqU2W3T3/nS+Jf/tn7tdxq3/kzV+VyyyTGbFQ7ATLNFombkQSndvEl8rqL55JjnhzarlNA0aLFqbwwbg0JTGnZIk4DQYJLpQVkCRkEDeAIWKmCFEgmqHZbQCCGQlLmhNcOveNvwMW9xo7v4tElWSxWeccbP+/DkRZ/Nw2W2ccMPfZ6kd9+W3n+7qJ22FttMRVUEgaTcN2ez+++wW6mrZhObjVqylrSKMIZpSpPY1DLtrjHWw9qg6fLp+4CO5ypWwMOAeBEukaAuNA0B9lzWSlatG/2jM/qff1z8yyAK2J2tjb/Y+tn3166/Un0m3muSNO/6r/EvnjH2r+/NJx7ggwq70w7DQVgtiPe2vk9b6ea7RCrNm6+aufICLZVJqnC8uYObR5SBhNC9eRzYBlwNnJvTi30JGO3AADIdWwLcBWpizTnfavY97knr3/PZylOfyw1SANdDXqlx44/GPvuB5j2/cuJy++gC4sq2m7nya9nWByR83LQ7n7c14cqLNTjGwG3c/NOJL35o89+/NX3wXklKVmnHJek5IwarLrraEnO2Fqaodsx2qFfG7jMaIPMyHxEvBqkQs40iNJhzyeCzXjJ66j+4dbv7Rk2cE1D0Wv/xRePnfsj+GihJvN0OqTbxPMn2DwrPxlgWUOMn0sj64QB2TNV07N6ZH10ofPnHBg3FXhRRtbyY8rbAb/Z54Xnmb9Yt64jr+tkZbtteDO1hIyAOmmS9KLfJgeceM3zsO92qtZ4bJ1FRaTVnvv2F8S9/jGcfSRKBDOKIF7NxETtd8+EFlkLAXGG6CYUw77RSpUB8LmJRbCSeQqEZmGxiBWItrmNWT/fuM9qBIyJkUIqq7RIyKi6Bn8HDjx96+Sm6ao3PM1Fn0mxMXfy5yYs/ZwSzX8FaRE28DSJBz703pGheigQUiQ+zCsvHPSzWWMii80zmxUjc5WZbEeeG2UnahEe67+jx3Y5O2J76gIgpQIIEtCHFTNW8PjN81MlDv/92HRhW70VV8lzzfPqyL0x/93xJW6HSWy0djtBQwxLEEFxse38wmQS+KP+ZF9JBWbRjmCPCgWReo36eJ6Jizc6IE1BYNbcn+5IwWgASUNMCfQFSn7ZWvewNq44/TbgeApuCXqauVPvB16e/dY5kTeHJtg0jjCAiFMm8xjuEWVETtmxwsDtiAQ7X8c0Ia0kR9cFQUctIEWRZiQHOvzBCvrfUUjCqAkaIQQSrPiCikpSGXvTqoVeems9Oi6iJF00qsz+7dPLr/+ztT0wktM7Ow1N4Z3hYCTkrZi3WQxNBC44dGl6kaF4sRpqYVVi3CHETulgjbDUiUUtPtq4zCsQZNARMGA0UdQ4ZeMZRQy99vfmiQtp7PizyvcH4+R/PZ2ekeIglEUqC0kBM2OQiOEIrBizvY8xjWzR20xITxeFFoivWSAdB2TxCDFGwOR42uWD3puoao+GpxIvq7PXf91n4Vp2HUSHgfJr17f+MoZe/0Q2NSGzePne2bv/lxL99nB+8xIVfUZRizxKUKJ39JLw/xGzrohoGS1k3x5shghlF5rciSQjLhG4Ov6AxwF7QcSK67YWxd1XXGAUSAGtsvCH58ddmXaLcKfGVMXeDI6uOfUeyfk8xvtSac/nklqkL/5nPjhroZDog2gxqhBHvIVK8QWLU6umI0RljUROy6QzaSamYiQ4r2xj4tDqh2SEZgljS7sPB6UXVLUYBx/vpyea3zxnbskWLPQo6Knk2etL7S48/0NuX5kDEZvY+TWeuvKB527WqXG1F1ZAO1SIM1lkQy8SbK3NNaRJiZGHG04UWPEYRxeQwQiOJNiHGoLBHCjEnxoTDUzfHoxIh3ZvSJUZBI88aN/5g9s6bfJr7nKslGIFUvuqlb6g+48W+ye+UDjShTlVbG6+rx39Nka1shCggMqGNYTSjBl0Mbafi2HGVNCGOz8oYiNIRG5iI4CDRCBrlw7x4QsLZ2knYDZtCmyghLb3YusSoSDbxYHrDlan9zUCu4gV4slbfk581eNRJeasuqiEoNN9qzHzv39Kt9xPERcAQStDY2wrrENgm03bao2BEoTIKs9r3Sg5LjACaUzItQhCRebPmmRIagTD+T2r55bvBKJcwn+d3/rJx+/VZmoGFBy/vSyPrh458rfQPcgNExBD0WhmYvfa79Ru+z88pYV+wTQxvmzXPJ4RIiKDJIsGLYWLe1iOK2BvIE7KIDaFbHIO4F86nQycxEZJeYsNEoj1fP2xwfsEytbvBKIC2mvUbfmgfQniZ3gcwtP/gF1b2e7ptTQDlEYmUOmlMT116rm/y3RA+YrlAFShji6gqPeAdlFjTqEhxMMKeEgvRPR0JFYVtrp+jUJkTQl7CtFAqRVQES6wRRqgxpx0Mdk+pbjCqLn3wntkbvt9s8Vtm7g0TTUZ3qT775Vrpk4CNxbzXcrX2k4sbd97k+vokt1gnKe1mpMFAGAAYsUyoDcUhQchznebZmQRiVQyIZeCSrMQ3FgEh0H7TYEu0xZYLM0zZCmKtMCxmbu/1bjAq0tx4bSWzf0lGgcnxATTtO+DZ5b2ebKgbJuDjhW1an65ddZFzieT2q4jBbllFebqJ7ZxoW9QiXtqWePPpjEECZyxLKAiTiWNCe5iEQjoMzuUtZBm6zaAjTLR4GCS+4aLdU7oLjPKxpH7tFU379zrhyFB2lb6BZx5lGzTsWB840aSU3n1ra9Mtrq/qPYB54PPMMKKMAuhHCKoWQBdIxqg5YYqE5aIOdFItofkiw4rcuIuwDylCrCysXPiwGxOUcc5I2y0Kott7uguMZuOb/b23pACiH0XUp7OVfQ6o7HewZJnSIibA5KVx+4389iICiBJbsFBGLBElpQFrdLhWEkRUSLCE0LCDZkSsiCNjISFuZdi2AL4wMXRCAqc++GI6RoQG/WjOgfeOx6Iu6J5UXWC0ef8dJS65zinNqbTS6tNfKNUhbwSHvQEybKa02brnNnHq7ZI7ByfwGYrgaTDjUR2EkighZjUhXKh2ShSLmKdxMMrMty6CRiQ0EkgwLW5GJ4cDqcVCHM3zHiHWm9IFRtN7bstaLQMUCACj2l99yqF8VWQePQqMthr5+GblcTdGpANogFLnfGmbIQbWAsqKYgjaVJsethUV5qlwEFSRtVCYoKajpxouABCG7z0TrJgCkZAQYRSap/eodIHR1t0b+ZoovH7lnpqM7pas21PylgBfiKJUVNKmn41fNRAwsaBdNQu7QFElxsy1zkwTTCiQuRa94hgqGJBSkGtVKuIZmYe2tJBnF+NRhRbhXWhpT4aE+uJrCWa2K0JZb6kuMJqP359xIfXeXnmWldbvqQPDXFoNGAEsRjH0rCYHKnYVPsIEJKRNWbdoyJNAcJGQQBlpBBGCgmeUmFl0EmFudPGgSYxGlMXYmjZwLpbAtDUZOsLJEcKNGqMHpQuMZrMzsMk73IDzebJqrSQlg62AIwKprlTWpMy2CGHDGyPgzRiFZWxerAHVODPmTMNXmMBkhFJqCnIYQkjtJKyW3rZDAp8a0w/pRVaFS4O9SyS2ubtD9HtGd4FRF3GIWsT+qVtgLYCSokFWqcLeNRqoDFlAtKzZdIQkdUXM/OiZFWoV0IXZUGPMGuHkggSyRcVEJGoSMr+RDSFUNDHm5+cuut6ro2R+smfsLjCarF6bJJ3XD9QBKAN+Pgp8o1st77Y36Ri1fOGEekF+H54AAAosSURBVKIeIjwja5EJgiKAWFzI8/ATTA+FtpepFSFOt4jwpjChhowdgwgB/GAERSaMvD+KeJg69wZJnJNVa2NNz+kuMFra9fElvieK8DnNp8fFZw8BAgLEJZV9DxJ1XpQmYsAqqKoUzQw1Dq2HGBEE09MLoSJMlaBtYWk3qw2VQc0nsrNiu5TR3hAMbHgINUNYkUJ1SeIqezxJerN1gdHK3geWk/ZFKklam+/imVZ125UB22flfZ5WWv84tZ++1fNpFeBV9CHAGWMxCLqwEtIW7BQG4zcVkSie6R2SmE5UCEGd6bCkDwHBxkKwsIOmrFwqV/Y7KHo9p7fFfUGnX37cE1uueBRSvup7YFP+wF3SfghqwyU+y9zI+sHnvTLP5n2wIQ1biIGtYgYnoSKIbNsoLcRyngqeTdFQ4MVGwuFNEFSbIFIhKZ0W0oRViqMVGQ1TNFGfDq0p731AEe61oQuMJuv2Ku93SKWUiDrVxNenZm/8gdjjLljPw0NVstbAC06s7LGfb86q2qHt3jWvRGwGyHZClmdeiBfKcl5CUEKpJ2Ld5tKNsBAnjAQzXpsxbeuyJuWIdMLUFas7V02079CXl4ZHQ7D3lMG6yLNW5wYOP65SLts6PtdK/8zVF/vJLcLzhYVAWQAT0z6k9g+tPv401zfgRYjYLtsWV4IdYZbBHwtC1Ey4IBFcMWLp5ntuyWIBL5EdgpgIPnYMSiCcKW0XX0VpVDF6n/Wv7j/kyDjNYr3Wu8Co+Ly070F+74PKTr2qK5fT+35d/8kl5hgDQFIMoi5v1ipPfe7QUSerS7yFHwKd2i6y9wCzGMAbQ+kmKqoiSDEp1IpYpFAsaTk6lhQNz6xtq5VZtpqgOCgFyluw2j8w+Lt/mKzbQ6VXWzcYFXV9gwMvOKF/1z3LpRIbUXI/84N/b911k9dEjLYOPp5a73OKBw59OTddr45IAR5VKvYfqgj5YisVLtBrYW47aAibUsHW0EKJTWEVbGKiMieFZRElniRcZipPeXbl6S/UpCwWkl5srgsnzYt3zm6lzz9xYGSNsvlU0wfumL7sXPsf3MOZkbrNcdzg6uGj3zx0xPGa554sK5AvgBcBX4kNC7EEHQmOxgLVYGiojDm1JiGtFi96sEVCXIpmqcJkcOWKk+r+h1RffHIysou0J5DpOekGo+FFa6VaedbvlV70utHBKr+MSqlU+8XlUxf8g+aZlso+n/uEGrD0bnh0+Nh3rDr+XQqlzaZAvIZMWG2egqt5nkS0leGhCWk3FbJ0E7Ntn4fioCQ03kaE+b4iKXGdWFXy/YccOXD8e5Ld9xXOJJT0qOoWowqIWq70Pe8VpTd8dPgJBwxXKwmk/vzbY59+d3b3bUmpKqISm2ouLhfNfT70sj9a/6fn9h34HCWr3IMromVxZeG650oeiS4RkxgxLVoKkgRdEhfdshT18FRqB4Nd1JeUSiQpaamcJMlgpTK8yx6VV71v4LV/nozuyimIajzNHtXdYjS+fA8YpX2fNvTmT/S98rSR33nh2icdXJ7YVDvvjNZVF/jx+9Wpq/RrZSCpDibVflcdFJ9zuV536j/u8sa/XPOMFw4/7gkDo6MDI6P9q0f6R0YGVq8eGFlt9mrsthAfGbGg6VBJcSGr+9v1TLcaJo6MDo6ODlAwumZw3fr+0bXV4ZHhXfcYfcJThp/+guoxpw6++e8rz3iJeiei0uN0iggvA90tUVvIe9c/XD7kyOoJ762c8L6BV32g8vJT0v7RfGpc+H20Uff1aT81lk9uFX60sciET1xyyEv7Tnxf+bj39h93Wt+x76oed1r1uNOrx787aIx5Qhw5/vTqsadV0cejTwv1p5lLyuae1on0sWCMHHta5ei3V1/5joET3t13wp+WOLcT/6T6vFcma3az0+bcEbN6u3eX0YCFOt7p6pxW+t3aPUv7Hlw98LDqUw8rP+5JWurLJh+cvfz86XM+OPOlD9ev+GrOx1YvmmX8Hs6PNpXH7d/3tMP7DzpiTg5+wZw9P45dpCh4QT82QnC+HHxEZ25p9S7pxl80r744ve573Nor+x5YWr+XVgc41SBO5FHBpwivRB6+LT6qKsBkmoHnEN/afHfjrPfWLjlr4rofTv78itmL/3XqM+/JaxOW5lHFKpki3WwsK1K/7sr8CxtqV3x16vofTF5zWXrBRye/ebY47sHdPNQyWWspGeUlGkkMIqo+bdYuO3virl/Vmql9cZBns5nP7r1t4j/OktwLDfQ79biLFxb0vvXAXXrFF7eOj7Vyr5yGykStkVxxfnPjL8iL9cUfaRmtsMSMhlfKxxPv83TsvmTLJu8Sx28v4MhXOK1mPVN361X2sTVUdl8519p088zme7NW6iS3K0Bu5zKb5zPXXGZu9w/5CK+4MxgFOPvQ2Wr4rMUuEfzOq3ZaTiRv1rkod2LdNLz3s7WsxeddrPA+YnXP9aLFHV1ERXWpDi2PTNsZjNorU+UBuGT/n6AqBqKIIupU6vy21j+EIzEuXW7JqrXlgQHlrumFY4p6ca6caHnXfTgSPEsIy6Ol7RRGuXuJJKO7ZE989iBfLbiyJjyVqLjy2mpS5Zvxwfa/zyBdbcpqnl86q7vto62WlMrCcV1J0qxcHRg89GXsTiuh6lEkO4VREVWHDBxxQnLo0auGB0ulUqVUHlk1nD//pMHDXiHgikjXm4q6ZHi09L9PHdz3yf3VvkSkWi4Nr11fec0HS+v3suOpml6enbfgjp+Y2/EpC52hyifOgWPf2XfyX/GL1eCRJ1VPOqPf/j2cRDxrLhmyquXd9h1800cHjjt98IWv6n/pKQOnfLzvwOeyQUWX7KC8oEdIdiKjAoBsmVLliYcMvuxNAy99Y7Lf7wi3NxESsqRNNRleU33mS4aOOXXgRa8u7f4EgUvdqa/9f3x93Sp4dL6qbqHTi+usMLpcWYtXrx0/uxVGdxyznTOD+8KCDrTC6IJgW+pJC6WT81phFBCWn8AosqDzWmF0QbAt6SS4XMRz+AqjS0rOQheH1IVOXWF0ocgt3byktJi1VxjdPvR2WpVbLCOLnb/TXulj5UAL/RjawWeF0Q4Uy8BYNJ28hhVGAWF5CHQu+pLLK1lhFBCWgfAjENKNE1lhtBsoLnYNFU1kEZ9B5x9/hdH5aDwStopwsUW6dPAVRrsE5IKX6dLts3P8FUY7UDwSBl8maJcp6PJyjwQqItKDh1WRhHundv3UVxjtOqTbs6CKQueSgL8ki27Pa3rs1qgIz0HI0kCwwujS4PrbVrXnoMQY/W0Fi467Ra+wssB2I2B0OlG33RMWUri0qy/kjB6Vc7jGlsqCXvpXt8LoUmKsan8YbFwmS3mYbdZ29sbhwNsEV5xFIwCk7Egus3ziXPRiO7QAjCYSD4zeoakrxQ+LADDCIhqB14etWcqgs8U5MMJ7iutDRyzRnf7oX6UDGgYwAibyCL3swOjDHpuTW5HtROBhAXyEgv8fAAD//zUn2DEAAAAGSURBVAMA3zAs5QVvWmgAAAAASUVORK5CYII="
              alt="에어픽"
            />
            <span>에어픽 공식파트너</span>
          </div>
        </div>
        <div className="content">
          <section className="left">
            <div className="airport">인천공항</div>
            <h1>
              <span className="blue">와와</span>주차대행
            </h1>
            <div className="sub">인천공항 주차대행 전문</div>
            <div className="goldline"></div>
            <div className="info">
              <a href="https://wawavalet.com" target="_blank" rel="noopener noreferrer">
                <span className="icon">◎</span>
                <span>wawavalet.com</span>
              </a>
              <a href="tel:01053534781">
                <span className="icon">☎</span>
                <span>010-5353-4781</span>
              </a>
              <div>
                <span className="icon">⌖</span>
                <span>인천공항 T1, T2</span>
              </div>
            </div>
          </section>
          <div className="divider"></div>
          <section className="right">
            <h2>—　예약하기　—</h2>
            <a
              className="qrbox"
              href="https://airpick-reservation.web.app/h/wawa?src=business_card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="data:image/png;base64,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"
                alt="와와주차대행 예약 QR"
              />
            </a>
            <a
              className="btn"
              href="https://airpick-reservation.web.app/h/wawa?src=business_card"
              target="_blank"
              rel="noopener noreferrer"
            >
              예약 페이지 바로가기
            </a>
            <div className="note">QR을 누르셔도 예약 페이지로 이동합니다.</div>
          </section>
        </div>
        <div className="bottom"></div>
      </main>
    </div>
  );
};
